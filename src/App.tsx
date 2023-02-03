import React, { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
