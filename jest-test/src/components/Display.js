// Display balls and strikes count for players at-bat
// Update display when user records activity on Dashboard component

import React from "react";

import Balls from "./Balls"
import Fouls from "./Fouls"
import Hits from "./Hits"


class DisplayScoreboard extends React.Component {
  constructor() {
    super();
    this.state = {
      strikes: 0,
      balls: 0,
      fouls: 0,
      hits: 0, 
    };
  }

  render() {
    return <div className="scoreboard">

        <h4>Balls: </h4>
        <Balls />

        <h1>Baseball Scoreboard: </h1>
        <Fouls />

        <h4>Hits:</h4>
        <Hits/>

        </div>;
  }
}

export default DisplayScoreboard;
