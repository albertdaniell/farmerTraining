import React, { useContext } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DelayLink from "react-delay-link";
import { HandleLeftDrawer } from "../../../contexts/HandleLeftDrawer/HandleLeftDrawer";
import "./AppListItems.css";

function AppListItems(props) {
  const { menus } = props;
  const { handleDrawerOpen, handleDrawerClose, open } = useContext(
    HandleLeftDrawer
  );

  return (
    <List id="listMenu">
      {menus.map((menu, index) => {
        return (
          <DelayLink key={index} delay={80} to={menu.to}>
            <ListItem id="listItem" onClick={handleDrawerClose} button>
              {props.showIcon ? (
                <img id="listImg" src={props.image}></img>
              ) : null}

              <ListItemText primary={menu.menu} />

              <ListItemSecondaryAction>
                <ChevronRightIcon></ChevronRightIcon>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider></Divider>
          </DelayLink>
        );
      })}
    </List>
  );
}

export default AppListItems;
