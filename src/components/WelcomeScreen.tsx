import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function WelcomeScreen() {
  const [link, setLink]: any = useState("");
  const [username, setUsername]: any = useState("");
  const [code, setCode]: any = useState("");

  async function handleGenerateLink() {
    if (username.length < 3 || code !== "") return;
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
    })
      .then((r) => r.json())
      .then((r2) => {
        localStorage.setItem(
          "user",
          `{"Username":"${username}","Color":"white"}`
        );
        setLink(window.location + "gamecode/" + r2.gID);
        setCode(r2.gID);
      });
  }

  async function handleGameJoin() {
    if (code.length !== 8 || code === "") return;
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
      .then((r2) => {
        if (r2.allowJoin) {
          localStorage.setItem(
            "user",
            `{"Username":"${username}","Color":"black"}`
          );
          window.location.pathname = "/gamecode/" + code;
        }
      });
  }
  return (
    <>
      <div className="welcomescreen-background"></div>
      <div className="welcomescreen-wrapper">
        {" "}
        <h1>Welcome to qChess</h1>
        <label
          style={{
            fontWeight: 100,
            margin: 0,
            marginBottom: ".5em",
            fontSize: "1em",
          }}
        >
          Version 0.1
        </label>
        <div className="form-wrapper">
          <input
            value={username}
            placeholder="username"
            className="username-input"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <div className="v-stack"></div>
          <div className="h-stack">
            <input value={link} placeholder="link"></input>
            <button
              onClick={() => handleGenerateLink()}
              className="cool-purple-button"
            >
              Generate link (Use this to join)
            </button>
          </div>
          <div className="h-stack" style={{ marginTop: "1em" }}>
            <input
              placeholder="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button
              onClick={() => handleGameJoin()}
              className="cool-purple-button"
            >
              Join Game (Send this to who you want to join)
            </button>
          </div>
          <div className="modes-wrapper"></div>
        </div>
        <Link to="nqueens">nQueens Visualizer</Link>
      </div>
    </>
  );
}
