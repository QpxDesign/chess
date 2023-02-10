export function ColorQueen(bcg: any, yIndex: any, xIndex: any) {
  //forward/backward
  var forwardN = 1;
  try {
    while (
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

  //sides
  var rightN = 1;

  try {
    while (
      bcg[yIndex][xIndex + rightN] === null &&
      bcg[yIndex][xIndex + rightN] !== undefined
    ) {
      bcg[yIndex][xIndex + rightN] = "green";
      rightN++;
    }
    if (
      bcg[yIndex] !== undefined &&
      bcg[yIndex][xIndex + rightN] !== undefined &&
      bcg[yIndex][xIndex + rightN].color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex][xIndex + rightN] = "purple";
    }
  } catch (e) {}
  var leftN = 1;
  try {
    while (
      bcg[yIndex][xIndex - leftN] === null &&
      bcg[yIndex][xIndex - leftN] !== undefined
    ) {
      bcg[yIndex][xIndex - leftN] = "green";
      leftN++;
    }
    if (
      bcg[yIndex] !== undefined &&
      bcg[yIndex][xIndex - leftN] !== undefined &&
      bcg[yIndex][xIndex - leftN].color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex][xIndex - leftN] = "purple";
    }
  } catch (e) {}

  //diagonals
  var sidewaysForwardRightN = 1;
  try {
    while (
      bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN] ===
        null &&
      bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN] !==
        undefined
    ) {
      bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN] =
        "green";
      sidewaysForwardRightN++;
    }
    if (
      bcg[yIndex + sidewaysForwardRightN] !== undefined &&
      bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN] !==
        undefined &&
      bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN]
        .color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN] =
        "purple";
    }
  } catch (e) {}

  var sidewaysForwardLeftN = 1;
  try {
    while (
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] ===
        null &&
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] !==
        undefined
    ) {
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] =
        "green";
      sidewaysForwardLeftN++;
    }
    if (
      bcg[yIndex + sidewaysForwardLeftN] !== undefined &&
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] !==
        undefined &&
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN]
        .color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] =
        "purple";
    }
  } catch (e) {}

  var sidewaysBackwardsLeftN = 1;
  try {
    while (
      bcg[yIndex - sidewaysBackwardsLeftN] !== undefined &&
      bcg[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN] ===
        null &&
      bcg[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN] !==
        undefined
    ) {
      bcg[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN] =
        "green";
      sidewaysBackwardsLeftN++;
    }
    if (
      bcg[yIndex - sidewaysBackwardsLeftN] !== undefined &&
      bcg[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN] !==
        undefined &&
      bcg[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN]
        .color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN] =
        "purple";
    }
  } catch (e) {}

  var sidewaysBackwardsRightN = 1;
  try {
    while (
      bcg[yIndex - sidewaysBackwardsRightN] !== undefined &&
      bcg[yIndex - sidewaysBackwardsRightN][
        xIndex + sidewaysBackwardsRightN
      ] === null &&
      bcg[yIndex - sidewaysBackwardsRightN][
        xIndex + sidewaysBackwardsRightN
      ] !== undefined
    ) {
      bcg[yIndex - sidewaysBackwardsRightN][xIndex + sidewaysBackwardsRightN] =
        "green";
      sidewaysBackwardsRightN++;
    }
    if (
      bcg[yIndex - sidewaysBackwardsRightN] !== undefined &&
      bcg[yIndex - sidewaysBackwardsRightN][xIndex + sidewaysBackwardsLeftN] !==
        undefined &&
      bcg[yIndex - sidewaysBackwardsRightN][xIndex + sidewaysBackwardsRightN]
        .color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex - sidewaysBackwardsRightN][xIndex + sidewaysBackwardsRightN] =
        "purple";
    }
  } catch (e) {}

  return bcg;
}
export function ValidQueen(bcg: any, yIndex: any, xIndex: any) {
  var ans = new Array(8);
  for (var bh1 = 0; bh1 < ans.length; bh1++) {
    ans[bh1] = new Array(8);
    for (var bh2 = 0; bh2 < ans.length; bh2++) {
      ans[bh1][bh2] = false;
    }
  }
  //forward/backward
  var forwardN = 1;
  try {
    while (
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

  //sides
  var rightN = 1;

  try {
    while (
      bcg[yIndex][xIndex + rightN] === null &&
      bcg[yIndex][xIndex + rightN] !== undefined
    ) {
      ans[yIndex][xIndex + rightN] = true;
      rightN++;
    }
    if (
      bcg[yIndex] !== undefined &&
      bcg[yIndex][xIndex + rightN] !== undefined &&
      bcg[yIndex][xIndex + rightN].color !== bcg[yIndex][xIndex].color
    ) {
      ans[yIndex][xIndex + rightN] = true;
    }
  } catch (e) {}
  var leftN = 1;
  try {
    while (
      bcg[yIndex][xIndex - leftN] === null &&
      bcg[yIndex][xIndex - leftN] !== undefined
    ) {
      ans[yIndex][xIndex - leftN] = true;
      leftN++;
    }
    if (
      bcg[yIndex] !== undefined &&
      bcg[yIndex][xIndex - leftN] !== undefined &&
      bcg[yIndex][xIndex - leftN].color !== bcg[yIndex][xIndex].color
    ) {
      ans[yIndex][xIndex - leftN] = true;
    }
  } catch (e) {}

  //diagonals
  var sidewaysForwardRightN = 1;
  try {
    while (
      bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN] ===
        null &&
      bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN] !==
        undefined
    ) {
      bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN] =
        true;
      sidewaysForwardRightN++;
    }
    if (
      bcg[yIndex + sidewaysForwardRightN] !== undefined &&
      bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN] !==
        undefined &&
      bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN]
        .color !== bcg[yIndex][xIndex].color
    ) {
      ans[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN] =
        true;
    }
  } catch (e) {}

  var sidewaysForwardLeftN = 1;
  try {
    while (
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] ===
        null &&
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] !==
        undefined
    ) {
      ans[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] = true;
      sidewaysForwardLeftN++;
    }
    if (
      bcg[yIndex + sidewaysForwardLeftN] !== undefined &&
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] !==
        undefined &&
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN]
        .color !== bcg[yIndex][xIndex].color
    ) {
      ans[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] = true;
    }
  } catch (e) {}

  var sidewaysBackwardsLeftN = 1;
  try {
    while (
      bcg[yIndex - sidewaysBackwardsLeftN] !== undefined &&
      bcg[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN] ===
        null &&
      bcg[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN] !==
        undefined
    ) {
      ans[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN] =
        true;
      sidewaysBackwardsLeftN++;
    }
    if (
      bcg[yIndex - sidewaysBackwardsLeftN] !== undefined &&
      bcg[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN] !==
        undefined &&
      bcg[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN]
        .color !== bcg[yIndex][xIndex].color
    ) {
      ans[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN] =
        true;
    }
  } catch (e) {}

  var sidewaysBackwardsRightN = 1;
  try {
    while (
      bcg[yIndex - sidewaysBackwardsRightN] !== undefined &&
      bcg[yIndex - sidewaysBackwardsRightN][
        xIndex + sidewaysBackwardsRightN
      ] === null &&
      bcg[yIndex - sidewaysBackwardsRightN][
        xIndex + sidewaysBackwardsRightN
      ] !== undefined
    ) {
      ans[yIndex - sidewaysBackwardsRightN][xIndex + sidewaysBackwardsRightN] =
        true;
      sidewaysBackwardsRightN++;
    }
    if (
      bcg[yIndex - sidewaysBackwardsRightN] !== undefined &&
      bcg[yIndex - sidewaysBackwardsRightN][xIndex + sidewaysBackwardsLeftN] !==
        undefined &&
      bcg[yIndex - sidewaysBackwardsRightN][xIndex + sidewaysBackwardsRightN]
        .color !== bcg[yIndex][xIndex].color
    ) {
      ans[yIndex - sidewaysBackwardsRightN][xIndex + sidewaysBackwardsRightN] =
        true;
    }
  } catch (e) {}

  return ans;
}
export function canQueenMove(
  bcg: any,
  yIndex: any,
  xIndex: any,
  newY: any,
  newX: any
) {
  //forward/backward
  var forwardN = 1;
  try {
    while (
      bcg[yIndex + forwardN][xIndex] === null &&
      bcg[yIndex + forwardN][xIndex] !== undefined
    ) {
      if (yIndex + forwardN === newY && xIndex === newX) return true;
      forwardN++;
    }
    if (
      bcg[yIndex + forwardN] !== undefined &&
      bcg[yIndex + forwardN][xIndex] !== undefined &&
      bcg[yIndex + forwardN][xIndex].color !== bcg[yIndex][xIndex].color
    ) {
      if (yIndex + forwardN === newY && xIndex === newX) return true;
    }
  } catch (e) {}

  var backwardN = 1;
  try {
    while (
      bcg[yIndex - backwardN] !== undefined &&
      bcg[yIndex - backwardN][xIndex] !== undefined &&
      bcg[yIndex - backwardN][xIndex] === null
    ) {
      if (yIndex - backwardN === newY && xIndex === newX) return true;
      backwardN++;
    }
    if (
      bcg[yIndex - backwardN] !== undefined &&
      bcg[yIndex - backwardN][xIndex] !== undefined &&
      bcg[yIndex - backwardN][xIndex].color !== bcg[yIndex][xIndex].color
    ) {
      if (yIndex - backwardN === newY && xIndex === newX) return true;
    }
  } catch (e) {}

  //sides
  var rightN = 1;

  try {
    while (
      bcg[yIndex][xIndex + rightN] === null &&
      bcg[yIndex][xIndex + rightN] !== undefined
    ) {
      if (yIndex === newY && xIndex + rightN === newX) return true;
      rightN++;
    }
    if (
      bcg[yIndex] !== undefined &&
      bcg[yIndex][xIndex + rightN] !== undefined &&
      bcg[yIndex][xIndex + rightN].color !== bcg[yIndex][xIndex].color
    ) {
      if (yIndex === newY && xIndex + rightN === newX) return true;
    }
  } catch (e) {}
  var leftN = 1;
  try {
    while (
      bcg[yIndex][xIndex - leftN] === null &&
      bcg[yIndex][xIndex - leftN] !== undefined
    ) {
      if (yIndex === newY && xIndex - leftN === newX) return true;
      leftN++;
    }
    if (
      bcg[yIndex] !== undefined &&
      bcg[yIndex][xIndex - leftN] !== undefined &&
      bcg[yIndex][xIndex - leftN].color !== bcg[yIndex][xIndex].color
    ) {
      if (yIndex === newY && xIndex - leftN === newX) return true;
    }
  } catch (e) {}

  //diagonals
  var sidewaysForwardRightN = 1;
  try {
    while (
      bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN] ===
        null &&
      bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN] !==
        undefined
    ) {
      if (
        yIndex + sidewaysForwardRightN === newY &&
        xIndex + sidewaysForwardRightN === newX
      )
        return true;

      sidewaysForwardRightN++;
    }
    if (
      bcg[yIndex + sidewaysForwardRightN] !== undefined &&
      bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN] !==
        undefined &&
      bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN]
        .color !== bcg[yIndex][xIndex].color
    ) {
      if (
        yIndex + sidewaysForwardRightN === newY &&
        xIndex + sidewaysForwardRightN === newX
      )
        return true;
    }
  } catch (e) {}

  var sidewaysForwardLeftN = 1;
  try {
    while (
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] ===
        null &&
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] !==
        undefined
    ) {
      if (
        yIndex + sidewaysForwardLeftN === newY &&
        xIndex - sidewaysForwardLeftN === newX
      )
        return true;
      sidewaysForwardLeftN++;
    }
    if (
      bcg[yIndex + sidewaysForwardLeftN] !== undefined &&
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] !==
        undefined &&
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN]
        .color !== bcg[yIndex][xIndex].color
    ) {
      if (
        yIndex + sidewaysForwardLeftN === newY &&
        xIndex - sidewaysForwardLeftN === newX
      )
        return true;
    }
  } catch (e) {}

  var sidewaysBackwardsLeftN = 1;
  try {
    while (
      bcg[yIndex - sidewaysBackwardsLeftN] !== undefined &&
      bcg[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN] ===
        null &&
      bcg[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN] !==
        undefined
    ) {
      if (
        yIndex - sidewaysBackwardsLeftN === newY &&
        xIndex - sidewaysBackwardsLeftN === newX
      )
        return true;
      sidewaysBackwardsLeftN++;
    }
    if (
      bcg[yIndex - sidewaysBackwardsLeftN] !== undefined &&
      bcg[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN] !==
        undefined &&
      bcg[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN]
        .color !== bcg[yIndex][xIndex].color
    ) {
      if (
        yIndex - sidewaysBackwardsLeftN === newY &&
        xIndex - sidewaysBackwardsLeftN === newX
      )
        return true;
    }
  } catch (e) {}

  var sidewaysBackwardsRightN = 1;
  try {
    while (
      bcg[yIndex - sidewaysBackwardsRightN] !== undefined &&
      bcg[yIndex - sidewaysBackwardsRightN][
        xIndex + sidewaysBackwardsRightN
      ] === null &&
      bcg[yIndex - sidewaysBackwardsRightN][
        xIndex + sidewaysBackwardsRightN
      ] !== undefined
    ) {
      if (
        yIndex - sidewaysBackwardsRightN === newY &&
        xIndex + sidewaysBackwardsRightN === newX
      )
        return true;
      sidewaysBackwardsRightN++;
    }
    if (
      bcg[yIndex - sidewaysBackwardsRightN] !== undefined &&
      bcg[yIndex - sidewaysBackwardsRightN][xIndex + sidewaysBackwardsLeftN] !==
        undefined &&
      bcg[yIndex - sidewaysBackwardsRightN][xIndex + sidewaysBackwardsRightN]
        .color !== bcg[yIndex][xIndex].color
    ) {
      if (
        yIndex - sidewaysBackwardsRightN === newY &&
        xIndex + sidewaysBackwardsRightN === newX
      )
        return true;
    }
  } catch (e) {}

  return false;
}
