export function ColorBishop(bcg: any, yIndex: any, xIndex: any) {
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
      console.log("a");
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
    var sidewaysForwardLeftN = 1;
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
      bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN]
        .color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] =
        "purple";
    }
    var sidewaysBackwardsLeftN = 1;
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
      bcg[yIndex + sidewaysForwardRightN][xIndex + sidewaysForwardRightN]
        .color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN] =
        "purple";
    }
    var sidewaysBackwardsRightN = 1;
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
      bcg[yIndex - sidewaysBackwardsRightN][
        xIndex + sidewaysBackwardsRightN
      ] !== undefined &&
      bcg[yIndex + sidewaysBackwardsRightN][xIndex + sidewaysBackwardsRightN]
        .color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex - sidewaysBackwardsRightN][xIndex + sidewaysBackwardsRightN] =
        "purple";
    }
    return bcg;
  } catch (e) {}
}
