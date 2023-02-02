import React, { useEffect, useState } from "react";
import "./App.css";
import DefaultPositions from "./assets/default-positions.json";

function App() {
  const size = [1, 2, 3, 4, 5, 6, 7, 8];
  const [gameboard, setGameboard]: any = useState([]);
  const [gameboardColors, setGameboardColors] : any = useState([])
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
        gbc[bh1][bh2]="default"
      }
    }
    setGameboardColors(gbc)
    // add pieces to default positions
    DefaultPositions.map((pos) => {
      const pieceObject = {
        icon: pos.icon,
        id: pos.id,
        color: pos.color,
      };
      gb[Number(pos.rowNum)][Number(pos.colNum)] = pieceObject;
    });
    setGameboard(gb);
  }, []);
  function handlePieceMove(pieceObj : any, yIndex: any, xIndex: any) {
    if (pieceObj.icon === "Pawn") {
      gameboardColors[yIndex][xIndex] = "green"
      setGameboardColors(gameboardColors)
      console.log(gameboardColors)
    }
  }
  return (
    <div className="App">
      <div className="chess-board">
        {size.map((i, yIndex) => (
          <div className="row">
            {size.map((i2, xIndex) => (
              <div
                className={
                  (yIndex % 2 === 0 && xIndex % 2 == 0) ||
                  (yIndex % 2 == 1 && xIndex % 2 == 1)
                    ? "square dark"
                    : "square light"
                }
              >
                {gameboard[yIndex] !== undefined &&
                gameboard[yIndex][xIndex] !== undefined &&
                gameboard[yIndex][xIndex].icon !== undefined ? (
                  <img
                    src={
                      "assets/pieces/" + gameboard[yIndex][xIndex].icon + ".svg"
                    }
                    className={gameboard[yIndex][xIndex].color + " " + gameboardColors[yIndex][xIndex]}
                    onMouseOver={() => handlePieceMove(gameboard[yIndex][xIndex], yIndex, xIndex)}
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
