export function ColorRook(bcg: any, yIndex: any, xIndex: any) {
  var forwardN = 1;
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
  return bcg;
}
