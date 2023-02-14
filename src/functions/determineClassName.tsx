export function determineClassName(
  y: any,
  x: any,
  gameboardColors: any,
  gameboard: any,
  activePiece: any
) {
  var class_name = "square ";
  if ((y % 2 === 0 && x % 2 === 0) || (y % 2 === 1 && x % 2 === 1)) {
    class_name += "dark ";
  } else {
    class_name += "light ";
  }

  if (
    gameboardColors !== undefined &&
    gameboardColors[y] !== undefined &&
    gameboardColors[y][x] !== undefined
  ) {
    class_name += gameboardColors[y][x];
    class_name += " ";
  }
  try {
    if (activePiece.id === gameboard[y][x].id) class_name += "inplay ";
  } catch (e) {}

  return class_name;
}
