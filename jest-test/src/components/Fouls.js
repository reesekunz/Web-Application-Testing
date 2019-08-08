// Buttons user can click whenever this is a strike, ball, foul, or hit (don't specify type of hit)
// Changes in this component should update info shown by Display component

// a foul increases strikes by 1 but only up to 2

import React from "react";

class Fouls extends React.Component {
  constructor() {
    super();
    this.state = {
      fouls: 0,
      strikes: 0
    };

  }
  // Need arrow functions here instead of just { } because not using .bind(this) below so 'this' is defined


  foulCountChange = () => {
    // Increasing fouls by 1 but not strikes if already have 2 strikes 
    if(this.state.strikes === 2){
      this.setState({
          fouls: this.state.fouls + 1,
      });
    }else {
      // Increasing strikes by 1 and fouls by 1 
      this.setState({
        fouls: this.state.fouls + 1,
        strikes: this.state.strikes + 1

      });
    }
}

  strikeCountChange = () => {
    this.setState(prevState => ({
      strikes: prevState.strikes + 1
    }));
  };

//   componentDidUpdate(prevProps, prevState)


  render() {
    console.log('strike count', this.state.strikes)
    return (
      <div>
        
        {/* // Foul Button  */}
        <h3>Fouls</h3>
        <button onClick={this.foulCountChange}>
          {/* <button onClick={this.hitCountChange.bind(this)}> */}
          {this.state.fouls}
        </button>
        
        {/* // Strikes Button  */}
        <h3>Strikes</h3>
        <button onClick={this.strikeCountChange}>
          {/* <button onClick={this.hitCountChange.bind(this)}> */}
          {this.state.strikes}
        </button>

      </div>
    );
  }
}

export default Fouls;
