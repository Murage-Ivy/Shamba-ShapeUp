import React from "react";
function Posts({ posts }) {
  const postList = posts.map((post) => (
    <div key={post.id} className="post">
      <img src={post.image_url} alt={"farm"} />
      <p>{post.description}</p>
      <div className="action-btn">
        <div id="like-btn">
          <i className="fa-solid fa-heart"></i>
          <span>0 likes</span>
        </div>
        <div className="comment-btn">
          <i className="fa-regular fa-comment"></i>
          <span>Comment</span>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="posts">
      {postList}
      {/* <div className="post">
        <img
          id="img"
          src={
            "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"
          }
          alt="cow"
        />
        <p>Hello there</p>
        <div className="action-btn">
          <div id="like-btn">
            <i className="fa-solid fa-heart"></i>
            <span>0 likes</span>
          </div>
          <div className="comment-btn">
            <i className="fa-regular fa-comment"></i>
            <span>Comment</span>
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default Posts;
