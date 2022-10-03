import React from "react";
import "./Header.css";

function Header() {
  return (
    <header id="header">
      <div className="header-section">
        <h1> Shamba Shape Up </h1> <p> Your Number One Plaform </p>
        <button id="header-button">
          <a href="#login">Get Started</a>
        </button>
      </div>
    </header>
  );
}

export default Header;
