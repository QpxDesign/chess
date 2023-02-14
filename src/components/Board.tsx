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
import { handlePieceElimination } from "../functions/handlePieceElimination";
import { CheckIfinCheck, inCheckmate } from "../functions/inCheckmate";
import { CustomAlert } from "../functions/CustomAlert";
import { isMyMove } from "../functions/isMyMove";
import { reverseColor } from "../functions/reverseColor";
import { determineClassName } from "../functions/determineClassName";
import { FaUserAlt } from "react-icons/fa";
import { getEnemyUsername } from "../functions/getEnemyUsername";

interface BoardProps {
  mode: string;
}

export default function Board(props: BoardProps) {
  const [gameboard, setGameboard]: any = useState([[], []]);
  const [movesLedger, setMovesLedger]: any = useState([]);
  const [gameboardColors, setGameboardColors]: any = useState([[], []]);
  const [activePiece, setActivePiece]: any = useState({});
  const [moveValidated, setMoveValidated]: any = useState(true);
  const [inCheck, setInCheck]: any = useState(false);
  const [metadata, setMetadata]: any = useState({});
  const { gc } = useParams();

  function handleMove(
    gb: any,
    pieceOBJ: any,
    oy: any,
    ox: any,
    ny: any,
    nx: any,
    gc: any
  ) {
    var color = JSON.parse(localStorage.getItem("user") ?? "{Color:''}").Color;
    var tmpGameboard = JSON.parse(JSON.stringify(gameboard));
    tmpGameboard[ny][nx] = tmpGameboard[oy][ox];
    tmpGameboard[oy][ox] = null;

    if (inCheck) {
      if (
        CheckIfinCheck(
          tmpGameboard,
          findKing(tmpGameboard, color).col,
          findKing(tmpGameboard, color).row,
          color
        )
      ) {
        /*
        CustomAlert(
          "You're Still in Check Bozo.",
          "You are in check, meaning that you have to move out of check in this move. This move did not do that.",
          "Okay"
        );*/
        alert("You're Still in Check Bozo.");
        return;
      }
    }
    setMoveValidated(false);
    var color = JSON.parse(localStorage.getItem("user") ?? "{Color:''}").Color;

    if (gb[0].length !== 0) {
      pieceOBJ.row = ny;
      pieceOBJ.col = nx;
      let mo = {
        pieceOBJ: pieceOBJ,
        oldY: oy,
        oldX: ox,
        newY: ny,
        newX: nx,
        timestamp: Date.now(),
      };
      let data = {
        GameCode: gc,
        gameboard: JSON.stringify(gb),
        moveData: JSON.stringify(mo),
        movesLedger: movesLedger,
        Color: color,
      };
      fetch("https://chess-api.quinnpatwardhan.com/handle-move", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((d) => {
          setMoveValidated(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  function findKing(gameboard: any, color: any) {
    const res = {
      col: 0,
      row: 0,
    };
    for (var bh1 = 0; bh1 < gameboard.length; bh1++) {
      for (var bh2 = 0; bh2 < gameboard.length; bh2++) {
        if (gameboard[bh1][bh2] !== null) {
          if (gameboard[bh1][bh2].icon === "King") {
            if (gameboard[bh1][bh2].color === color) {
              res.col = bh1;
              res.row = bh2;
            }
          }
        }
      }
    }
    return res;
  }
  async function getGameboardFromCode() {
    if (localStorage.getItem("user") === null) {
      window.location.pathname = `/join-game/${gc}`;
    }
    var color = JSON.parse(localStorage.getItem("user") ?? "{Color:''}").Color;

    if (gc?.length !== 8) return;
    let data = {
      GameCode: gc,
    };

    await fetch(
      "https://chess-api.quinnpatwardhan.com/get-gameboard-from-code",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      }
    )
      .then((r) => r.json())
      .then((r2) => {
        if (!r2.error) {
          setGameboard(r2.gameboard);
          setMovesLedger(r2.movesLedger);
          setMetadata(r2);
          if (
            CheckIfinCheck(
              r2.gameboard,
              findKing(r2.gameboard, color).col,
              findKing(r2.gameboard, color).row,
              color
            )
          ) {
            setInCheck(true);
          } else {
            setInCheck(false);
          }
          // detect loss
          if (
            inCheckmate(
              r2.gameboard,
              findKing(r2.gameboard, color).col,
              findKing(r2.gameboard, color).row,
              color
            )
          ) {
            alert("Ya done goofed clown. You're in checkmate rn amigo");
            window.location.pathname = "/";
          }
          // detect win
          if (
            inCheckmate(
              r2.gameboard,
              findKing(r2.gameboard, reverseColor(color)).col,
              findKing(r2.gameboard, reverseColor(color)).row,
              reverseColor(color)
            )
          ) {
            alert("Winner winner chicken dinner");
            window.location.pathname = "/";
          }
        } else {
          window.location.pathname = "/";
          localStorage.clear();
        }
      });
  }
  useEffect(() => {
    const interval = setInterval(() => {
      getGameboardFromCode();
    }, 1_000);

    return () => clearInterval(interval);
  }, []);
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
  useEffect(() => {
    const l = JSON.parse(localStorage.getItem("user") ?? "{}");
    if (
      metadata.playerOneUsername === undefined ||
      metadata.playerTwoUsername === undefined
    ) {
      return;
    }
    if (metadata.playerOneUsername === l.Username) {
      var data = {
        Username: l.Username,
        GameCode: gc,
        Color: "white",
      };
      localStorage.setItem("user", JSON.stringify(data));
    } else if (metadata.playerTwoUsername === l.Username) {
      var data = {
        Username: l.Username,
        GameCode: gc,
        Color: "black",
      };
      localStorage.setItem("user", JSON.stringify(data));
    } else {
      //reset localstorage and send em back to the home page
      localStorage.clear();
      // window.location.pathname = "/";
    }
  }, [gameboard]);
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
      gbc = ColorPawn(
        gb,
        yIndex,
        xIndex,
        pieceObj.facing,
        movesLedger,
        gameboard
      );
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
        isMyMove(movesLedger)
      ) {
        handlePieceTooltip(pieceObj, yIndex, xIndex);
      }
    }
  }
  function handleSquareClick(currentY: any, currentX: any) {
    var pieceObj = gameboard[currentY][currentX];
    const l = JSON.parse(localStorage.getItem("user") ?? "{}")?.Color;

    if (
      activePiece.id !== undefined &&
      gameboard[currentY][currentX] !== null &&
      activePiece.color !== gameboard[currentY][currentX].color &&
      moveValidated
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

      if (
        handlePieceElimination(
          currentY,
          currentX,
          activePiece,
          gameboard,
          movesLedger,
          gc
        ) !== undefined
      ) {
        setGameboard(
          handlePieceElimination(
            currentY,
            currentX,
            activePiece,
            gameboard,
            movesLedger,
            gc
          )
        );
        setActivePiece({});
      }

      return;
    }
    if (pieceObj !== null && pieceObj !== undefined) {
      if (
        (activePiece.id === undefined ||
          pieceObj.id === undefined ||
          activePiece?.id !== pieceObj?.id) &&
        isMyMove(movesLedger)
      ) {
        Object.assign(pieceObj, { row: currentY ?? "" });
        Object.assign(pieceObj, { col: currentX ?? "" });

        if (
          pieceObj !== null &&
          pieceObj.color !== undefined &&
          pieceObj.color === l &&
          moveValidated
        ) {
          setActivePiece(pieceObj);
          handlePieceTooltip(pieceObj, currentY, currentX);
          return;
        }
      } else {
        setActivePiece({});
        handlePreviewReset();
      }
    } else if (
      activePiece.id !== undefined &&
      isMyMove(movesLedger) &&
      moveValidated
    ) {
      // handle piece move

      if (activePiece.icon === "Pawn") {
        if (
          canPawnMove(
            gameboard,
            activePiece.row,
            activePiece.col,
            activePiece.facing,
            currentY,
            currentX,
            movesLedger,
            gameboard
          )
        ) {
          setMoveValidated(false);
          handleMove(
            gameboard,
            activePiece,
            activePiece.row,
            activePiece.col,
            currentY,
            currentX,
            gc
          );
          window.location.reload();

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
          setMoveValidated(false);
          handleMove(
            gameboard,
            activePiece,
            activePiece.row,
            activePiece.col,
            currentY,
            currentX,
            gc
          );
          window.location.reload();
          setActivePiece({});
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
          setMoveValidated(false);
          handleMove(
            gameboard,
            activePiece,
            activePiece.row,
            activePiece.col,
            currentY,
            currentX,
            gc
          );
          window.location.reload();
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
          setMoveValidated(false);
          handleMove(
            gameboard,
            activePiece,
            activePiece.row,
            activePiece.col,
            currentY,
            currentX,
            gc
          );
          window.location.reload();
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
          setMoveValidated(false);
          handleMove(
            gameboard,
            activePiece,
            activePiece.row,
            activePiece.col,
            currentY,
            currentX,
            gc
          );
          window.location.reload();
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
          setMoveValidated(false);
          handleMove(
            gameboard,
            activePiece,
            activePiece.row,
            activePiece.col,
            currentY,
            currentX,
            gc
          );
          window.location.reload();
          setActivePiece({});
        }
      }

      window.location.reload();
    }
  }
  function handleMouseLeave() {
    if (activePiece === undefined || activePiece.id === undefined) {
      handlePreviewReset();
    }
  }

  return (
    <>
      <div className="user-info">
        <h5>
          <FaUserAlt />
          {JSON.parse(localStorage.getItem("user") ?? "{}").Username}
        </h5>
      </div>
      <div className="enemy-info">
        <h5>
          <FaUserAlt />
          {getEnemyUsername(metadata)}
        </h5>
      </div>
      <div
        className={
          JSON.parse(localStorage.getItem("user") ?? "{}").Color === "black"
            ? "chess-board-wrapper flip"
            : "chess-board-wrapper"
        }
      >
        <div className="chess-board ">
          {gameboard.map((item1: any, yIndex: any) => {
            return (
              <div className="row" key={item1.length * yIndex + uuid()}>
                {item1.map((item2: any, xIndex: any) => {
                  return (
                    <div
                      key={String(item2?.id) + uuid()}
                      onClick={() => handleSquareClick(yIndex, xIndex)}
                      className={determineClassName(
                        yIndex,
                        xIndex,
                        gameboardColors,
                        gameboard,
                        activePiece
                      )}
                    >
                      {item2 !== undefined &&
                      item2 !== null &&
                      item2.icon !== undefined ? (
                        <img
                          src={`/assets/pieces/${item2.icon}-${item2.color}.svg`}
                          className={item2.color}
                          alt={item2.icon}
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
      </div>
    </>
  );
}
