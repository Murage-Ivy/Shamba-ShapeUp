import React, { useEffect, useState } from "react";

function Comments({ postId }) {
  const [postcomments, setPostComments] = useState([]);
  useEffect(() => {
    fetch(` http://localhost:4000/Comments/${postId}`)
      .then((res) => res.json())
      .then((data) => setPostComments([ data]));
  }, [postId]);

  console.log(postcomments);

  const commentList = postcomments.map((comment, index) => (
    <span key={index}> {comment.comment} </span>
  ));

  return <div className="comments">{commentList}</div>;
}
export default Comments;
