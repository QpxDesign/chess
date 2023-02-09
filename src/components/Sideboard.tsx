import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import socketIO from "socket.io-client";
import * as io from "socket.io-client";
var socket = io.connect("http://localhost:3005");

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
  socket.emit("gamecode", gc);

  useEffect(() => {
    socket.on("getgameboard", (data) => {
      if (data[0].movesLedger !== undefined) {
        setMovesLedger(JSON.parse(data[0].movesLedger));
      }
    });
  }, []);
  socket.on("getgameboard", (data) => {
    if (data[0].movesLedger !== undefined) {
      setMovesLedger(JSON.parse(data[0].movesLedger));
    }
  });

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
