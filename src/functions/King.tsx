export function ColorKing(bcg: any, yIndex: any, xIndex: any) {
  // up
  try {
    if (bcg[yIndex + 1][xIndex] === null) {
      bcg[yIndex + 1][xIndex] = "green";
    } else if (bcg[yIndex + 1][xIndex].color !== bcg[yIndex][xIndex].color) {
      bcg[yIndex + 1][xIndex] = "purple";
    }
  } catch (e) {}
  //down
  try {
    if (bcg[yIndex - 1][xIndex] === null) {
      bcg[yIndex - 1][xIndex] = "green";
    } else if (bcg[yIndex - 1][xIndex].color !== bcg[yIndex][xIndex].color) {
      bcg[yIndex + 1][xIndex] = "purple";
    }
  } catch (e) {}
  // left
  try {
    if (bcg[yIndex][xIndex - 1] === null) {
      bcg[yIndex][xIndex - 1] = "green";
    } else if (bcg[yIndex][xIndex - 1].color !== bcg[yIndex][xIndex].color) {
      bcg[yIndex][xIndex - 1] = "purple";
    }
  } catch (e) {}
  // right
  try {
    if (bcg[yIndex][xIndex + 1] === null) {
      bcg[yIndex][xIndex + 1] = "green";
    } else if (bcg[yIndex][xIndex + 1].color !== bcg[yIndex][xIndex].color) {
      bcg[yIndex][xIndex + 1] = "purple";
    }
  } catch (e) {}
  return bcg;
}

export function canKingMove(
  bcg: any,
  yIndex: any,
  xIndex: any,
  newY: any,
  newX: any
) {
  // up
  try {
    if (bcg[yIndex + 1][xIndex] === null) {
      if (yIndex + 1 === newY && xIndex === newX) return true;
    } else if (bcg[yIndex + 1][xIndex].color !== bcg[yIndex][xIndex].color) {
      if (yIndex + 1 === newY && xIndex === newX) return true;
    }
  } catch (e) {}
  //down
  try {
    if (bcg[yIndex - 1][xIndex] === null) {
      if (yIndex - 1 === newY && xIndex === newX) return true;
    } else if (bcg[yIndex - 1][xIndex].color !== bcg[yIndex][xIndex].color) {
      if (yIndex - 1 === newY && xIndex === newX) return true;
    }
  } catch (e) {}
  // left
  try {
    if (bcg[yIndex][xIndex - 1] === null) {
      if (yIndex === newY && xIndex - 1 === newX) return true;
    } else if (bcg[yIndex][xIndex - 1].color !== bcg[yIndex][xIndex].color) {
      if (yIndex === newY && xIndex - 1 === newX) return true;
    }
  } catch (e) {}
  // right
  try {
    if (bcg[yIndex][xIndex + 1] === null) {
      if (yIndex === newY && xIndex + 1 === newX) return true;
    } else if (bcg[yIndex][xIndex + 1].color !== bcg[yIndex][xIndex].color) {
      if (yIndex === newY && xIndex + 1 === newX) return true;
    }
  } catch (e) {}
  return false;
}
