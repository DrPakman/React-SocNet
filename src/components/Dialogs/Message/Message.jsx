import React from "react";
import dm from "./Message.module.css";

const Message = (props) => {
  return <div className={dm.message}>{props.message}</div>;
};

export default Message;
