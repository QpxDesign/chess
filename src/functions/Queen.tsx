export function ColorQueen(bcg: any, yIndex: any, xIndex: any) {
  //forward/backward
  var forwardN = 1;
  while (
    bcg[yIndex + forwardN][xIndex] === null &&
    bcg[yIndex + forwardN][xIndex] !== undefined
  ) {
    bcg[yIndex + forwardN][xIndex] = "green";
    forwardN++;
  }
  if (
    bcg[yIndex + forwardN] !== undefined &&
    bcg[yIndex + forwardN][xIndex] !== undefined
  ) {
    bcg[yIndex + forwardN][xIndex] = "purple";
  }
  var backwardN = 1;
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
    bcg[yIndex - backwardN][xIndex] !== undefined
  ) {
    bcg[yIndex - backwardN][xIndex] = "purple";
  }
  //sides
  var rightN = 1;
  while (
    bcg[yIndex][xIndex + rightN] === null &&
    bcg[yIndex][xIndex + rightN] !== undefined
  ) {
    bcg[yIndex][xIndex + rightN] = "green";
    rightN++;
  }
  if (bcg[yIndex] !== undefined && bcg[yIndex][xIndex + rightN] !== undefined) {
    bcg[yIndex][xIndex + rightN] = "purple";
  }
  var leftN = 1;
  while (
    bcg[yIndex][xIndex - leftN] === null &&
    bcg[yIndex][xIndex - leftN] !== undefined
  ) {
    bcg[yIndex][xIndex - leftN] = "green";
    leftN++;
  }
  if (bcg[yIndex] !== undefined && bcg[yIndex][xIndex - leftN] !== undefined) {
    bcg[yIndex][xIndex - leftN] = "purple";
  }
  //diagonals
  var sidewaysForwardRightN = 1;
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
      undefined
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
    bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] = "green";
    sidewaysForwardLeftN++;
  }
  if (
    bcg[yIndex + sidewaysForwardLeftN] !== undefined &&
    bcg[yIndex + sidewaysForwardLeftN][xIndex - sidewaysForwardLeftN] !==
      undefined
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
      undefined
  ) {
    bcg[yIndex - sidewaysBackwardsLeftN][xIndex - sidewaysBackwardsLeftN] =
      "purple";
  }
  var sidewaysBackwardsRightN = 1;
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
      undefined
  ) {
    bcg[yIndex - sidewaysBackwardsRightN][xIndex + sidewaysBackwardsRightN] =
      "purple";
  }
  return bcg;
}
