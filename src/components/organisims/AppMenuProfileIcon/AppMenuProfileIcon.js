import React, { useContext } from 'react'
import { AccountCircle } from "@material-ui/icons";
import { IconButton } from '@material-ui/core';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { HandleLeftDrawer } from '../../../contexts/HandleLeftDrawer/HandleLeftDrawer';
function AppMenuProfileIcon(props) {
  const { handleDrawerOpen, handleDrawerClose, open } = useContext(
    HandleLeftDrawer
  );

  const {handleMenu}=props;
  
    return (
        <div onClick={handleDrawerClose}>
            
        <MoreVertIcon
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
          style={{marginRight:10}}
        >
          <AccountCircle /> 
        </MoreVertIcon>

        <ProfileMenu></ProfileMenu>
      </div>
    )
}

export default AppMenuProfileIcon
