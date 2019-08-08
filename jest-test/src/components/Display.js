// Display balls and strikes count for players at-bat
// Update display when user records activity on Dashboard component

import React from "react";
import ReactDOM from "react-dom";

import Strikes from "./Strikes"
import Balls from "./Balls"
import Fouls from "./Fouls"
import Hits from "./Hits"


class DisplayScoreboard extends React.Component {
  constructor() {
    super();
    this.state = {
      strike: 0,
      ball: 0,
      foul: 0,
      hit: 0, 
    };
  }

  render() {
    return <div className="scoreboard">

        <h4>{this.state.ball}</h4>
        <Balls />

        <h4>{this.state.strike}</h4>
        <Strikes />

        <h4>{this.state.foul}</h4>
        <Fouls />

        <h4>{this.state.hit}</h4>
        <Hits propsHit={this.state.hit}/>

        </div>;
  }
}

export default DisplayScoreboard;
