import React, { useState } from "react";

function PostForm({ setPosts }) {
  const [post, setPost] = useState({
    image_url: "",
    description: "",
    topic: "",

  });

  function handleChange(event) {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const userPost = {
      image_url: post.image_url,
      description: post.description,
      topic: post.topic,
      likes:0,
      comments:[]
    };
    fetch(`http://localhost:4000/${post.topic}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userPost),
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts((prevPosts) => [...prevPosts, data]);
      });
    setPost({
      image_url: "",
      description: "",
      topic: "",
    });
  }

  return (
    <form id="post-form" onSubmit={handleSubmit}>
      <br />
      <label> Enter a image url </label>
      <br />

      <input
        type={"text"}
        placeholder="Enter the image url"
        name="image_url"
        value={post.image_url}
        onChange={handleChange}
      />

      <br />
      <label> Topic </label>
      <br />

      <input
        type={"text"}
        placeholder="Enter the topic category"
        name="topic"
        value={post.topic}
        onChange={handleChange}
      />

      <br />
      <label> Description </label>
      <br />

      <textarea
        value={post.description}
        name="description"
        onChange={handleChange}
      ></textarea>

      <br />

      <button type="submit" id="post-btn">
        Add Post
      </button>
    </form>
  );
}

export default PostForm;
