export function ColorBishop(bcg: any, yIndex: any, xIndex: any) {
  //diagonals
  var sidewaysForwardRightN = 1;
  try {
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
    } catch (e) {}
    try {
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
    } catch (e) {}

    try {
      if (
        bcg[yIndex + sidewaysForwardLeftN] !== undefined &&
        bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] !==
          undefined &&
        bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN]
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
        bcg[yIndex - sidewaysBackwardsLeftN][
          xIndex - sidewaysBackwardsLeftN
        ] === null &&
        bcg[yIndex - sidewaysBackwardsLeftN][
          xIndex - sidewaysBackwardsLeftN
        ] !== undefined
      ) {
        bcg[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN] =
          "green";
        sidewaysBackwardsLeftN++;
      }
    } catch (e) {}
    try {
      if (
        bcg[yIndex - sidewaysBackwardsLeftN] !== undefined &&
        bcg[yIndex - sidewaysBackwardsLeftN][
          xIndex - sidewaysBackwardsLeftN
        ] !== undefined &&
        bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN]
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
        bcg[yIndex - sidewaysBackwardsRightN][
          xIndex + sidewaysBackwardsRightN
        ] = "green";
        sidewaysBackwardsRightN++;
      }
    } catch (e) {}
    try {
      if (
        bcg[yIndex - sidewaysBackwardsRightN] !== undefined &&
        bcg[yIndex - sidewaysBackwardsRightN][
          xIndex + sidewaysBackwardsRightN
        ] !== undefined &&
        bcg[yIndex + sidewaysBackwardsRightN][xIndex + sidewaysBackwardsRightN]
          .color !== bcg[yIndex][xIndex].color
      ) {
        bcg[yIndex - sidewaysBackwardsRightN][
          xIndex + sidewaysBackwardsRightN
        ] = "purple";
      }
    } catch (e) {}

    return bcg;
  } catch (e) {}
}
export function canBishopMove(
  bcg: any,
  yIndex: any,
  xIndex: any,
  newY: any,
  newX: any
) {
  //diagonals
  var sidewaysForwardRightN = 1;
  try {
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
    } catch (e) {}
    try {
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
        sidewaysForwardLeftN++;
      }
    } catch (e) {}

    try {
      if (
        bcg[yIndex + sidewaysForwardLeftN] !== undefined &&
        bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] !==
          undefined &&
        bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN]
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
        bcg[yIndex - sidewaysBackwardsLeftN][
          xIndex - sidewaysBackwardsLeftN
        ] === null &&
        bcg[yIndex - sidewaysBackwardsLeftN][
          xIndex - sidewaysBackwardsLeftN
        ] !== undefined
      ) {
        if (
          yIndex - sidewaysBackwardsLeftN === newY &&
          xIndex - sidewaysBackwardsLeftN === newX
        )
          return true;
        sidewaysBackwardsLeftN++;
      }
    } catch (e) {}
    try {
      if (
        bcg[yIndex - sidewaysBackwardsLeftN] !== undefined &&
        bcg[yIndex - sidewaysBackwardsLeftN][
          xIndex - sidewaysBackwardsLeftN
        ] !== undefined &&
        bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN]
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
    } catch (e) {}
    try {
      if (
        bcg[yIndex - sidewaysBackwardsRightN] !== undefined &&
        bcg[yIndex - sidewaysBackwardsRightN][
          xIndex + sidewaysBackwardsRightN
        ] !== undefined &&
        bcg[yIndex + sidewaysBackwardsRightN][xIndex + sidewaysBackwardsRightN]
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
  } catch (e) {}
}
export function ValidBishop(bcg: any, yIndex: any, xIndex: any) {
  var ans = new Array(8);
  for (var bh1 = 0; bh1 < ans.length; bh1++) {
    ans[bh1] = new Array(8);
    for (var bh2 = 0; bh2 < ans.length; bh2++) {
      ans[bh1][bh2] = false;
    }
  }
  //diagonals
  var sidewaysForwardRightN = 1;
  try {
    try {
      while (
        bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN] ===
          null &&
        bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN] !==
          undefined
      ) {
        ans[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN] =
          true;
        sidewaysForwardRightN++;
      }
    } catch (e) {}
    try {
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
        ans[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] =
          true;
        sidewaysForwardLeftN++;
      }
    } catch (e) {}

    try {
      if (
        bcg[yIndex + sidewaysForwardLeftN] !== undefined &&
        bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] !==
          undefined &&
        bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN]
          .color !== bcg[yIndex][xIndex].color
      ) {
        ans[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] =
          true;
      }
    } catch (e) {}

    var sidewaysBackwardsLeftN = 1;
    try {
      while (
        bcg[yIndex - sidewaysBackwardsLeftN] !== undefined &&
        bcg[yIndex - sidewaysBackwardsLeftN][
          xIndex - sidewaysBackwardsLeftN
        ] === null &&
        bcg[yIndex - sidewaysBackwardsLeftN][
          xIndex - sidewaysBackwardsLeftN
        ] !== undefined
      ) {
        ans[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN] =
          true;
        sidewaysBackwardsLeftN++;
      }
    } catch (e) {}
    try {
      if (
        bcg[yIndex - sidewaysBackwardsLeftN] !== undefined &&
        bcg[yIndex - sidewaysBackwardsLeftN][
          xIndex - sidewaysBackwardsLeftN
        ] !== undefined &&
        ans[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN]
          .color !== bcg[yIndex][xIndex].color
      ) {
        bcg[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN] =
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
        ans[yIndex - sidewaysBackwardsRightN][
          xIndex + sidewaysBackwardsRightN
        ] !== undefined
      ) {
        bcg[yIndex - sidewaysBackwardsRightN][
          xIndex + sidewaysBackwardsRightN
        ] = true;
        sidewaysBackwardsRightN++;
      }
    } catch (e) {}
    try {
      if (
        bcg[yIndex - sidewaysBackwardsRightN] !== undefined &&
        bcg[yIndex - sidewaysBackwardsRightN][
          xIndex + sidewaysBackwardsRightN
        ] !== undefined &&
        bcg[yIndex + sidewaysBackwardsRightN][xIndex + sidewaysBackwardsRightN]
          .color !== bcg[yIndex][xIndex].color
      ) {
        ans[yIndex - sidewaysBackwardsRightN][
          xIndex + sidewaysBackwardsRightN
        ] = true;
      }
    } catch (e) {}
  } catch (e) {}
  return ans;
}
