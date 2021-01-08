import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import DelayLink from "react-delay-link";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AppListItems from "../../organisims/AppListItems/AppListItems";
function FarmListMenu() {
  const listMenu = [
    {
      menu: "Farm Details",
      to: "#",
    },
    {
      menu: "Record Farm Details",
      to: "/RecordFarm",
    },

    {
      menu: "Update Farm Details",
      to: "#",
    },
  ];
  return <AppListItems menus={listMenu}></AppListItems>;
}

export default FarmListMenu;
