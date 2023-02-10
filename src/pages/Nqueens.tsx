import React, { useState, useEffect } from "react";
import { ColorQueen } from "../functions/Queen";

export default function Nqueens() {
  const [board, setBoard]: any = useState([[], []]);
  const [boardSize, setBoardSize]: any = useState("5");
  const [gameboardColors, setGameboardColors]: any = useState([[], []]);

  function findSolution(b2: any, row: any) {
    var b = JSON.parse(JSON.stringify(b2));
    if (row == b.length) {
      setBoard(b);
    }

    if (row < b.length) {
      for (var i = 0; i < b.length; i++) {
        b[row][i] = 1;
        if (checkSolution(b)) {
          if (!findSolution(b, row + 1)) {
            b[row][i] = 0;
          }
        } else {
          b[row][i] = 0;
        }
      }
    }

    return false;
  }
  function checkSolution(board: any) {
    for (var r = 0; r < board.length; r++) {
      for (var c = 0; c < board[r].length; c++) {
        if (board[r][c] == 1) {
          // check row
          for (var i = 0; i < board.length; i++) {
            if (board[r][i] == 1 && i != c) {
              return false;
            }
          }
          // check coloum
          for (var p = 0; p < board.length; p++) {
            if (board[p][c] == 1 && p != r) {
              return false;
            }
          }
        }
      }
    }
    var offset = 0;
    var count1 = 0;
    var count3 = 0;
    var count2 = 0;
    var count4 = 0;
    while (offset != board.length) {
      count1 = 0;
      count2 = 0;
      count3 = 0;
      count4 = 0;
      for (var r2 = 0; r2 < board.length; r2++) {
        if (r2 + offset < board.length) {
          // TOP LEFT - RIGHT BOTTOM
          //board[r2][r2+offset] = -offset;
          if (board[r2][r2 + offset] == 1) {
            count1++;
            if (count1 >= 2) {
              return false;
            }
          }
          // TOP LEFT - RIGHT BOTTOM
          //board[r2+offset][r2] = offset;
          if (board[r2 + offset][r2] == 1) {
            count2++;
            if (count2 >= 2) {
              return false;
            }
          }
          //board[r2][board.length-1-r2-offset] = offset
          if (board[r2][board.length - 1 - r2 - offset] == 1) {
            count3++;
            if (count3 >= 2) {
              return false;
            }
          }
          //	board[Math.abs((board.length-1)-r2)][r2+offset] = offset;
          if (board[Math.abs(board.length - 1 - r2)][r2 + offset] == 1) {
            count4++;
            if (count4 >= 2) {
              return false;
            }
          }
        }
      }
      offset++;
    }
    return true;
  }
  function displayQueens() {
    if (
      Number(boardSize) > 10 ||
      boardSize === undefined ||
      boardSize.length === 0
    ) {
      if (Number(boardSize) > 10) {
        setBoardSize("3");
        window.location.reload();
        return;
      }
      return;
    }
    propogateColors();
    // generate board of default size and with default queens placed
    var b = new Array(Number(boardSize));
    for (var i = 0; i < b.length; i++) {
      b[i] = new Array(Number(boardSize));
    }
    for (var i1 = 0; i1 < b.length; i1++) {
      for (var i2 = 0; i2 < b.length; i2++) {
        b[i1][i2] = 0;
      }
    }
    setBoard(...b);
    findSolution(b, 0);
  }
  function replaceZerosWithNull(twod_array: any) {
    const gb = new Array(Number(boardSize));

    const bcg = new Array(Number(boardSize));
    for (var i = 0; i < gb.length; i++) {
      bcg[i] = new Array(Number(boardSize));
    }
    for (var bh1 = 0; bh1 < gb.length; bh1++) {
      for (var bh2 = 0; bh2 < gb.length; bh2++) {
        if (twod_array[bh1][bh2] === 0) twod_array[bh1][bh2] = null;
      }
    }
    return twod_array;
  }
  function handlePreviewReset() {
    const gbc = new Array(Number(boardSize));
    for (var i = 0; i < gbc.length; i++) {
      gbc[i] = new Array(Number(boardSize));
    }
    for (var bh1 = 0; bh1 < gbc.length; bh1++) {
      for (var bh2 = 0; bh2 < gbc.length; bh2++) {
        gbc[bh1][bh2] = "";
      }
    }
    setGameboardColors(...gbc);
  }
  function doNothing() {}
  function propogateColors() {
    const gb = new Array(Number(boardSize));

    const bcg = new Array(Number(boardSize));
    // add default colors
    for (var i = 0; i < gb.length; i++) {
      bcg[i] = new Array(Number(boardSize));
    }
    for (var bh1 = 0; bh1 < gb.length; bh1++) {
      for (var bh2 = 0; bh2 < gb.length; bh2++) {
        bcg[bh1][bh2] = "";
      }
    }
    setGameboardColors(bcg);
  }
  useEffect(() => {
    displayQueens();
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "10%",
            margin: "1em auto",
          }}
        >
          <label
            style={{
              width: "10em",
              flex: 1,
              fontSize: "1.5em",
              whiteSpace: "nowrap",
              fontFamily: "Source Serif Pro",
            }}
          >
            How Many Queens?
          </label>
          <div style={{ display: "flex" }}>
            <input
              value={boardSize}
              onChange={(e) => setBoardSize(e.target.value)}
              style={{
                background: "#cbd5e1",
                textAlign: "center",
                marginRight: ".25em",
              }}
            />
            <button
              className="cool-purple-button"
              onClick={() => displayQueens()}
            >
              Go
            </button>
          </div>
        </div>
        <div className="chess-board">
          {board.map((item1: any, yIndex: any) => {
            return (
              <div className="row">
                {board.map((item2: any, xIndex: any) => {
                  if (
                    (yIndex % 2 === 0 && xIndex % 2 === 0) ||
                    (yIndex % 2 === 1 && xIndex % 2 === 1)
                  ) {
                    return (
                      <div
                        className={
                          "square dark " + gameboardColors[yIndex][xIndex]
                        }
                        onMouseOver={() => {
                          board[yIndex][xIndex] === 1
                            ? setGameboardColors(
                                ColorQueen(
                                  replaceZerosWithNull(board),
                                  yIndex,
                                  xIndex
                                )
                              )
                            : doNothing();
                        }}
                        onMouseLeave={() => handlePreviewReset()}
                      >
                        {board[yIndex][xIndex] === 1 ? (
                          <img src="assets/pieces/Queen-white.svg" />
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className={
                          "square light " + gameboardColors[yIndex][xIndex]
                        }
                        onMouseOver={() => {
                          board[yIndex][xIndex] === 1
                            ? setGameboardColors(
                                ColorQueen(
                                  replaceZerosWithNull(board),
                                  yIndex,
                                  xIndex
                                )
                              )
                            : doNothing();
                        }}
                        onMouseLeave={() => handlePreviewReset()}
                      >
                        {board[yIndex][xIndex] === 1 ? (
                          <img src="assets/pieces/Queen-white.svg" />
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
