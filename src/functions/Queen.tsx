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
  } catch(e) {}

  
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
  } catch(e){}

  var sidewaysForwardLeftN = 1;
  try {
    while (
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] ===
        null &&
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] !==
        undefined
    ) {
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] = "green";
      sidewaysForwardLeftN++;
    }
    if (
      bcg[yIndex + sidewaysForwardLeftN] !== undefined &&
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] !==
        undefined &&
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN].color !==
        bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] =
        "purple";
    }
  } catch(e) {}
 
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
  } catch(e) {}
 
  var sidewaysBackwardsRightN = 1;
  try {
    while (
      bcg[yIndex - sidewaysBackwardsRightN] !== undefined &&
      bcg[yIndex - sidewaysBackwardsRightN][xIndex + sidewaysBackwardsRightN] ===
        null &&
      bcg[yIndex - sidewaysBackwardsRightN][xIndex + sidewaysBackwardsRightN] !==
        undefined
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
  } catch(e){}

  return bcg;
}
