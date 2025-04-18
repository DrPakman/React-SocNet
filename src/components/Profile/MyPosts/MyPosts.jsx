import React from "react";
import mp from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi, how are you?", likes: "15" },
    { id: 2, message: "It's my first post!", likes: "20" },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likes} />
  ));

  return (
    <div className={mp.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={mp.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
