import React, { useState } from "react";

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
        Comment
      </button>
    </form>
  );
}
export default CommentForm;
