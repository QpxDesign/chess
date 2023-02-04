import React, { useState, useEffect, useRef } from "react";
import DefaultPositions from "../assets/default-positions.json";
import { canBishopMove, ColorBishop } from "../functions/Bishop";
import { canKnightMove, ColorKnight } from "../functions/Knight";
import { ColorPawn } from "../functions/Pawn";
import { canPawnMove } from "../functions/Pawn";
import { canQueenMove, ColorQueen } from "../functions/Queen";
import { canRookMove, ColorRook } from "../functions/Rook";
import { canKingMove, ColorKing } from "../functions/King";
import uuid from "react-uuid";

export default function Board() {
  const size = [1, 2, 3, 4, 5, 6, 7, 8];
  const [gameboard, setGameboard]: any = useState([[], []]);
  const [gameboardColors, setGameboardColors]: any = useState([[], []]);
  const [activePiece, setActivePiece]: any = useState({});
  const [inHand, setInHand]: any = useState("");
  // create gameboard and gameboardColors
  useEffect(() => {
    console.log("boo");
    const gb = new Array(8);
    const bcg = new Array(8);
    for (var i = 0; i < gb.length; i++) {
      gb[i] = new Array(8);
    }
    for (var i = 0; i < bcg.length; i++) {
      bcg[i] = new Array(8);
    }
    for (var x1 = 0; x1 < bcg.length; x1++) {
      for (var x2 = 0; x2 < bcg.length; x2++) {
        gb[x1][x2] = null;
      }
    }

    // add default colors
    for (var bh1 = 0; bh1 < bcg.length; bh1++) {
      for (var bh2 = 0; bh2 < bcg.length; bh2++) {
        bcg[bh1][bh2] = "";
      }
    }
    setGameboardColors(...bcg);

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
        gbc[bh1][bh2] = "";
      }
    }
    setGameboardColors(gbc);
  }

  function handlePieceTooltip(pieceObj: any, yIndex: any, xIndex: any) {
    if (pieceObj === null || pieceObj === undefined) {
      return;
    }
    var gb = JSON.parse(JSON.stringify(gameboard));
    var gbc = JSON.parse(JSON.stringify(gameboardColors));
    if (pieceObj.icon === "Pawn") {
      gbc = ColorPawn(gb, yIndex, xIndex, pieceObj.facing);
    }
    if (pieceObj.icon === "Queen") {
      gbc = ColorQueen(gb, yIndex, xIndex);
    }
    if (pieceObj.icon === "Bishop") {
      gbc = ColorBishop(gb, yIndex, xIndex);
    }
    if (pieceObj.icon === "Rook") {
      gbc = ColorRook(gb, yIndex, xIndex);
    }
    if (pieceObj.icon === "Knight") {
      gbc = ColorKnight(gb, yIndex, xIndex);
    }
    if (pieceObj.icon === "King") {
      gbc = ColorKing(gb, yIndex, xIndex);
    }
    setGameboardColors(gbc);
  }
  function handleMouseOver(pieceObj: any, yIndex: any, xIndex: any) {
    if (activePiece === undefined || activePiece.id === undefined) {
      handlePieceTooltip(pieceObj, yIndex, xIndex);
    }
  }

  function handleSquareClick(currentY: any, currentX: any) {
    var pieceObj = gameboard[currentY][currentX];
    console.log("aabbcc");
    if (pieceObj !== null && pieceObj !== undefined) {
      console.log(pieceObj);

      if (
        activePiece.id === undefined ||
        pieceObj.id === undefined ||
        activePiece?.id !== pieceObj?.id
      ) {
        Object.assign(pieceObj, { row: currentY ?? "" });
        Object.assign(pieceObj, { col: currentX ?? "" });

        setActivePiece(pieceObj);
        handlePieceTooltip(pieceObj, currentY, currentX);
      } else {
        setActivePiece({});
        handlePreviewReset();
      }
    } else if (activePiece.id !== undefined) {
      // handle piece move
      if (activePiece.icon === "Pawn") {
        if (
          canPawnMove(
            gameboard,
            activePiece.row,
            activePiece.col,
            activePiece.facing,
            currentY,
            currentX
          )
        ) {
          const newData = [...gameboard];
          newData[currentY][currentX] = activePiece;
          newData[activePiece.row][activePiece.col] = null;
          setGameboard(newData);
          console.log(gameboard);
          setActivePiece({});
        }
      }
      if (activePiece.icon === "Queen") {
        if (
          canQueenMove(
            gameboard,
            activePiece.row,
            activePiece.col,
            currentY,
            currentX
          )
        ) {
          const newData = [...gameboard];
          newData[currentY][currentX] = activePiece;
          newData[activePiece.row][activePiece.col] = null;
          setGameboard(newData);
          console.log(gameboard);
          setActivePiece({});
          handlePreviewReset();
        }
      }
      if (activePiece.icon === "Bishop") {
        if (
          canBishopMove(
            gameboard,
            activePiece.row,
            activePiece.col,
            currentY,
            currentX
          )
        ) {
          const newData = [...gameboard];
          newData[currentY][currentX] = activePiece;
          newData[activePiece.row][activePiece.col] = null;
          setGameboard(newData);
          console.log(gameboard);
          setActivePiece({});
        }
      }
      if (activePiece.icon === "Rook") {
        if (
          canRookMove(
            gameboard,
            activePiece.row,
            activePiece.col,
            currentY,
            currentX
          )
        ) {
          const newData = [...gameboard];
          newData[currentY][currentX] = activePiece;
          newData[activePiece.row][activePiece.col] = null;
          setGameboard(newData);
          console.log(gameboard);
          setActivePiece({});
        }
      }
      if (activePiece.icon === "Knight") {
        if (
          canKnightMove(
            gameboard,
            activePiece.row,
            activePiece.col,
            currentY,
            currentX
          )
        ) {
          const newData = [...gameboard];
          newData[currentY][currentX] = activePiece;
          newData[activePiece.row][activePiece.col] = null;
          setGameboard(newData);
          console.log(gameboard);
          setActivePiece({});
        }
      }
      if (activePiece.icon === "King") {
        if (
          canKingMove(
            gameboard,
            activePiece.row,
            activePiece.col,
            currentY,
            currentX
          )
        ) {
          const newData = [...gameboard];
          newData[currentY][currentX] = activePiece;
          newData[activePiece.row][activePiece.col] = null;
          setGameboard(newData);
          console.log(gameboard);
          setActivePiece({});
        }
      }
      setGameboard(gameboard);
    }
  }
  function handleMouseLeave() {
    if (activePiece === undefined || activePiece.id === undefined) {
      handlePreviewReset();
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
    try {
      if (activePiece.id === gameboard[y][x].id) class_name += "inplay ";
    } catch (e) {}

    return class_name;
  }

  return (
    <div className="chess-board">
      {gameboard.map((item1: any, yIndex: any) => {
        return (
          <div className="row" key={item1.length * yIndex + uuid()}>
            {item1.map((item2: any, xIndex: any) => {
              return (
                <div
                  key={String(item2?.id) + uuid()}
                  onMouseOver={() => handleMouseOver(item2, yIndex, xIndex)}
                  onMouseLeave={() => handleMouseLeave()}
                  onClick={() => handleSquareClick(yIndex, xIndex)}
                  className={determineClassName(yIndex, xIndex)}
                >
                  {item2 !== undefined &&
                  item2 !== null &&
                  item2.icon !== undefined ? (
                    <img
                      src={`assets/pieces/${item2.icon}-${item2.color}.svg`}
                      className={
                        item2.color +
                        " " +
                        (inHand === item2.id ? "inplay" : "")
                      }
                      alt={item2.icon}
                      onClick={() => handleSquareClick(yIndex, xIndex)}
                      onDrag={() => setInHand(item2.id)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
