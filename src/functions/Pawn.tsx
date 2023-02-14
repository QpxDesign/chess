export function ColorPawn(
  bcg: any,
  yIndex: any,
  xIndex: any,
  facing: any,
  movesLedger: any,
  gameboard: any
) {
  //sides
  if (facing === "down") {
    try {
      if (
        movesLedger.filter(
          (m: any) => m.pieceOBJ.id === gameboard[yIndex][xIndex].id
        ).length === 0
      ) {
        if (bcg[yIndex + 1][xIndex] === null) {
          bcg[yIndex + 1][xIndex] = "green";
          if (bcg[yIndex + 2][xIndex] === null) {
            bcg[yIndex + 2][xIndex] = "green";
          } else {
            if (bcg[yIndex + 2][xIndex].color !== bcg[yIndex][xIndex].color) {
              bcg[yIndex + 1][xIndex] = "purple";
            }
          }
        } else {
          if (bcg[yIndex + 1][xIndex].color !== bcg[yIndex][xIndex].color) {
            bcg[yIndex + 1][xIndex] = "purple";
          }
        }
      }
    } catch (e) {}

    try {
      if (bcg[yIndex + 1][xIndex] === null) {
        bcg[yIndex + 1][xIndex] = "green";
      }
      try {
        if (
          bcg[yIndex + 1][xIndex + 1] !== null &&
          bcg[yIndex + 1][xIndex + 1].color !== bcg[yIndex][xIndex].color
        )
          bcg[yIndex + 1][xIndex + 1] = "purple";
      } catch (e) {}
      try {
        if (
          bcg[yIndex + 1][xIndex - 1] !== null &&
          bcg[yIndex + 1][xIndex - 1].color !== bcg[yIndex][xIndex].color
        )
          bcg[yIndex + 1][xIndex - 1] = "purple";
      } catch (e) {}
    } catch (e) {}
  }
  if (facing === "up") {
    try {
      if (
        movesLedger.filter(
          (m: any) => m.pieceOBJ.id === gameboard[yIndex][xIndex].id
        ).length === 0
      ) {
        if (bcg[yIndex - 1][xIndex] === null) {
          bcg[yIndex - 1][xIndex] = "green";
          if (bcg[yIndex - 2][xIndex] === null) {
            bcg[yIndex - 2][xIndex] = "green";
          }
        }
      }
    } catch (e) {}
    if (bcg[yIndex - 1][xIndex] === null) bcg[yIndex - 1][xIndex] = "green";
    // left diag
    try {
      if (
        bcg[yIndex - 1][xIndex - 1] !== null &&
        bcg[yIndex - 1][xIndex - 1].color !== bcg[yIndex][xIndex].color
      )
        bcg[yIndex - 1][xIndex - 1] = "purple";
    } catch (e) {}
    try {
      if (
        bcg[yIndex - 1][xIndex + 1] !== null &&
        bcg[yIndex - 1][xIndex + 1].color !== bcg[yIndex][xIndex].color
      )
        bcg[yIndex - 1][xIndex + 1] = "purple";
    } catch (e) {}
  }

  return bcg;
}

export function canPawnMove(
  bcg: any,
  yIndex: any,
  xIndex: any,
  facing: any,
  newY: any,
  newX: any,
  movesLedger: any,
  gameboard: any
) {
  if (facing === "down") {
    try {
      if (
        movesLedger.filter(
          (m: any) => m.pieceOBJ.id === gameboard[yIndex][xIndex].id
        ).length === 0
      ) {
        if (
          gameboard[yIndex + 1][xIndex] === null &&
          gameboard[yIndex + 2][xIndex] === null &&
          yIndex + 2 === newY &&
          xIndex === newX
        ) {
          return true;
        }
      }
    } catch (e) {}
    try {
    } catch (e) {}
    try {
      if (
        bcg[yIndex + 1][xIndex - 1] !== null &&
        bcg[yIndex + 1][xIndex - 1] !== bcg[yIndex][xIndex].color
      )
        if (yIndex + 1 === newY && xIndex - 1 === newX) {
          return true;
        }
    } catch (e) {}
    try {
      if (bcg[yIndex + 1][xIndex] === null) {
        if (yIndex + 1 === newY && xIndex === newX) {
          return true;
        }
      }
      try {
        if (
          bcg[yIndex + 1][xIndex + 1] !== null &&
          bcg[yIndex + 1][xIndex + 1].color !== bcg[yIndex][xIndex].color
        )
          if (yIndex + 1 === newY && xIndex + 1 === newX) {
            return true;
          }
      } catch (e) {}
    } catch (e) {}
  }
  if (facing === "up") {
    try {
      if (
        movesLedger.filter(
          (m: any) => m.pieceOBJ.id === gameboard[yIndex][xIndex].id
        ).length === 0
      ) {
        if (
          gameboard[yIndex - 1][xIndex] === null &&
          gameboard[yIndex - 2][xIndex] === null &&
          yIndex - 2 === newY &&
          xIndex === newX
        ) {
          return true;
        }
      }
    } catch (e) {}
    try {
      if (yIndex - 1 === newY && xIndex === newX) {
        if (bcg[yIndex - 1][xIndex] !== null) {
          return false;
        } else {
          return true;
        }
      }
    } catch (e) {}

    // left diag
    try {
      if (
        bcg[yIndex - 1][xIndex - 1] !== null &&
        bcg[yIndex - 1][xIndex - 1].color !== bcg[yIndex][xIndex].color
      )
        if (yIndex - 1 === newY && xIndex - 1 === newX) {
          return true;
        }
    } catch (e) {}
    try {
      if (
        bcg[yIndex - 1][xIndex + 1] !== null &&
        bcg[yIndex - 1][xIndex + 1].color !== bcg[yIndex][xIndex].color
      )
        if (yIndex - 1 === newY && xIndex + 1 === newX) {
          return true;
        }
    } catch (e) {}
  }

  return false;
}
export function ValidPawn(bcg: any, yIndex: any, xIndex: any, facing: any) {
  //sides
  var ans = new Array(8);
  for (var bh1 = 0; bh1 < ans.length; bh1++) {
    ans[bh1] = new Array(8);
    for (var bh2 = 0; bh2 < ans.length; bh2++) {
      ans[bh1][bh2] = false;
    }
  }
  if (facing === "down") {
    try {
      if (bcg[yIndex + 1][xIndex] === null) {
        ans[yIndex + 1][xIndex] = true;
      }
      try {
        if (
          bcg[yIndex + 1][xIndex + 1] !== null &&
          bcg[yIndex + 1][xIndex + 1].color !== bcg[yIndex][xIndex].color
        )
          ans[yIndex + 1][xIndex + 1] = true;
      } catch (e) {}
      try {
        if (
          bcg[yIndex + 1][xIndex - 1] !== null &&
          bcg[yIndex + 1][xIndex - 1].color !== bcg[yIndex][xIndex].color
        )
          ans[yIndex + 1][xIndex - 1] = true;
      } catch (e) {}
    } catch (e) {}
  }
  if (facing === "up") {
    try {
      if (bcg[yIndex - 1][xIndex] === null) bcg[yIndex - 1][xIndex] = true;
    } catch (e) {}

    // left diag
    try {
      if (
        bcg[yIndex - 1][xIndex - 1] !== null &&
        bcg[yIndex - 1][xIndex - 1].color !== bcg[yIndex][xIndex].color
      )
        ans[yIndex - 1][xIndex - 1] = true;
    } catch (e) {}
    try {
      if (
        bcg[yIndex - 1][xIndex + 1] !== null &&
        bcg[yIndex - 1][xIndex + 1].color !== bcg[yIndex][xIndex].color
      )
        ans[yIndex - 1][xIndex + 1] = true;
    } catch (e) {}
  }

  return ans;
}
