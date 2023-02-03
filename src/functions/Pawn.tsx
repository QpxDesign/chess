export function ColorPawn(bcg: any, yIndex: any, xIndex: any, facing: any) {
  //sides
  if (facing === "down") {
    if (bcg[yIndex + 1][xIndex] === null) {
      bcg[yIndex + 1][xIndex] = "green";
      if (
        bcg[yIndex + 1][xIndex + 1] !== null &&
        bcg[yIndex + 1][xIndex + 1] !== bcg[yIndex][xIndex].color
      )
        bcg[yIndex + 1][xIndex + 1] = "purple";
      if (
        bcg[yIndex + 1][xIndex - 1] !== null &&
        bcg[yIndex + 1][xIndex - 1] !== bcg[yIndex][xIndex].color
      )
        bcg[yIndex + 1][xIndex - 1] = "purple";
    }
  }
  if (facing === "up") {
    bcg[yIndex - 1][xIndex] = "green";
    // left diag
    if (
      bcg[yIndex - 1][xIndex - 1] !== null &&
      bcg[yIndex - 1][xIndex - 1].color !== bcg[yIndex][xIndex].color
    )
      bcg[yIndex - 1][xIndex - 1] = "purple";
    if (
      bcg[yIndex - 1][xIndex + 1] !== null &&
      bcg[yIndex - 1][xIndex + 1].color !== bcg[yIndex][xIndex].color
    )
      bcg[yIndex - 1][xIndex + 1] = "purple";
  }

  return bcg;
}
