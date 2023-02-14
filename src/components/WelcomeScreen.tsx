import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CustomAlert } from "../functions/CustomAlert";

export default function WelcomeScreen() {
  const [username, setUsername]: any = useState("");
  const [code, setCode]: any = useState("");
  const { gc } = useParams();

  async function handleGenerateLink() {
    if (username.length < 3 || code !== "") return;
    let data = {
      Username: username,
      Color: "white",
    };
    localStorage.setItem("user", JSON.stringify(data));
    await fetch("https://chess-api.quinnpatwardhan.com/generate-link", {
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
        window.location.pathname = "/gamecode/" + r2.gID;
      });
  }
  async function handleGameJoin(gamecode: any) {
    localStorage.clear();
    if (gamecode.length !== 8) return;
    let data = {
      Username: username,
      GameCode: gamecode,
      Color: "black",
    };
    localStorage.setItem("user", JSON.stringify(data));
    await fetch("https://chess-api.quinnpatwardhan.com/handle-game-join", {
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
          window.location.pathname = "/gamecode/" + gamecode;
        }
      });
  }
  if (gc !== undefined) {
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
            Version 0.2
          </label>
          <div className="form-wrapper">
            <div className="h-stack">
              <input
                value={username}
                placeholder="username"
                className="username-input"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <button
                onClick={() => {
                  handleGameJoin(gc);
                }}
                className="cool-purple-button"
                style={{ fontSize: "1.25em" }}
              >
                Play
              </button>
            </div>

            <Link to="nqueens" style={{ margin: ".25em auto" }}>
              nQueens Visualizer
            </Link>
          </div>
        </div>
      </>
    );
  } else {
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
            Version 0.2
          </label>
          <div className="form-wrapper">
            <div className="h-stack">
              {" "}
              <input
                value={username}
                placeholder="username"
                className="username-input"
                onChange={(e) => setUsername(e.target.value)}
              ></input>{" "}
              <button
                onClick={() => handleGenerateLink()}
                className="cool-purple-button"
                style={{ fontSize: "1.25em" }}
              >
                Generate link
              </button>
            </div>
            <div className="modes-wrapper"></div>
          </div>
          <Link to="nqueens">nQueens Visualizer</Link>
        </div>
      </>
    );
  }
}
