import { canPawnMove } from "./Pawn";
import { canQueenMove } from "./Queen";
import { canBishopMove } from "./Bishop";
import { canRookMove } from "./Rook";
import { canKnightMove } from "./Knight";
import { canKingMove } from "./King";

export function handlePieceElimination(
  currentY: any,
  currentX: any,
  activePiece: any,
  gameboard: any,
  movesLedger: any,
  gc: any
) {
  async function handleMove(
    gb: any,
    pieceOBJ: any,
    oy: any,
    ox: any,
    ny: any,
    nx: any,
    gc: any
  ) {
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
      };

      await fetch("http://localhost:3001/handle-move", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      })
        .then((r) => r.json())
        .catch((e) => console.error(e));
    }
  }

  if (activePiece.icon === undefined) return;
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
      const newData = [...gameboard];
      newData[currentY][currentX] = activePiece;
      newData[activePiece.row][activePiece.col] = null;

      handleMove(
        newData,
        activePiece,
        activePiece.row,
        activePiece.col,
        currentY,
        currentX,
        gc
      );

      return newData;
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

      handleMove(
        newData,
        activePiece,
        activePiece.row,
        activePiece.col,
        currentY,
        currentX,
        gc
      );

      return newData;
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

      handleMove(
        newData,
        activePiece,
        activePiece.row,
        activePiece.col,
        currentY,
        currentX,
        gc
      );

      return newData;
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
      handleMove(
        newData,
        activePiece,
        activePiece.row,
        activePiece.col,
        currentY,
        currentX,
        gc
      );

      return newData;
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
      handleMove(
        newData,
        activePiece,
        activePiece.row,
        activePiece.col,
        currentY,
        currentX,
        gc
      );

      return newData;
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
      handleMove(
        newData,
        activePiece,
        activePiece.row,
        activePiece.col,
        currentY,
        currentX,
        gc
      );

      return newData;
    }
  }
  window.location.reload();
  return undefined;
}
