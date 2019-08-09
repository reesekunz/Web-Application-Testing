// Buttons user can click whenever this is a strike, ball, foul, or hit (don't specify type of hit)
// Changes in this component should update info shown by Display component

// a foul increases strikes by 1 but only up to 2

import React from "react";

class Update extends React.Component {
  constructor() {
    super();
    this.state = {
      fouls: 0,
      strikes: 0,
      hits: 0,
      balls: 0
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
    if (this.state.strikes === 2) {
      this.setState({
        strikes: 0,
        balls: 0
      });
    } else {
      // Increasing strikes by 1 and fouls by 1
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };

  // Hit Counter
  hitCountChange = () => {
    this.setState(prevState => ({
      hits: prevState.hits + 1,
      strikes: 0,
      balls: 0
    }));
  };

  // Ball Counter
  ballCountChange = () => {
    if (this.state.balls === 3) {
      this.setState({
        strikes: 0,
        balls: 0
      });
    } else {
      // Increasing strikes by 1 and fouls by 1
      this.setState({
        balls: this.state.balls + 1
      });
    }
  };

  render() {
    console.log("strikes count", this.state.strikes);
    console.log("balls count", this.state.balls);
    console.log("fouls count", this.state.fouls);
    console.log("hits count", this.state.hits);

    return (
      <div>
        {/* // Foul Button  */}
        <button onClick={this.foulCountChange}>
          {/* <button onClick={this.hitCountChange.bind(this)}> - would do this for each instead of arrow functions above*/}
          Fouls: {this.state.fouls}
        </button>

        {/* // Strikes Button  */}
        <button onClick={this.strikeCountChange}>
          Strikes: {this.state.strikes}
        </button>

        {/* // Hits Button  */}

        <button onClick={this.hitCountChange}>Hits: {this.state.hits}</button>

        {/* // Balls Button  */}

        <button data-testid="button" 
        onClick={this.ballCountChange}>
          Balls: {this.state.balls}
        </button>
      </div>
    );
  }
}

export default Update;
