import React from "react";
import Friend from "./Friend/Friend";

const MyFriends = (props) => {
  let friendsElements = props.friends.map((f) => <Friend name={f.name} />);

  return (
    <div>
      <h3>My Friends</h3>
      <div>{friendsElements}</div>
    </div>
  );
};

export default MyFriends;
