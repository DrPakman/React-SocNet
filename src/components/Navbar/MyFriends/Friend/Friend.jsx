import React from "react";
import f from './Friend.module.css'

const Friend = (props) => {
  return (
    <div className={f.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBuRanLDHss6aTn8FwyInkHDQ7KMKO7_B-A&s" />
      {props.name}
    </div>
  );
};

export default Friend;