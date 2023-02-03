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
  } catch(e){}
  
  return bcg;
}
