import React from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import { useState, useEffect } from "react";
function Posts({ posts }) {
  // const [likes, setLikes] = useState(0);

  const [postcomments, setPostComments] = useState([]);
  const [likes, setLikes] = useState(0);

  function handleChange(event) {
    console.log("I liked this post")
  }

  const onDeletePost = () => {
    console.log("This post has been deleted")
  }

  function onSubmitComment(comment) {
    console.log(comment);
    setPostComments([...postcomments, comment]);
  }

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`https://shamba-shape-up-data.herokuapp.com/comments`)
      .then((res) => res.json())
      .then((data) => {
        setPostComments([...data]);
      }).catch((err) => {alert(err.message);});

    return () => {
      abortController.abort();
    };
  }, []);

  const postList = posts.map((post) => (
    <div key={post.id} className="post">
      <i className="fa-solid fa-trash"></i>
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
