export function ColorKnight(bcg: any, yIndex: any, xIndex: any) {
  //ima hard code  this lmao
  try {
    // up two over one
    if (bcg[yIndex + 2][xIndex + 1] === null) {
      // pos pos
      bcg[yIndex + 2][xIndex + 1] = "green";
    } else {
      bcg[yIndex + 2][xIndex + 1] = "purple";
    }
    if (bcg[yIndex - 2][xIndex + 1] === null) {
      // neg pos
      bcg[yIndex - 2][xIndex + 1] = "green";
    } else {
      bcg[yIndex - 2][xIndex + 1] = "purple";
    }
    if (bcg[yIndex + 2][xIndex - 1] === null) {
      // pos neg
      bcg[yIndex + 2][xIndex - 1] = "green";
    } else {
      bcg[yIndex + 2][xIndex - 1] = "purple";
    }
    if (bcg[yIndex - 2][xIndex - 1] === null) {
      // neg neg
      bcg[yIndex - 2][xIndex - 1] = "green";
    } else {
      bcg[yIndex - 2][xIndex - 1] = "purple";
    }
    //up one over too
    if (bcg[yIndex + 1][xIndex + 2] === null) {
      // pos pos
      bcg[yIndex + 1][xIndex + 2] = "green";
    } else {
      bcg[yIndex + 1][xIndex + 2] = "purple";
    }
    if (bcg[yIndex - 1][xIndex + 2] === null) {
      // neg pos
      bcg[yIndex - 1][xIndex + 2] = "green";
    } else {
      bcg[yIndex - 1][xIndex + 2] = "purple";
    }
    if (bcg[yIndex + 1][xIndex - 2] === null) {
      // pos neg
      bcg[yIndex + 1][xIndex - 2] = "green";
    } else {
      bcg[yIndex + 1][xIndex - 2] = "purple";
    }
    if (bcg[yIndex - 1][xIndex - 2] === null) {
      // neg neg
      bcg[yIndex - 1][xIndex - 2] = "green";
    } else {
      bcg[yIndex - 1][xIndex - 2] = "purple";
    }
  } catch (e) {}
  return bcg;
}
