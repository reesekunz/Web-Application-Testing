// Buttons user can click whenever this is a strike, ball, foul, or hit (don't specify type of hit)
// Changes in this component should update info shown by Display component

// a foul increases strikes by 1 but only up to 2

import React from "react";

class Update extends React.Component {
  constructor() {
    super();
    this.state = {
      fouls: 30,
      strikes: 0,
      hits: 13,
      balls: 0,
      home: 3,
      away: 2,
      inning: 7,
      outs: 1
    };
  }
  // Need arrow functions here instead of just { } because not using .bind(this) below so 'this' is defined

  // Foul Counter
  foulCountChange = () => {
    // Increasing fouls by 1 but not strikes if already have 2 strikes
    if (this.state.strikes === 2) {
      this.setState({
        fouls: this.state.fouls + 1
      });
    } else {
      // Increasing strikes by 1 and fouls by 1
      this.setState({
        fouls: this.state.fouls + 1,
        strikes: this.state.strikes + 1
      });
    }
  };

  // Strike Counter
  strikeCountChange = () => {
    // resetting balls and strikes if strike out
    if (this.state.strikes === 2) {
      this.setState({
        strikes: 0,
        balls: 0
      });
    } else {
      // Increasing strikes by 1
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };

  // Hit Counter
  hitCountChange = () => {
    // +1 to hit count and reset balls and strikes
    this.setState(prevState => ({
      hits: prevState.hits + 1,
      strikes: 0,
      balls: 0
    }));
  };

  // Ball Counter
  ballCountChange = () => {
    // reset balls and strikes if walk
    if (this.state.balls === 3) {
      this.setState({
        strikes: 0,
        balls: 0
      });
    } else {
      this.setState({
        balls: this.state.balls + 1
      });
    }
  };

  // Out Counter
  outCountChange = () => {
    // reset if 3 outs
    if (this.state.outs === 2) {
      this.setState({
        strikes: 0,
        balls: 0,
        outs: 0
      });
    } else {
      // add one out and reset balls/strikes
      this.setState({
        outs: this.state.outs + 1,
        strikes: 0,
        balls: 0
      });
    }
  };

  // Inning Counter
  inningCountChange = () => {
    // +1 to inning count and reset strikes/balls/outs
    this.setState(prevState => ({
      inning: prevState.inning + 1,
      strikes: 0,
      balls: 0,
      outs: 0
    }));
  };

  // Home Score Counter
  homeCountChange = () => {
    // +1 to score count
    this.setState(prevState => ({
      home: prevState.home + 1
    }));
  };

  // Away Score Counter
  awayCountChange = () => {
    // +1 to score count
    this.setState(prevState => ({
      away: prevState.away + 1
    }));
  };

  render() {
    console.log("strikes count", this.state.strikes);
    console.log("balls count", this.state.balls);
    console.log("fouls count", this.state.fouls);
    console.log("hits count", this.state.hits);
    console.log("outs count", this.state.outs);
    console.log("innings count", this.state.inning);
    return (
      <div>
        <div className="score-row">
          {/* // Away Score  */}
          <h2 className="team">Away </h2>
          <div className="score">{this.state.away}</div>
          {/* // Home Score */}
          <h2 className="team">Home </h2>
          <div className="score">{this.state.home}</div>
        </div>
        <div className="second-row">
          {/* // Balls  */}
          <h3 className="balls">Balls: {this.state.balls}</h3>
          {/* // Strikes  */}
          <h3 className="strikes">Strikes: {this.state.strikes}</h3>
          {/* // Outs */}
          <h3 className="outs">Outs: {this.state.outs}</h3>
          {/* // Innings */}
          <h3 className="inning">Inning: {this.state.inning}</h3>
        </div>

        <div className="third-row">
          {/* // Hits */}
          <h3 className="hits">Total Hits: {this.state.hits}</h3>
          {/* // Foul  */}
          <h3 className="fouls">Total Fouls: {this.state.fouls}</h3>
        </div>

        {/* // Buttons */}
        <div className="buttonheader">Update Scoreboard:</div>
        <div className="updatebuttons">
          <button className="buttonz" onClick={this.awayCountChange}>Away Score + 1</button>
          <button className="buttonz" onClick={this.homeCountChange}>Home Score + 1</button>
          <button className="buttonz" data-testid="button" onClick={this.ballCountChange}>
            {" "}
            Balls + 1{" "}
          </button>
          <button className="buttonz" onClick={this.strikeCountChange}>
            {" "}
            Strikes + 1
          </button>
          <button className="buttonz" onClick={this.outCountChange}>
            Outs + 1{" "}
          </button>
          <button className="buttonz" onClick={this.inningCountChange}>
            Inning + 1
          </button>
          <button className="buttonz" onClick={this.hitCountChange}>
            Hits + 1
          </button>
          <button className="buttonz" onClick={this.foulCountChange}>
            Fouls + 1
            {/* <button onClick={this.hitCountChange.bind(this)}> - would do this for each instead of arrow functions above*/}
          </button>
        </div>
      </div>
    );
  }
}

export default Update;
