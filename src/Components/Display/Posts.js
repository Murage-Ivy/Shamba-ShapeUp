import React from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function Posts({ posts, setPosts }) {
  const [postcomments, setPostComments] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleChange(postItem) {
    fetch(
      `https://shamba-shape-up-data.herokuapp.com/${postItem.topic.toLowerCase()}/${
        postItem.id
      }`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ likes: postItem.likes + 1 }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts((posts) =>
          posts.map((post) =>
            post.id === data.id ? { ...post, likes: post.likes + 1 } : post
          )
        );
        setErrors([]);
      })
      .catch((error) => {
        setErrors(error);
      });
  }

  const onDeletePost = () => {
    console.log("This post has been deleted");
  };

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
      })
      .catch((err) => {
        alert(err.message);
      });

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
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "red", marginRight: "5px" }}
            onClick={() => handleChange(post)}
          />
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

  return (
    <div className="posts">
      {errors ? <div className="errors">{errors}</div> : null}
      {posts.length > 0 ? (
        postList
      ) : (
        <h2 style={{ color: "#ccc" }}>Loading....</h2>
      )}
    </div>
  );
}
export default Posts;
