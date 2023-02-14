import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function FormatTime(s: any) {
  if (s === null || s === undefined) return;
  s = parseInt(s);
  const date = new Date(s);
  var timeFormat: any = date.toLocaleTimeString();

  return timeFormat;
}

export default function Sideboard() {
  const { gc } = useParams();
  const [movesLedger, setMovesLedger]: any = useState([]);
  async function getMoves() {
    if (gc?.length !== 8) return;
    let data = {
      GameCode: gc,
    };

    await fetch("http://localhost:3001/get-moves-from-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((r2) => {
        if (!r2.error) {
          setMovesLedger(r2.reverse());
        } else {
          window.location.pathname = "/";
          localStorage.clear();
        }
      });
  }
  useEffect(() => {
    const interval = setInterval(() => {
      getMoves();
    }, 5_000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    getMoves();
  }, []);
  return (
    <div className="sideboard-wrapper">
      {" "}
      <h1>Recent Movez</h1>
      <div className="moves-list">
        {movesLedger.map((move: any) => (
          <div className="move-wrapper">
            <img
              src={`/assets/pieces/${move.pieceOBJ.icon}-${move.pieceOBJ.color}.svg`}
            />
            <h1>{move.pieceOBJ.color}</h1>
            <h5>{FormatTime(move.timestamp)}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
