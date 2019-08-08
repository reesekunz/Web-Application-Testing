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
      strike: "",
      ball: "",
      foul: "",
      hit: ""
    };
  }

  render() {
    return <div className="scoreboard">

        <h4>Balls:</h4>
        <Balls />

        <h4>Strikes:</h4>
        <Strikes />

        <h4>Fouls:</h4>
        <Fouls />

        <h4>Hits:</h4>
        <Hits />
        
        </div>;
  }
}

export default DisplayScoreboard;
