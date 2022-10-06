import React from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
function Posts({ posts }) {
  // const [likes, setLikes] = useState(0);

  // function onSubmitComment(comment) {
  //   fetch(`http://localhost:4000`)
  // }

  const postList = posts.map((post) => (
    <div key={post.id} className="post">
      <img src={post.image_url} alt={"farm"} />
      <p>{post.description}</p>
      <div className="action-btn">
        <div className={post.likes}>
          <i className="fa-solid fa-heart"></i>
          <span>{post.likes} likes</span>
        </div>
        <div className="comment-btn">
          <i className="fa-regular fa-comment"></i>
          <span>Comment</span>
        </div>
      </div>
      <Comments postId={post.id}  />
      <CommentForm postId={post.id} topic={post.topic} />
    </div>
  ));

  // function onLikeClick(event) {
  //   const likes = parseInt(event.target.textContent.split(" ")[0]);
  //   console.log(likes++);
  // }

  return <div className="posts">{postList}</div>;
}
export default Posts;
