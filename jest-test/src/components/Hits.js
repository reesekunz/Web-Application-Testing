// Buttons user can click whenever this is a strike, ball, foul, or hit (don't specify type of hit)
// Changes in this component should update info shown by Display component

// balls and strikes reset to 0 when a hit is recorded.

import React from "react";

class Hits extends React.Component {
  constructor() {
    super();
    this.state = {
      hits: 0
    };
  }
  // Need arrow function here instead of just {} because not using .bind(this) below so 'this' is defined
  hitCountChange = () => {
    this.setState(prevState => ({
      hits: prevState.hits + 1
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.hitCountChange}>
          {/* <button onClick={this.hitCountChange.bind(this)}> */}
          {this.state.hits}
        </button>
      </div>
    );
  }
}

export default Hits;
