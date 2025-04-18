import React from "react";
import d from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={d.dialog + " " + d.active}>
      <NavLink to={path}>{props.name} </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={d.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>
        <DialogItem name="Alex" id="1" />
        <DialogItem name="Tom" id="2" />
        <DialogItem name="Bob" id="3" />
        <DialogItem name="Anna" id="4" />
        <DialogItem name="Sam" id="5" />
        <DialogItem name="Jane" id="6" />
      </div>
      <div className={d.Messages}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Bye" />
      </div>
    </div>
  );
};

export default Dialogs;
