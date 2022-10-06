import React from "react";

function Comments({ postId, postcomments,topic}) {

  const postComment = postcomments.filter((comment) => comment.postId === postId).filter(comment => comment.topic === topic);


  const commentList = postComment.map((comment, index) => (
    <span key={index}> {comment.comment} </span>
  ));

  return <div className="comments">{commentList}</div>;
}
export default Comments;
