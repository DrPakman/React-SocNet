import React from "react";
import mp from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likes} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    debugger
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div className={mp.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={mp.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
