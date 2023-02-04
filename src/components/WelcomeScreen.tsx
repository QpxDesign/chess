import React, { useState } from "react";

export default function WelcomeScreen() {
  const [link, setLink]: any = useState("");
  function handleGenerateLink() {
    const CODE = "nklscjls";
    setLink(window.location + CODE);
  }

  return (
    <>
      <div className="welcomescreen-background"></div>
      <div className="welcomescreen-wrapper">
        {" "}
        <h1>Welcome to qChess</h1>
        <button onClick={() => handleGenerateLink()}>Generate link</button>
        <input value={link}></input>
        <div className="modes-wrapper"></div>
      </div>
    </>
  );
}
