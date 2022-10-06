import React, { useEffect } from "react";

function Comments({ postId, getCommentById, postcomments }) {
  console.log(postId);
  useEffect(() => {
    const abortController = new AbortController();
    fetch(` http://localhost:4000/Comments/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        getCommentById(data);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  const commentList = postcomments.map((comment, index) => (
    <span key={index}> {comment.comment} </span>
  ));

  return <div className="comments">{commentList}</div>;
}
export default Comments;
