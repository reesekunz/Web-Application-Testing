// Display balls and strikes count for players at-bat
// Update display when user records activity on Dashboard component

import React from "react";
import ReactDOM from "react-dom";

class DisplayScoreboard extends React.Component {
  constructor() {
    super();
    this.state = {
      strike: "",
      ball: "",
      foul: "",
      hit: ""
    };
  }

  render() {
    return <div className="scoreboard">
        Scoreboard Display Placeholder
        </div>;
  }
}

export default DisplayScoreboard;
