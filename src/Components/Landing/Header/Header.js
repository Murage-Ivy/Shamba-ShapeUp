import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  /*=====Header Component=====*/

  return (
    <header id="header">
      <div className="header-section">
        <h1> Shamba Shape Up </h1> <p> Your Number One Plaform </p>
        <Link to="/login">
          <button id="header-button"> Get Started </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
