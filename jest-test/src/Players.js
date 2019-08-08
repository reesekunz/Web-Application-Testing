import React from "react";

const Players = props => {
  return (
    <div>
      {props.players.map(player => (
        <div key={player.id} data-testid="player">
          {player.name}
        </div>
      ))}
    </div>
  );
};

export default Players;
