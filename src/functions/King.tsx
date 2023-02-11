export function ColorKing(bcg: any, yIndex: any, xIndex: any) {
  // up
  try {
    if (bcg[yIndex + 1][xIndex] === null) {
      bcg[yIndex + 1][xIndex] = "green";
    } else if (bcg[yIndex + 1][xIndex].color !== bcg[yIndex][xIndex].color) {
      bcg[yIndex + 1][xIndex] = "purple";
    }
  } catch (e) {}
  //down
  try {
    if (bcg[yIndex - 1][xIndex] === null) {
      bcg[yIndex - 1][xIndex] = "green";
    } else if (bcg[yIndex - 1][xIndex].color !== bcg[yIndex][xIndex].color) {
      bcg[yIndex + 1][xIndex] = "purple";
    }
  } catch (e) {}
  // left
  try {
    if (bcg[yIndex][xIndex - 1] === null) {
      bcg[yIndex][xIndex - 1] = "green";
    } else if (bcg[yIndex][xIndex - 1].color !== bcg[yIndex][xIndex].color) {
      bcg[yIndex][xIndex - 1] = "purple";
    }
  } catch (e) {}
  // right
  try {
    if (bcg[yIndex][xIndex + 1] === null) {
      bcg[yIndex][xIndex + 1] = "green";
    } else if (bcg[yIndex][xIndex + 1].color !== bcg[yIndex][xIndex].color) {
      bcg[yIndex][xIndex + 1] = "purple";
    }
  } catch (e) {}
  // up right
  try {
    if (bcg[yIndex + 1][xIndex + 1] === null) {
      bcg[yIndex + 1][xIndex + 1] = "green";
    } else if (
      bcg[yIndex + 1][xIndex + 1].color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex + 1][xIndex + 1] = "purple";
    }
  } catch (e) {}
  // up left
  try {
    if (bcg[yIndex + 1][xIndex - 1] === null) {
      bcg[yIndex + 1][xIndex - 1] = "green";
    } else if (
      bcg[yIndex + 1][xIndex - 1].color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex + 1][xIndex - 1] = "purple";
    }
  } catch (e) {}
  // down left
  try {
    if (bcg[yIndex - 1][xIndex - 1] === null) {
      bcg[yIndex - 1][xIndex - 1] = "green";
    } else if (
      bcg[yIndex - 1][xIndex - 1].color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex - 1][xIndex - 1] = "purple";
    }
  } catch (e) {}
  // down right
  try {
    if (bcg[yIndex - 1][xIndex + 1] === null) {
      bcg[yIndex - 1][xIndex + 1] = "green";
    } else if (
      bcg[yIndex - 1][xIndex + 1].color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex - 1][xIndex + 1] = "purple";
    }
  } catch (e) {}
  return bcg;
}

export function canKingMove(
  bcg: any,
  yIndex: any,
  xIndex: any,
  newY: any,
  newX: any
) {
  // up
  try {
    if (bcg[yIndex + 1][xIndex] === null) {
      if (yIndex + 1 === newY && xIndex === newX) return true;
    } else if (bcg[yIndex + 1][xIndex].color !== bcg[yIndex][xIndex].color) {
      if (yIndex + 1 === newY && xIndex === newX) return true;
    }
  } catch (e) {}
  //down
  try {
    if (bcg[yIndex - 1][xIndex] === null) {
      if (yIndex - 1 === newY && xIndex === newX) return true;
    } else if (bcg[yIndex - 1][xIndex].color !== bcg[yIndex][xIndex].color) {
      if (yIndex - 1 === newY && xIndex === newX) return true;
    }
  } catch (e) {}
  // left
  try {
    if (bcg[yIndex][xIndex - 1] === null) {
      if (yIndex === newY && xIndex - 1 === newX) return true;
    } else if (bcg[yIndex][xIndex - 1].color !== bcg[yIndex][xIndex].color) {
      if (yIndex === newY && xIndex - 1 === newX) return true;
    }
  } catch (e) {}
  // right
  try {
    if (bcg[yIndex][xIndex + 1] === null) {
      if (yIndex === newY && xIndex + 1 === newX) return true;
    } else if (bcg[yIndex][xIndex + 1].color !== bcg[yIndex][xIndex].color) {
      if (yIndex === newY && xIndex + 1 === newX) return true;
    }
  } catch (e) {}
  // up right
  try {
    if (
      bcg[yIndex + 1][xIndex + 1] === null &&
      yIndex + 1 === newY &&
      xIndex + 1 === newX
    ) {
      return true;
    } else if (
      bcg[yIndex + 1][xIndex + 1].color !== bcg[yIndex][xIndex].color &&
      yIndex + 1 === newY &&
      xIndex + 1 === newX
    ) {
      return true;
    }
  } catch (e) {}
  // up left
  try {
    if (
      bcg[yIndex + 1][xIndex - 1] === null &&
      yIndex + 1 === newY &&
      xIndex - 1 === newX
    ) {
      return true;
    } else if (
      bcg[yIndex + 1][xIndex - 1].color !== bcg[yIndex][xIndex].color &&
      yIndex + 1 === newY &&
      xIndex - 1 === newX
    ) {
      return true;
    }
  } catch (e) {}
  // down left
  try {
    if (
      bcg[yIndex - 1][xIndex - 1] === null &&
      yIndex - 1 === newY &&
      xIndex - 1 === newX
    ) {
      return true;
    } else if (
      bcg[yIndex - 1][xIndex - 1].color !== bcg[yIndex][xIndex].color &&
      yIndex - 1 === newY &&
      xIndex - 1 === newX
    ) {
      return true;
    }
  } catch (e) {}
  // down right
  try {
    if (
      bcg[yIndex - 1][xIndex + 1] === null &&
      yIndex - 1 === newY &&
      xIndex + 1 === newX
    ) {
      return true;
    } else if (
      bcg[yIndex - 1][xIndex + 1].color !== bcg[yIndex][xIndex].color &&
      yIndex - 1 === newY &&
      xIndex + 1 === newX
    ) {
      return true;
    }
  } catch (e) {}
  return false;
}

export function ValidKing(bcg: any, yIndex: any, xIndex: any) {
  var ans = new Array(8);
  for (var bh1 = 0; bh1 < ans.length; bh1++) {
    ans[bh1] = new Array(8);
    for (var bh2 = 0; bh2 < ans.length; bh2++) {
      ans[bh1][bh2] = false;
    }
  }
  // up
  try {
    if (bcg[yIndex + 1][xIndex] === null) {
      ans[yIndex + 1][xIndex] = true;
    } else if (bcg[yIndex + 1][xIndex].color !== bcg[yIndex][xIndex].color) {
      ans[yIndex + 1][xIndex] = true;
    }
  } catch (e) {}
  //down
  try {
    if (bcg[yIndex - 1][xIndex] === null) {
      ans[yIndex - 1][xIndex] = true;
    } else if (bcg[yIndex - 1][xIndex].color !== bcg[yIndex][xIndex].color) {
      ans[yIndex + 1][xIndex] = true;
    }
  } catch (e) {}
  // left
  try {
    if (bcg[yIndex][xIndex - 1] === null) {
      ans[yIndex][xIndex - 1] = true;
    } else if (bcg[yIndex][xIndex - 1].color !== bcg[yIndex][xIndex].color) {
      ans[yIndex][xIndex - 1] = true;
    }
  } catch (e) {}
  // right
  try {
    if (bcg[yIndex][xIndex + 1] === null) {
      ans[yIndex][xIndex + 1] = true;
    } else if (bcg[yIndex][xIndex + 1].color !== bcg[yIndex][xIndex].color) {
      ans[yIndex][xIndex + 1] = true;
    }
  } catch (e) {}
  // up right
  try {
    if (bcg[yIndex + 1][xIndex + 1] === null) {
      ans[yIndex + 1][xIndex + 1] = true;
    } else if (
      bcg[yIndex + 1][xIndex + 1].color !== bcg[yIndex][xIndex].color
    ) {
      ans[yIndex + 1][xIndex + 1] = true;
    }
  } catch (e) {}
  // up left
  try {
    if (bcg[yIndex + 1][xIndex - 1] === null) {
      ans[yIndex + 1][xIndex - 1] = true;
    } else if (
      bcg[yIndex + 1][xIndex - 1].color !== bcg[yIndex][xIndex].color
    ) {
      ans[yIndex + 1][xIndex - 1] = true;
    }
  } catch (e) {}
  // down left
  try {
    if (bcg[yIndex - 1][xIndex - 1] === null) {
      ans[yIndex - 1][xIndex - 1] = true;
    } else if (
      bcg[yIndex - 1][xIndex - 1].color !== bcg[yIndex][xIndex].color
    ) {
      ans[yIndex - 1][xIndex - 1] = true;
    }
  } catch (e) {}
  // down right
  try {
    if (bcg[yIndex - 1][xIndex + 1] === null) {
      ans[yIndex - 1][xIndex + 1] = true;
    } else if (
      bcg[yIndex - 1][xIndex + 1].color !== bcg[yIndex][xIndex].color
    ) {
      ans[yIndex - 1][xIndex + 1] = true;
    }
  } catch (e) {}
  return ans;
}
