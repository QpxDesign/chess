import { ValidBishop } from "./Bishop";
import { ValidKing } from "./King";
import { ValidPawn } from "./Pawn";
import { ValidQueen } from "./Queen";
import { ValidRook } from "./Rook";
import { ValidKnight } from "./Knight";

export function CheckIfinCheck(gameboard: any, kingY: any, kingX: any) {
  var gb2 = JSON.parse(JSON.stringify(gameboard));
  const gb = new Array(8);
  var moveable = new Array(8);
  var color = "";
  if (
    JSON.parse(localStorage.getItem("user") ?? "{Color:''}").Color === undefined
  ) {
    return;
  } else {
    color = JSON.parse(localStorage.getItem("user") ?? "{Color:''}")?.Color;
  }
  // add default colors
  for (var i = 0; i < gb.length; i++) {
    moveable[i] = new Array(8);
  }
  for (var bh1 = 0; bh1 < gb.length; bh1++) {
    for (var bh2 = 0; bh2 < gb.length; bh2++) {
      moveable[bh1][bh2] = false;
    }
  }
  // for each enemy piece
  var ans = new Array(8);
  for (var bh1 = 0; bh1 < ans.length; bh1++) {
    ans[bh1] = new Array(8);
    for (var bh2 = 0; bh2 < ans.length; bh2++) {
      ans[bh1][bh2] = false;
    }
  }
  for (var y = 0; y < gb2.length; y++) {
    for (var x = 0; x < gb2.length; x++) {
      if (gb2[y][x] !== null) {
        if (gb2[y][x].color !== color) {
          if (gb2[y][x].icon === "Pawn") {
            ans = Merge2DArrays(ans, ValidPawn(gb2, y, x, gb2[y][x].facing));
          }
          if (gb2[y][x].icon === "Queen") {
            ans = Merge2DArrays(ans, ValidQueen(gb2, y, x));
          }
          if (gb2[y][x].icon === "Knight") {
            ans = Merge2DArrays(ans, ValidKnight(gb2, y, x));
          }
          if (gb2[y][x].icon === "Rook") {
            ans = Merge2DArrays(ans, ValidRook(gb2, y, x));
          }
          if (gb2[y][x].icon === "Bishop") {
            ans = Merge2DArrays(ans, ValidBishop(gb2, y, x));
          }
          if (gb2[y][x].icon === "King") {
            ans = Merge2DArrays(ans, ValidKing(gb2, y, x));
          }
        }
      }
    }
  }

  return ans[kingY][kingX];
}

function Merge2DArrays(arr1: any, arr2: any) {
  var ans = new Array(8);
  for (var bh1 = 0; bh1 < ans.length; bh1++) {
    ans[bh1] = new Array(8);
    for (var bh2 = 0; bh2 < ans.length; bh2++) {
      if (arr1[bh1][bh2] === true || arr2[bh1][bh2] === true) {
        ans[bh1][bh2] = true;
      } else {
        ans[bh1][bh2] = false;
      }
    }
  }
  return ans;
}
