import React from "react";
import { NavLink } from "react-router-dom";
import di from "./DialogItem.module.css"

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <div>
        <img
          className={di.img}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBuRanLDHss6aTn8FwyInkHDQ7KMKO7_B-A&s"
        />
      </div>
      <div className={di.dialog + " " + di.active}>
        <NavLink to={path}>{props.name} </NavLink>
      </div>
    </div>
  );
};

export default DialogItem;
