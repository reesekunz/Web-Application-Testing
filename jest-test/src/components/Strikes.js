// Buttons user can click whenever this is a strike, ball, foul, or hit (don't specify type of hit)
// Changes in this component should update info shown by Display component

// balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// balls and strikes reset to 0 when a hit is recorded.

import React from "react";

class Strikes extends React.Component {
  constructor() {
    super();
    this.state = {
      strikes: 0
    };
  }
  // Need arrow function here instead of just {} because not using .bind(this) below so 'this' is defined
  strikeCountChange = () => {
    this.setState(prevState => ({
      strikes: prevState.strikes + 1
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.strikeCountChange}>
          {/* <button onClick={this.hitCountChange.bind(this)}> */}
          {this.state.strikes}
        </button>
      </div>
    );
  }
}

export default Strikes;
