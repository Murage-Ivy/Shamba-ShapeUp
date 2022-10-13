import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
function CommentForm({ postId, topic, onSubmitComment }) {
  const [comment, setComment] = useState("");

  function handleChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`https://shamba-shape-up-data.herokuapp.com/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        comment: comment,
        topic: topic,
        postId: postId,
      }),
    })
      .then((res) => res.json())
      .then((data) => onSubmitComment(data));

    setComment("");
  }
  return (
    <form id="comment-form" onSubmit={handleSubmit}>
      <input
        type={"text"}
        placeholder="Comment..."
        value={comment}
        onChange={handleChange}
      />
      <button typeof="submit" id="comment-btn">
      <FontAwesomeIcon icon={faPaperPlane} id={"comment-btn"}  />
      </button>
    
    </form>
  );
}
export default CommentForm;
