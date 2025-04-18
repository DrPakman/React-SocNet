import React from "react";
import pi from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={pi.img}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNj3KVn4EbrLuoJ0qYoLWQ4LSiQNWAjQsNQ&s"
        />
      </div>
      <div className={pi.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
