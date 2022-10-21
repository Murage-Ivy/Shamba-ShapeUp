import React, { useState } from "react";
import "./Main.css";
import Navside from "../../Display/NavSide";
import Posts from "../../Display/Posts";
import PostForm from "../../Display/PostForm";

function Main({ logged, setLogged }) {
  const [posts, setPosts] = useState([]);

  function handleAddLike(item) {
    console.log(item);
    const UpdatedPosts = posts.map((post) => {
      if (post.id === item.id) {
        return item;
      } else {
        return post;
      }
    });
    setPosts(UpdatedPosts);
  }
  return (
    <div className="main">
      {/* Displays the navbar and main part in a flex box */}
      <PostForm setPosts={setPosts} /> <br />
      <div className="nav-main">
        <Navside setPosts={setPosts} logged={logged} setLogged={setLogged} />
        <Posts
          posts={posts}
          setPosts={setPosts}
          handleAddLike={handleAddLike}
        />
      </div>
    </div>
  );
}

export default Main;
