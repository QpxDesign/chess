import React from "react";
import WelcomeScreen from "../components/WelcomeScreen";
import Board from "../components/Board";
import Sideboard from "../components/Sideboard";

export default function HomePage() {
  return (
    <div>
      <WelcomeScreen />
      <div className="App">
        <Board mode={"display"} />
        <Sideboard />
      </div>
    </div>
  );
}
