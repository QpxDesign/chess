export function ColorKnight(bcg: any, yIndex: any, xIndex: any) {
  //ima hard code  this lmao

  // up two over one
  try {
    if (bcg[yIndex + 2][xIndex + 1] === null) {
      // pos pos
      bcg[yIndex + 2][xIndex + 1] = "green";
    } else if (
      bcg[yIndex + 2][xIndex + 1].color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex + 2][xIndex + 1] = "purple";
    }
  } catch (e) {}
  try {
    if (bcg[yIndex - 2][xIndex + 1] === null) {
      // neg pos
      bcg[yIndex - 2][xIndex + 1] = "green";
    } else if (
      bcg[yIndex - 2][xIndex + 1].color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex - 2][xIndex + 1] = "purple";
    }
  } catch (e) {}
  try {
    if (bcg[yIndex + 2][xIndex - 1] === null) {
      // pos neg
      bcg[yIndex + 2][xIndex - 1] = "green";
    } else if (
      bcg[yIndex + 2][xIndex - 1].color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex + 2][xIndex - 1] = "purple";
    }
  } catch (e) {}
  try {
    if (bcg[yIndex - 2][xIndex - 1] === null) {
      // neg neg
      bcg[yIndex - 2][xIndex - 1] = "green";
    } else if (
      bcg[yIndex - 2][xIndex - 1].color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex - 2][xIndex - 1] = "purple";
    }
  } catch (e) {}
  try {
    if (bcg[yIndex + 1][xIndex + 2] === null) {
      // pos pos
      bcg[yIndex + 1][xIndex + 2] = "green";
    } else if (
      bcg[yIndex + 1][xIndex + 2].color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex + 1][xIndex + 2] = "purple";
    }
  } catch (e) {}
  try {
    if (bcg[yIndex - 1][xIndex + 2] === null) {
      // neg pos
      bcg[yIndex - 1][xIndex + 2] = "green";
    } else if (
      bcg[yIndex - 1][xIndex + 2].color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex - 1][xIndex + 2] = "purple";
    }
  } catch (e) {}
  try {
    if (bcg[yIndex + 1][xIndex - 2] === null) {
      // pos neg
      bcg[yIndex + 1][xIndex - 2] = "green";
    } else if (
      bcg[yIndex + 1][xIndex - 2].color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex + 1][xIndex - 2] = "purple";
    }
  } catch (e) {}
  try {
    if (bcg[yIndex - 1][xIndex - 2] === null) {
      // neg neg
      bcg[yIndex - 1][xIndex - 2] = "green";
    } else if (
      bcg[yIndex - 1][xIndex - 2].color !== bcg[yIndex][xIndex].color
    ) {
      bcg[yIndex - 1][xIndex - 2] = "purple";
    }
  } catch (e) {}

  return bcg;
}
export function canKnightMove(
  bcg: any,
  yIndex: any,
  xIndex: any,
  newY: any,
  newX: any
) {
  try {
    if (bcg[yIndex + 2][xIndex + 1] === null) {
      // pos pos
      if (yIndex + 2 === newY && xIndex + 1 === newX) return true;
    } else if (
      bcg[yIndex + 2][xIndex + 1].color !== bcg[yIndex][xIndex].color
    ) {
      if (yIndex + 2 === newY && xIndex + 1 === newX) return true;
    }
  } catch (e) {}
  try {
    if (bcg[yIndex - 2][xIndex + 1] === null) {
      // neg pos
      if (yIndex - 2 === newY && xIndex + 1 === newX) return true;
    } else if (
      bcg[yIndex - 2][xIndex + 1].color !== bcg[yIndex][xIndex].color
    ) {
      if (yIndex - 2 === newY && xIndex + 1 === newX) return true;
    }
  } catch (e) {}
  try {
    if (bcg[yIndex + 2][xIndex - 1] === null) {
      // pos neg
      if (yIndex + 2 === newY && xIndex - 1 === newX) return true;
    } else if (
      bcg[yIndex + 2][xIndex - 1].color !== bcg[yIndex][xIndex].color
    ) {
      if (yIndex + 2 === newY && xIndex - 1 === newX) return true;
    }
  } catch (e) {}
  try {
    if (bcg[yIndex - 2][xIndex - 1] === null) {
      // neg neg
      if (yIndex - 2 === newY && xIndex - 1 === newX) return true;
    } else if (
      bcg[yIndex - 2][xIndex - 1].color !== bcg[yIndex][xIndex].color
    ) {
      if (yIndex - 2 === newY && xIndex - 1 === newX) return true;
    }
  } catch (e) {}
  try {
    if (bcg[yIndex + 1][xIndex + 2] === null) {
      // pos pos
      if (yIndex + 1 === newY && xIndex + 2 === newX) return true;
    } else if (
      bcg[yIndex + 1][xIndex + 2].color !== bcg[yIndex][xIndex].color
    ) {
      if (yIndex + 1 === newY && xIndex + 2 === newX) return true;
    }
  } catch (e) {}
  try {
    if (bcg[yIndex - 1][xIndex + 2] === null) {
      // neg pos
      if (yIndex - 1 === newY && xIndex + 2 === newX) return true;
    } else if (
      bcg[yIndex - 1][xIndex + 2].color !== bcg[yIndex][xIndex].color
    ) {
      if (yIndex - 1 === newY && xIndex + 2 === newX) return true;
    }
  } catch (e) {}
  try {
    if (bcg[yIndex + 1][xIndex - 2] === null) {
      // pos neg
      if (yIndex + 1 === newY && xIndex - 2 === newX) return true;
    } else if (
      bcg[yIndex + 1][xIndex - 2].color !== bcg[yIndex][xIndex].color
    ) {
      if (yIndex + 1 === newY && xIndex - 2 === newX) return true;
    }
  } catch (e) {}
  try {
    if (bcg[yIndex - 1][xIndex - 2] === null) {
      // neg neg
      if (yIndex - 1 === newY && xIndex - 2 === newX) return true;
    } else if (
      bcg[yIndex - 1][xIndex - 2].color !== bcg[yIndex][xIndex].color
    ) {
      if (yIndex - 1 === newY && xIndex - 2 === newX) return true;
    }
  } catch (e) {}
}
