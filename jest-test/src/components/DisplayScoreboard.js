// Display balls and strikes count for players at-bat
// Update display when user records activity on Dashboard component

import React from "react";

import Update from "./UpdateScoreboard"

class DisplayScoreboard extends React.Component {
  constructor() {
    super();
    this.state = {
      strikes: "",
      balls: "",
      fouls: "",
      hits: "", 
      home: "",
      away: "",
      inning: "",
      outs: "",
    };
  }

  render() {
    return <div className="scoreboard">
      <h2>Baseball Scoreboard</h2>
        <Update />
        </div>;
  }
}

export default DisplayScoreboard;
