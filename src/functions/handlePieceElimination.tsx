import { canPawnMove } from "./Pawn";
import { canQueenMove } from "./Queen";
import { canBishopMove } from "./Bishop";
import { canRookMove } from "./Rook";
import { canKnightMove } from "./Knight";
import { canKingMove } from "./King";
import { handleMove } from "./handleMove";

export function handlePieceElimination(
  currentY: any,
  currentX: any,
  activePiece: any,
  gameboard: any,
  gc: any
) {
  if (activePiece.icon === undefined) return;
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

      handleMove(
        newData,
        activePiece,
        activePiece.row,
        activePiece.col,
        currentY,
        currentX,
        gc
      );

      window.location.reload();
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

      window.location.reload();
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

      window.location.reload();
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

      window.location.reload();
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

      window.location.reload();
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

      window.location.reload();
      return newData;
    }
  }
  return undefined;
}
