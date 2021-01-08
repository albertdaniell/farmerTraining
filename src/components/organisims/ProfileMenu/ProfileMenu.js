import { Menu, MenuItem } from "@material-ui/core";
import React, { useContext } from "react";
import DelayLink from "react-delay-link";
import { Link } from "react-router-dom";
import { HandleProfileMenu } from "../../../contexts/HandleProfileMenu/HandleProfileMenu";
import { LoginContext } from "../../../contexts/LoginContext/LoginContext";
import "./ProfileMenu.css";
function ProfileMenu() {
  const { anchorEl, handleClose } = useContext(HandleProfileMenu);
  const { logOut } = useContext(LoginContext);

  const open = Boolean(anchorEl);
  return (
    <div id="ProfileMenu">
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <DelayLink delay={200} id="ProfileMenu-Link" to="/About">
          <MenuItem onClick={handleClose}>About App</MenuItem>
        </DelayLink>
        <MenuItem onClick={handleClose}>Contact Information</MenuItem>

        <DelayLink delay={200} id="ProfileMenu-Link" to="">
          <MenuItem onClick={()=>{logOut();handleClose()}}>Logout</MenuItem>
        </DelayLink>
      </Menu>
    </div>
  );
}

export default ProfileMenu;
