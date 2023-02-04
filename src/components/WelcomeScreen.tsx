import React, { useState } from "react";

export default function WelcomeScreen() {
  const [link, setLink]: any = useState("");
  const [username, setUsername]: any = useState("");
  const [code, setCode]: any = useState("");

  async function handleGenerateLink() {
    if (username.length < 3) return;
    let data = {
      Username: username,
      Color: "white",
    };
    localStorage.setItem("user", JSON.stringify(data));
    await fetch("http://localhost:3001/generate-link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    }).then((r) =>
      r.json().then((r2) => setLink(window.location + "gamecode/" + r2.gID))
    );
  }

  async function handleGameJoin() {
    if (code.length === 8) return;
    let data = {
      Username: username,
      GameCode: code,
      Color: "black",
    };
    localStorage.setItem("user", JSON.stringify(data));
    await fetch("http://localhost:3001/handle-game-join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((r2) => (window.location.pathname = "/gamecode/" + code));
  }
  return (
    <>
      <div className="welcomescreen-background"></div>
      <div className="welcomescreen-wrapper">
        {" "}
        <h1>Welcome to qChess</h1>
        <button onClick={() => handleGenerateLink()}>Generate link</button>
        <input value={link}></input>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <button onClick={() => handleGameJoin()}>Join Game</button>
        <input
          placeholder="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <div className="modes-wrapper"></div>
      </div>
    </>
  );
}
