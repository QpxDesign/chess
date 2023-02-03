import React, { useEffect, useState } from "react";
import "./App.css";
import DefaultPositions from "./assets/default-positions.json";
import { ColorBishop } from "./functions/Bishop";
import { ColorKnight } from "./functions/Knight";
import { ColorPawn } from "./functions/Pawn";
import { ColorQueen } from "./functions/Queen";
import { ColorRook } from "./functions/Rook";

function App() {
  const size = [1, 2, 3, 4, 5, 6, 7, 8];
  const [gameboard, setGameboard]: any = useState([]);
  const [gameboardColors, setGameboardColors]: any = useState([]);
  const [activePiece, setActivePiece]: any = useState({});
  useEffect(() => {
    // create gameboard and gameboardColors
    const gb = new Array(8);
    const gbc = new Array(8);
    for (var i = 0; i < gb.length; i++) {
      gb[i] = new Array(8);
    }
    for (var i = 0; i < gbc.length; i++) {
      gbc[i] = new Array(8);
    }
    // add default colors
    for (var bh1 = 0; bh1 < gbc.length; bh1++) {
      for (var bh2 = 0; bh2 < gbc.length; bh2++) {
        gbc[bh1][bh2] = "default";
      }
    }
    setGameboardColors(...gbc);
    // add pieces to default positions
    DefaultPositions.map((pos) => {
      const pieceObject = {
        icon: pos.icon,
        id: pos.id,
        color: pos.color,
        facing: pos.facing,
      };
      gb[Number(pos.rowNum)][Number(pos.colNum)] = pieceObject;
    });
    setGameboard(gb);
  }, []);
  function handlePreviewReset() {
    const gbc = new Array(8);
    for (var i = 0; i < gbc.length; i++) {
      gbc[i] = new Array(8);
    }
    for (var bh1 = 0; bh1 < gbc.length; bh1++) {
      for (var bh2 = 0; bh2 < gbc.length; bh2++) {
        gbc[bh1][bh2] = "default";
      }
    }
    setGameboardColors(...gbc);
  }
  function handlePieceTooltip(pieceObj: any, yIndex: any, xIndex: any) {
    if (pieceObj === null || pieceObj === undefined) {
      return;
    }

    var bcg = JSON.parse(JSON.stringify(gameboard));
    if (pieceObj.icon === "Pawn") {
      bcg = ColorPawn(bcg, yIndex, xIndex, pieceObj.facing);
    }
    if (pieceObj.icon === "Queen") {
      bcg = ColorQueen(bcg, yIndex, xIndex);
    }
    if (pieceObj.icon === "Bishop") {
      bcg = ColorBishop(bcg, yIndex, xIndex);
    }
    if (pieceObj.icon === "Rook") {
      bcg = ColorRook(bcg, yIndex, xIndex);
    }
    if (pieceObj.icon === "Knight") {
      bcg = ColorKnight(bcg, yIndex, xIndex);
    }
    setGameboardColors(bcg);
  }
  function handlePieceSelect(currentY: any, currentX: any) {
    const pieceObj = gameboard[currentY][currentX];
    if (activePiece !== undefined) {
      handlePieceTooltip(pieceObj, currentY, currentX);
    }

    if (pieceObj?.id === activePiece?.id) {
      setActivePiece({});
      return;
    }
    var bcg = JSON.parse(JSON.stringify(gameboard));
    console.log(gameboard);
    if (bcg[currentY] !== undefined) {
      if (bcg[currentY][currentX] !== undefined) {
        setActivePiece(pieceObj);
        console.log(activePiece);
        handlePieceTooltip(activePiece, currentY, currentX);
      }
    }

    setGameboardColors(bcg);
  }
  function determineClassName(y: any, x: any) {
    var class_name = "square ";
    if ((y % 2 === 0 && x % 2 === 0) || (y % 2 === 1 && x % 2 === 1)) {
      class_name += "dark ";
    } else {
      class_name += "light ";
    }

    if (
      gameboardColors !== undefined &&
      gameboardColors[y] !== undefined &&
      gameboardColors[y][x] !== undefined
    ) {
      class_name += gameboardColors[y][x];
      class_name += " ";
    }
    if (
      gameboard[y] !== undefined &&
      gameboard[y][x] !== undefined &&
      gameboard[y][x].id !== undefined &&
      activePiece?.id === gameboard[y][x].id
    )
      class_name += "inplay ";
    return class_name;
  }
  return (
    <div className="App">
      <div className="chess-board">
        {size.map((i, yIndex) => (
          <div className="row">
            {size.map((i2, xIndex) => (
              <div
                onMouseOver={() =>
                  handlePieceTooltip(gameboard[yIndex][xIndex], yIndex, xIndex)
                }
                onClick={() => handlePieceSelect(yIndex, xIndex)}
                className={determineClassName(yIndex, xIndex)}
              >
                {gameboard[yIndex] !== undefined &&
                gameboard[yIndex][xIndex] !== undefined &&
                gameboard[yIndex][xIndex].icon !== undefined ? (
                  <img
                    src={
                      "assets/pieces/" + gameboard[yIndex][xIndex].icon + ".svg"
                    }
                    className={gameboard[yIndex][xIndex].color}
                    alt={gameboard[yIndex][xIndex].icon}
                  />
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
