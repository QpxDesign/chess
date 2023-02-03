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
        console.log("a");
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

    try{
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
    } catch(e){}

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
    } catch(e) {}
    try {
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
    } catch(e) {}
  
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
    } catch(e) {}
    try {
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
    } catch(e){}

    return bcg;
  } catch (e) {}
}
