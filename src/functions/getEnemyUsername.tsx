export function getEnemyUsername(gameboard: any) {
  if (
    gameboard.playerTwoUsername === undefined ||
    gameboard.playerOneUsername === undefined
  ) {
    return "";
  }
  if (
    JSON.parse(localStorage.getItem("user") ?? "{}").Username ===
    gameboard.playerOneUsername
  ) {
    return gameboard.playerTwoUsername;
  }
  if (
    JSON.parse(localStorage.getItem("user") ?? "{}").Username ===
    gameboard.playerTwoUsername
  ) {
    return gameboard.playerOneUsername;
  }
  return "";
}
