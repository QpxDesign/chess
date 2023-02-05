export async function handleMove(
  gb: any,
  pieceOBJ: any,
  oy: any,
  ox: any,
  ny: any,
  nx: any,
  gc: any
) {
  if (gb[0].length !== 0) {
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

    await fetch("http://localhost:3001/handle-move", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    }).catch((e) => console.log(e));
    const l = JSON.parse(localStorage.getItem("user") ?? "{}")?.Color;
    if (l === "white") {
      localStorage.setItem("user", '{"Username":"Quinn555","Color":"black"}');
    } else if (l === "black") {
      localStorage.setItem("user", '{"Username":"Quinn555","Color":"white"}');
    }
  }
}
