import React from "react";
import n from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import MyFriends from "./MyFriends/MyFriends";

const Navbar = (props) => {
  return (
    <nav className={n.nav}>
      <div>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? n.active : n.item)}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? n.active : n.item)}
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? n.active : n.item)}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="music"
          className={(navData) => (navData.isActive ? n.active : n.item)}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="settings"
          className={(navData) => (navData.isActive ? n.active : n.item)}
        >
          Setting
        </NavLink>
      </div>

      <div>
        <MyFriends friends={props.state.friends}/>
      </div>
    </nav>
  );
};

export default Navbar;
