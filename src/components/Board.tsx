import React, { useState, useEffect, useRef } from "react";
import DefaultPositions from "../assets/default-positions.json";
import { ColorBishop } from "../functions/Bishop";
import { ColorKnight } from "../functions/Knight";
import { ColorPawn } from "../functions/Pawn";
import { ColorQueen } from "../functions/Queen";
import { ColorRook } from "../functions/Rook";
import { ColorKing } from "../functions/King";


export default function Board() {
  const size = [1, 2, 3, 4, 5, 6, 7, 8];
  const [gameboard, setGameboard]: any = useState([]);
  const [gameboardColors, setGameboardColors]: any = useState([]);
  const [activePiece, setActivePiece]: any = useState({});
  const [inHand, setInHand]: any = useState("");
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

  // add pieces to default positions

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
  function handleMouseOver(yIndex: any, xIndex: any) {
    if (activePiece?.id !== undefined) {
      handlePieceTooltip(gameboard[yIndex][xIndex], yIndex, xIndex);
    } else {
      handlePieceTooltip(activePiece, yIndex, xIndex);
    }
  }
  function handlePieceTooltip(pieceObj: any, yIndex: any, xIndex: any) {
    if (pieceObj === null || pieceObj === undefined) {
      return;
    }
    var bcg = JSON.parse(JSON.stringify(gameboard));
    var bc = JSON.parse(JSON.stringify(gameboardColors));
    if (pieceObj.icon === "Pawn") {
      bc = ColorPawn(bcg, yIndex, xIndex, pieceObj.facing);
    }
    if (pieceObj.icon === "Queen") {
      bc = ColorQueen(bcg, yIndex, xIndex);
    }
    if (pieceObj.icon === "Bishop") {
      bc = ColorBishop(bcg, yIndex, xIndex);
    }
    if (pieceObj.icon === "Rook") {
      bc = ColorRook(bcg, yIndex, xIndex);
    }
    if (pieceObj.icon === "Knight") {
      bc = ColorKnight(bcg, yIndex, xIndex);
    }
    if (pieceObj.icon === "King") {
      bc = ColorKing(bcg, yIndex, xIndex);
    }
    setGameboardColors(bc);
  }
  function handlePieceSelect(currentY: any, currentX: any) {
    const pieceObj = gameboard[currentY][currentX];
    console.log(pieceObj);
    handlePieceTooltip(pieceObj, currentY, currentX);

    if (pieceObj.id === activePiece.id) {
      // handle piece un-select
      setActivePiece({});
      return;
    } else {
      setActivePiece(pieceObj);
    }

    var bcg = JSON.parse(JSON.stringify(gameboard));
    if (bcg[currentY] !== undefined) {
      if (bcg[currentY][currentX] !== undefined) {
        handlePieceTooltip(activePiece, currentY, currentX);
      }
    }
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
      activePiece.id === gameboard[y][x].id
    )
      class_name += "inplay ";
    return class_name;
  }
  return (
    <div className="chess-board">
      {size.map((i, yIndex) => (
        <div className="row">
          {size.map((i2, xIndex) => (
            <div
              onMouseOver={() =>
                handlePieceTooltip(gameboard[yIndex][xIndex], yIndex, xIndex)
              }
              className={determineClassName(yIndex, xIndex)}
              onClick={() => console.log(inHand)}
            >
              {gameboard[yIndex] !== undefined &&
                gameboard[yIndex][xIndex] !== undefined &&
                gameboard[yIndex][xIndex].icon !== undefined ? (
                <img
                  draggable="true"
                  src={`assets/pieces/${gameboard[yIndex][xIndex].icon}-${gameboard[yIndex][xIndex].color}.svg`}
                  className={
                    gameboard[yIndex][xIndex].color +
                    " " +
                    (inHand === gameboard[yIndex][xIndex].id ? "resizable" : "")
                  }
                  alt={gameboard[yIndex][xIndex].icon}
                  onDrag={() => setInHand(gameboard[yIndex][xIndex].id)}
                />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
