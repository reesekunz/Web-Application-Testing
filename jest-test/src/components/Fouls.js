// Buttons user can click whenever this is a strike, ball, foul, or hit (don't specify type of hit)
// Changes in this component should update info shown by Display component

// a foul increases strikes by 1 but only up to 2

import React from "react";

class Fouls extends React.Component {
  constructor() {
    super();
    this.state = {
      fouls: 0
    };
  }
  // Need arrow function here instead of just {} because not using .bind(this) below so 'this' is defined
  foulCountChange = () => {
    this.setState(prevState => ({
      fouls: prevState.fouls + 1
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.foulCountChange}>
          {/* <button onClick={this.hitCountChange.bind(this)}> */}
          {this.state.fouls}
        </button>
      </div>
    );
  }
}

export default Fouls;
