export function ColorRook(bcg: any, yIndex: any, xIndex: any) {
  var forwardN = 1;
  try {
    while (
      bcg[yIndex + forwardN] !== undefined &&
      bcg[yIndex + forwardN][xIndex] === null &&
      bcg[yIndex + forwardN][xIndex] !== undefined
    ) {
      bcg[yIndex + forwardN][xIndex] = "green";
      forwardN++;
    }
    if (
      bcg[yIndex + forwardN] !== undefined &&
      bcg[yIndex + forwardN][xIndex] !== undefined &&
      bcg[yIndex + forwardN][xIndex].color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex + forwardN][xIndex] = "purple";
    }
  } catch (e) {}

  var backwardN = 1;
  try {
    while (
      bcg[yIndex - backwardN] !== undefined &&
      bcg[yIndex - backwardN][xIndex] !== undefined &&
      bcg[yIndex - backwardN][xIndex] === null
    ) {
      bcg[yIndex - backwardN][xIndex] = "green";
      backwardN++;
    }
    if (
      bcg[yIndex - backwardN] !== undefined &&
      bcg[yIndex - backwardN][xIndex] !== undefined &&
      bcg[yIndex - backwardN][xIndex].color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex - backwardN][xIndex] = "purple";
    }
  } catch (e) {}

  return bcg;
}
export function canRookMove(
  bcg: any,
  yIndex: any,
  xIndex: any,
  newY: any,
  newX: any
) {
  var forwardN = 1;
  try {
    while (
      bcg[yIndex + forwardN] !== undefined &&
      bcg[yIndex + forwardN][xIndex] === null &&
      bcg[yIndex + forwardN][xIndex] !== undefined
    ) {
      if (yIndex + forwardN === newY && xIndex === newX) {
        return true;
      }
      forwardN++;
    }
    if (
      bcg[yIndex + forwardN] !== undefined &&
      bcg[yIndex + forwardN][xIndex] !== undefined &&
      bcg[yIndex + forwardN][xIndex].color !== bcg[yIndex][xIndex].color
    ) {
      if (yIndex + forwardN === newY && xIndex === newX) {
        return true;
      }
    }
  } catch (e) {}

  var backwardN = 1;
  try {
    while (
      bcg[yIndex - backwardN] !== undefined &&
      bcg[yIndex - backwardN][xIndex] !== undefined &&
      bcg[yIndex - backwardN][xIndex] === null
    ) {
      if (yIndex - backwardN === newY && xIndex === newX) {
        return true;
      }

      backwardN++;
    }
    if (
      bcg[yIndex - backwardN] !== undefined &&
      bcg[yIndex - backwardN][xIndex] !== undefined &&
      bcg[yIndex - backwardN][xIndex].color !== bcg[yIndex][xIndex].color
    ) {
      if (yIndex - backwardN === newY && xIndex === newX) {
        return true;
      }
    }
  } catch (e) {}

  return false;
}
export function ValidRook(bcg: any, yIndex: any, xIndex: any) {
  var ans = new Array(8);
  for (var bh1 = 0; bh1 < ans.length; bh1++) {
    ans[bh1] = new Array(8);
    for (var bh2 = 0; bh2 < ans.length; bh2++) {
      ans[bh1][bh2] = false;
    }
  }
  var forwardN = 1;
  try {
    while (
      bcg[yIndex + forwardN] !== undefined &&
      bcg[yIndex + forwardN][xIndex] === null &&
      bcg[yIndex + forwardN][xIndex] !== undefined
    ) {
      ans[yIndex + forwardN][xIndex] = true;
      forwardN++;
    }
    if (
      bcg[yIndex + forwardN] !== undefined &&
      bcg[yIndex + forwardN][xIndex] !== undefined &&
      bcg[yIndex + forwardN][xIndex].color !== bcg[yIndex][xIndex].color
    ) {
      ans[yIndex + forwardN][xIndex] = true;
    }
  } catch (e) {}

  var backwardN = 1;
  try {
    while (
      bcg[yIndex - backwardN] !== undefined &&
      bcg[yIndex - backwardN][xIndex] !== undefined &&
      bcg[yIndex - backwardN][xIndex] === null
    ) {
      ans[yIndex - backwardN][xIndex] = true;
      backwardN++;
    }
    if (
      bcg[yIndex - backwardN] !== undefined &&
      bcg[yIndex - backwardN][xIndex] !== undefined &&
      bcg[yIndex - backwardN][xIndex].color !== bcg[yIndex][xIndex].color
    ) {
      ans[yIndex - backwardN][xIndex] = true;
    }
  } catch (e) {}

  return ans;
}
