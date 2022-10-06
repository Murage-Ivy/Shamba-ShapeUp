import React, { useCallback } from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import { useState } from "react";
function Posts({ posts }) {
 
  // const [likes, setLikes] = useState(0);


  const [postcomments, setPostComments] = useState([]);

  
  function getCommentById(comments) {
    const commentarray = [];
    commentarray.push(comments);
    setPostComments(commentarray)
  }
  
  function onSubmitComment(comment) {
    console.log(comment)
  }


  const postList = posts.map((post) => (
    <div key={post.id} className="post">
      <img src={post.image_url} alt={"farm"} />
      <p>{post.description}</p>
      <div className="action-btn">
        <div className={post.likes}>
          <i className="fa-solid fa-heart"></i>
          <span>{post.likes} likes</span>
        </div>
        <div className="comment-btn">
          <i className="fa-regular fa-comment"></i>
          <span>Comment</span>
        </div>
      </div>
      <Comments postId={post.id} getCommentById={getCommentById} postcomments={postcomments} />
      <CommentForm postId={post.id} topic={post.topic} onSubmitComment={onSubmitComment} />
    </div>
  ));

  // function onLikeClick(event) {
  //   const likes = parseInt(event.target.textContent.split(" ")[0]);
  //   console.log(likes++);
  // }

  return <div className="posts">{postList}</div>;
}
export default Posts;
