import React from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import { useState, useEffect } from "react";
function Posts({ posts }) {
  // const [likes, setLikes] = useState(0);

  const [postcomments, setPostComments] = useState([]);

  function onSubmitComment(comment) {
    console.log(comment);
    setPostComments([...postcomments, comment]);
  }

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`http://localhost:4000/Comments`)
      .then((res) => res.json())
      .then((data) => {
        setPostComments([...data]);
      });

    return () => {
      abortController.abort();
    };
  }, []);

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
      <Comments
        postId={post.id}
        postcomments={postcomments}
        topic={post.topic}
      />
      <CommentForm
        postId={post.id}
        topic={post.topic}
        onSubmitComment={onSubmitComment}
      />
    </div>
  ));

  return <div className="posts">{postList}</div>;
}
export default Posts;
