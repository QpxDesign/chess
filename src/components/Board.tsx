import React, { useState, useEffect } from "react";
import { canBishopMove, ColorBishop } from "../functions/Bishop";
import { canKnightMove, ColorKnight } from "../functions/Knight";
import { ColorPawn } from "../functions/Pawn";
import { canPawnMove } from "../functions/Pawn";
import { canQueenMove, ColorQueen } from "../functions/Queen";
import { canRookMove, ColorRook } from "../functions/Rook";
import { canKingMove, ColorKing } from "../functions/King";
import uuid from "react-uuid";
import { useParams } from "react-router-dom";
import { handleMove } from "../functions/handleMove";
import { handlePieceElimination } from "../functions/handlePieceElimination";

interface BoardProps {
  mode: string;
}

export default function Board(props: BoardProps) {
  const size = [1, 2, 3, 4, 5, 6, 7, 8];
  const [gameboard, setGameboard]: any = useState([[], []]);
  const [movesLedger, setMovesLedger]: any = useState([]);
  const [gameboardColors, setGameboardColors]: any = useState([[], []]);
  const [activePiece, setActivePiece]: any = useState({});
  const [inHand, setInHand]: any = useState("");
  const { gc } = useParams();

  // create gameboard and gameboardColors
  useEffect(() => {
    const gb = new Array(8);
    const bcg = new Array(8);
    // add default colors
    for (var i = 0; i < gb.length; i++) {
      bcg[i] = new Array(8);
    }
    for (var bh1 = 0; bh1 < gb.length; bh1++) {
      for (var bh2 = 0; bh2 < gb.length; bh2++) {
        bcg[bh1][bh2] = "";
      }
    }
    setGameboardColors(...bcg);

    getGameboardFromCode();
  }, []);

  async function getGameboardFromCode() {
    if (gc?.length !== 8) return;
    let data = {
      GameCode: gc,
    };

    await fetch("http://localhost:3001/get-gameboard-from-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((r2) => {
        if (!r2.error) {
          setGameboard(r2.gameboard);
          setMovesLedger(r2.movesLedger);
          console.log(r2);
        } else {
          console.log(r2);
          window.location.pathname = "/";
          localStorage.clear();
        }
      });
  }
  useEffect(() => {
    const interval = setInterval(() => {
      getGameboardFromCode();
    }, 3_000);

    return () => clearInterval(interval);
  }, []);
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
    setGameboardColors(...gbc);
  }
  function handlePieceTooltip(pieceObj: any, yIndex: any, xIndex: any) {
    const l = JSON.parse(localStorage.getItem("user") ?? "{}")?.Color;

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
    const l = JSON.parse(localStorage.getItem("user") ?? "{}")?.Color;
    if (activePiece === undefined || activePiece.id === undefined) {
      if (
        pieceObj !== null &&
        pieceObj.color !== undefined &&
        pieceObj.color === l &&
        isMyMove()
      ) {
        handlePieceTooltip(pieceObj, yIndex, xIndex);
      }
    }
  }
  function isMyMove() {
    const l = JSON.parse(localStorage.getItem("user") ?? "{}");
    if (l === undefined || l.Color === undefined) return false;

    if (movesLedger === null || movesLedger.length === 0) {
      return true;
    }
    if (l.Color === movesLedger[movesLedger.length - 1].pieceOBJ.color) {
      return false;
    } else if (l.Color !== movesLedger[movesLedger.length - 1].pieceOBJ.color) {
      return true;
    }
    return false;
  }
  function handleSquareClick(currentY: any, currentX: any) {
    var pieceObj = gameboard[currentY][currentX];
    const l = JSON.parse(localStorage.getItem("user") ?? "{}")?.Color;
    console.log("a");
    if (
      activePiece.id !== undefined &&
      gameboard[currentY][currentX] !== null &&
      activePiece.color !== gameboard[currentY][currentX].color
    ) {
      handleMove(
        gameboard,
        activePiece,
        activePiece.row,
        activePiece.col,
        currentY,
        currentX,
        gc
      );
      setActivePiece({});

      return;
    }
    if (pieceObj !== null && pieceObj !== undefined) {
      if (
        (activePiece.id === undefined ||
          pieceObj.id === undefined ||
          activePiece?.id !== pieceObj?.id) &&
        isMyMove()
      ) {
        Object.assign(pieceObj, { row: currentY ?? "" });
        Object.assign(pieceObj, { col: currentX ?? "" });

        if (
          pieceObj !== null &&
          pieceObj.color !== undefined &&
          pieceObj.color === l
        ) {
          setActivePiece(pieceObj);
          handlePieceTooltip(pieceObj, currentY, currentX);
          return;
        }
      } else {
        setActivePiece({});
        handlePreviewReset();
      }
    } else if (activePiece.id !== undefined && isMyMove()) {
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
          handleMove(
            gameboard,
            activePiece,
            activePiece.row,
            activePiece.col,
            currentY,
            currentX,
            gc
          );

          setActivePiece({});
          window.location.reload();
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
          handleMove(
            gameboard,
            activePiece,
            activePiece.row,
            activePiece.col,
            currentY,
            currentX,
            gc
          );
          setActivePiece({});
          window.location.reload();
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
          handleMove(
            gameboard,
            activePiece,
            activePiece.row,
            activePiece.col,
            currentY,
            currentX,
            gc
          );
          setActivePiece({});
          window.location.reload();
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
          handleMove(
            gameboard,
            activePiece,
            activePiece.row,
            activePiece.col,
            currentY,
            currentX,
            gc
          );

          setActivePiece({});
          window.location.reload();
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
          handleMove(
            gameboard,
            activePiece,
            activePiece.row,
            activePiece.col,
            currentY,
            currentX,
            gc
          );
          setActivePiece({});
          window.location.reload();
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
          handleMove(
            gameboard,
            activePiece,
            activePiece.row,
            activePiece.col,
            currentY,
            currentX,
            gc
          );
          setActivePiece({});
          window.location.reload();
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
  if (props.mode === "display") {
    return (
      <>
        <div className="chess-board">
          {size.map((item1: any, yIndex: any) => {
            return (
              <div className="row" key={item1.length * yIndex + uuid()}>
                {size.map((item2: any, xIndex: any) => {
                  return (
                    <div
                      key={String(item2?.id) + uuid()}
                      onClick={() => handleSquareClick(yIndex, xIndex)}
                      className={determineClassName(yIndex, xIndex)}
                    >
                      {item2 !== undefined &&
                      item2 !== null &&
                      item2.icon !== undefined ? (
                        <img
                          src={`/assets/pieces/${item2.icon}-${item2.color}.svg`}
                          className={
                            item2.color +
                            " " +
                            (inHand === item2.id ? "inplay" : "")
                          }
                          alt={item2.icon}
                          onDrag={() => setInHand(item2.id)}
                          onMouseEnter={() =>
                            handleMouseOver(item2, yIndex, xIndex)
                          }
                          onMouseLeave={() => handleMouseLeave()}
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
      </>
    );
  } else {
    return (
      <>
        <div className="chess-board">
          {gameboard.map((item1: any, yIndex: any) => {
            return (
              <div className="row" key={item1.length * yIndex + uuid()}>
                {item1.map((item2: any, xIndex: any) => {
                  return (
                    <div
                      key={String(item2?.id) + uuid()}
                      onClick={() => handleSquareClick(yIndex, xIndex)}
                      className={determineClassName(yIndex, xIndex)}
                    >
                      {item2 !== undefined &&
                      item2 !== null &&
                      item2.icon !== undefined ? (
                        <img
                          src={`/assets/pieces/${item2.icon}-${item2.color}.svg`}
                          className={
                            item2.color +
                            " " +
                            (inHand === item2.id ? "inplay" : "")
                          }
                          alt={item2.icon}
                          onDrag={() => setInHand(item2.id)}
                          onMouseEnter={() =>
                            handleMouseOver(item2, yIndex, xIndex)
                          }
                          onMouseLeave={() => handleMouseLeave()}
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
      </>
    );
  }
}
