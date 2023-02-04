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

export function canPawnMove(
  bcg: any,
  yIndex: any,
  xIndex: any,
  facing: any,
  newY: any,
  newX: any
) {
  if (facing === "down") {
    try {
      if (bcg[yIndex + 1][xIndex] === null) {
        if (yIndex + 1 === newY && xIndex === newX) {
          return true;
        }
        try {
          if (
            bcg[yIndex + 1][xIndex + 1] !== null &&
            bcg[yIndex + 1][xIndex + 1] !== bcg[yIndex][xIndex].color
          )
            if (yIndex + 1 === newY && xIndex + 1 === newX) {
              return true;
            }
        } catch (e) {}
        try {
          if (
            bcg[yIndex + 1][xIndex - 1] !== null &&
            bcg[yIndex + 1][xIndex - 1] !== bcg[yIndex][xIndex].color
          )
            if (yIndex + 1 === newY && xIndex - 1 === newX) {
              return true;
            }
        } catch (e) {}
      }
    } catch (e) {}
  }
  if (facing === "up") {
    if (yIndex - 1 === newY && xIndex === newX) {
      return true;
    }
    // left diag
    try {
      if (
        bcg[yIndex - 1][xIndex - 1] !== null &&
        bcg[yIndex - 1][xIndex - 1].color !== bcg[yIndex][xIndex].color
      )
        if (yIndex - 1 === newY && xIndex - 1 === newX) {
          return true;
        }
    } catch (e) {}
    try {
      if (
        bcg[yIndex - 1][xIndex + 1] !== null &&
        bcg[yIndex - 1][xIndex + 1].color !== bcg[yIndex][xIndex].color
      )
        if (yIndex - 1 === newY && xIndex + 1 === newX) {
          return true;
        }
    } catch (e) {}
  }

  return false;
}
