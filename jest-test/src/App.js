import React from 'react';
import './App.css';
import DisplayScoreboard from "./components/DisplayScoreboard"

function App() {
  return (
    <div className="App">
    <h1>Baseball Scoreboard: </h1>
      <DisplayScoreboard />
    </div>
  );
}

export default App;
