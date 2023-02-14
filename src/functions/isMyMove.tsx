export function isMyMove(movesLedger: any) {
  const l = JSON.parse(localStorage.getItem("user") ?? "{}");
  if (l === undefined || l.Color === undefined) return false;
  if (movesLedger === undefined) return false;
  if (movesLedger === null || movesLedger.length === 0) {
    return l.Color === "white";
  }
  if (l.Color === movesLedger[movesLedger.length - 1].pieceOBJ.color) {
    return false;
  } else if (l.Color !== movesLedger[movesLedger.length - 1].pieceOBJ.color) {
    return true;
  }
  return false;
}
