import React from "react";

function Comments({ postId, postcomments }) {

  const postComment = postcomments.filter((comment) => comment.postId === postId)


  const commentList = postComment.map((comment, index) => (
    <span key={index}> {comment.comment} </span>
  ));

  return <div className="comments">{commentList}</div>;
}
export default Comments;
