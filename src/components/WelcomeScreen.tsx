import React from "react";

export default function WelcomeScreen() {
  return (
    <>
      <div className="welcomescreen-background"></div>
      <div className="welcomescreen-wrapper">
        {" "}
        <h1>Welcome to qChess</h1>
        <h2>We have three modes:</h2>
        <div className="modes-wrapper"></div>
      </div>
    </>
  );
}
