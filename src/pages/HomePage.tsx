import React from "react";
import Board from "../components/Board";
import WelcomeScreen from "../components/WelcomeScreen";
import Sideboard from "../components/Sideboard";

export default function HomePage() {
  return (
    <div>
      {" "}
      <Board />
      <WelcomeScreen />
    </div>
  );
}
