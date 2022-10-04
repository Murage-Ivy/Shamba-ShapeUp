import React from "react";

function Posts() {
  return (
    <div className="posts">
      <div className="post">
        <img src="" alt="" />
        <p>Hello there</p>
        <div className="action-button">
          <div id="like-btn">
            <i class="fa-solid fa-heart"></i>
            <span>0 likes</span>
          </div>
          <div className="comment-btn">
            <i class="fa-regular fa-comment"></i>
            <span>Commennt</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Posts;
