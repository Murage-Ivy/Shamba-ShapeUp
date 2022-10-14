import React, { useState } from "react";
import "./Main.css";
import Navside from "../../Display/NavSide";
import Posts from "../../Display/Posts";
import PostForm from "../../Display/PostForm";

function Main({logged, setLogged }) {
  const [posts, setPosts] = useState([]);
  

  return (
    <div className="main">
      {/* Displays the navbar and main part in a flex box */}
      <PostForm setPosts={setPosts} /> <br />
      <div className="nav-main">
        <Navside setPosts={setPosts} logged={logged} setLogged={setLogged} /> 
        <Posts posts={posts} setPosts={setPosts}/>
      </div>
    </div>
  );
}

export default Main;
