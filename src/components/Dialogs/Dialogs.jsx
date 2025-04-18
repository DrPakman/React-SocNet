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
  let dialogs = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Tom" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Anna" },
    { id: 5, name: "Sam" },
    { id: 6, name: "Jane" },
  ];

  let messages = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I am good" },
    { id: 4, message: "Bye" },
    { id: 5, message: "Bye" },
  ];

  let dialogElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messageElements = messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>{dialogElements}</div>
      <div className={d.Messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
