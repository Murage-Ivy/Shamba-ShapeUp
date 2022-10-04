import React from "react";

function PostForm() {
  return (
    <form>
      <label> Enter a image url </label>
      <br/>
      <input type={"text"} placeholder="Enter the image url" />
      <br />
      <label>Description</label>
      <br />
      <textarea></textarea>
      <br />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default PostForm;
