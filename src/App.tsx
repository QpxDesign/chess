import React, { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import WelcomeScreen from "./components/WelcomeScreen";
import Sideboard from "./components/Sideboard";

function App() {
  return (
    <div className="App">
      <Board />
      <WelcomeScreen />
    </div>
  );
}

export default App;
