import React, { useState } from "react";
import "./Main.css";
import Navside from "../../Display/NavSide";
import Posts from "../../Display/Posts";
import PostForm from "../../Display/PostForm";

function Main() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="main">
      {/* Displays the navbar and main part in a flex box */}
      <PostForm />
      <br />
      <div className="nav-main">
        <Navside setPosts={setPosts} />
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default Main;
