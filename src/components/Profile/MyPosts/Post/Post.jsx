import React from "react";
import p from "./Post.module.css";

const Post = (props) => {

  return (
    <div className={p.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBuRanLDHss6aTn8FwyInkHDQ7KMKO7_B-A&s" />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
