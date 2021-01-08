import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HandleLeftDrawer } from "../../../contexts/HandleLeftDrawer/HandleLeftDrawer";
import { HandleProfileMenu } from "../../../contexts/HandleProfileMenu/HandleProfileMenu";
import AppMenuProfileIcon from "../../organisims/AppMenuProfileIcon/AppMenuProfileIcon";
import MobileLeftMenu from "../../organisims/MobileLeftMenu/MobileLeftMenu";
import ProfileImage from "../../organisims/ProfileImage/ProfileImage";
import "./AppNav.css";

function AppNav(props) {
  const { anchorEl, handleClose, handleMenu } = useContext(HandleProfileMenu);
  const { handleDrawerOpen, handleDrawerClose, open } = useContext(
    HandleLeftDrawer
  );
  
  return (
    <div className="root">
      <AppBar disableElevation id="appBar" position="fixed">
        {" "}
        <Container style={{ padding: 0 }} maxWidth="md">
          <Toolbar style={{ padding: 0 }} id="toolbar">
            <IconButton id="appNavMenuIcon" color="inherit" aria-label="menu">
              <MenuIcon
                style={{ fontSize: 30 }}
                onClick={() => handleDrawerOpen()}
              />
            </IconButton>
            <Typography variant="h6" id="appBartitle" className="appBartitle">
              <Link to="/">
                <Button
                  style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
                  size="large"
                >
                  Crops Phenology
                </Button>
              </Link>
            </Typography>
            <div style={{ marginRight: 20 }}>
              <ProfileImage height={35} width={35}></ProfileImage>
            </div>
            <AppMenuProfileIcon handleMenu={handleMenu}></AppMenuProfileIcon>
          </Toolbar>
        </Container>
      </AppBar>
      <MobileLeftMenu></MobileLeftMenu>
    </div>
  );
}

export default AppNav;
