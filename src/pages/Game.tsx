import React from "react";
import Sideboard from "../components/Sideboard";
import Board from "../components/Board";

export default function Game() {
  return (
    <div className="game-wrapper">
      <Board />
      <Sideboard />
    </div>
  );
}
