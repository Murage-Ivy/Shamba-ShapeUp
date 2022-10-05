import React, { useState } from "react";
function Posts({ posts }) {
  const [likes, setLikes] = useState(0);
  const postList = posts.map((post) => (
    <div key={post.id} className="post">
      <img src={post.image_url} alt={"farm"} />
      <p>{post.description}</p>
      <div className="action-btn">
        <div  className={post.likes} onClick={onLikeClick}>
          <i className="fa-solid fa-heart"></i>
          <span >{post.likes} likes</span>
        </div>
        <div className="comment-btn">
          <i className="fa-regular fa-comment"></i>
          <span>Comment</span>
        </div>
      </div>
    </div>
  ));

  function onLikeClick(event) {
    const likes = parseInt((event.target.textContent).split(' ')[0])
  console.log(likes++)
   
  }

  return <div className="posts">{postList}</div>;
}
export default Posts;
