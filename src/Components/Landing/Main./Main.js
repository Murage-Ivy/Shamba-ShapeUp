import React from "react";
import "./Main.css";
import Navside from "../../Display/NavSide";
import Posts from "../../Display/Posts";
import PostForm from "../../Display/PostForm";

function Main() {
  return (
    <div className="main">
      {/* Displays the navbar and main part in a flex box */}
      <div className="nav-main">
        <Navside />
        <Posts />
      </div>
      <PostForm />
    </div>
  );
}

export default Main;
