export function ColorPawn(bcg: any, yIndex: any, xIndex: any, facing: any) {
  //sides
  if (facing === "down") {
    try {
      if (bcg[yIndex + 1][xIndex] === null) {
        bcg[yIndex + 1][xIndex] = "green";
        try {
          if (
            bcg[yIndex + 1][xIndex + 1] !== null &&
            bcg[yIndex + 1][xIndex + 1] !== bcg[yIndex][xIndex].color
          )
            bcg[yIndex + 1][xIndex + 1] = "purple";
        } catch (e) {}
        try {
          if (
            bcg[yIndex + 1][xIndex - 1] !== null &&
            bcg[yIndex + 1][xIndex - 1] !== bcg[yIndex][xIndex].color
          )
            bcg[yIndex + 1][xIndex - 1] = "purple";
        } catch (e) {}
      }
    } catch (e) {}
  }
  if (facing === "up") {
    bcg[yIndex - 1][xIndex] = "green";
    // left diag
    try {
      if (
        bcg[yIndex - 1][xIndex - 1] !== null &&
        bcg[yIndex - 1][xIndex - 1].color !== bcg[yIndex][xIndex].color
      )
        bcg[yIndex - 1][xIndex - 1] = "purple";
    } catch (e) {}
    try {
      if (
        bcg[yIndex - 1][xIndex + 1] !== null &&
        bcg[yIndex - 1][xIndex + 1].color !== bcg[yIndex][xIndex].color
      )
        bcg[yIndex - 1][xIndex + 1] = "purple";
    } catch (e) {}
  }

  return bcg;
}
