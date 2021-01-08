import { Menu, MenuItem } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HandleProfileMenu } from "../../../contexts/HandleProfileMenu/HandleProfileMenu";
import './ProfileMenu.css'
function ProfileMenu() {
  const { anchorEl, handleClose } = useContext(HandleProfileMenu);
  const open = Boolean(anchorEl);
  return (
    <div>
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
       <Link to ="/About">
       <MenuItem onClick={handleClose}>About App</MenuItem>
       </Link>
        <MenuItem onClick={handleClose}>HomePageormation</MenuItem>
   
      </Menu>
    </div>
  );
}

export default ProfileMenu;
