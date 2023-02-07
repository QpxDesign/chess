export async function handleMove(
  gb: any,
  pieceOBJ: any,
  oy: any,
  ox: any,
  ny: any,
  nx: any,
  gc: any
) {
  console.log(oy, ox, ny, nx, gc);
  if (gb[0].length !== 0) {
    pieceOBJ.row = ny;
    pieceOBJ.col = nx;
    let mo = {
      pieceOBJ: pieceOBJ,
      oldY: oy,
      oldX: ox,
      newY: ny,
      newX: nx,
      timestamp: Date.now(),
    };
    let data = {
      GameCode: gc,
      gameboard: JSON.stringify(gb),
      moveData: JSON.stringify(mo),
    };

    await fetch("https://chess-api.quinnpatwardhan.com/handle-move", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((r2) => console.log(r2))
      .catch((e) => console.error(e));
  }
}
