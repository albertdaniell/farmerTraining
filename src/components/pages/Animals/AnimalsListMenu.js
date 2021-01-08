import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import DelayLink from "react-delay-link";
import { Link } from "react-router-dom";
import AppListItems from "../../organisims/AppListItems/AppListItems";

function AnimalsListMenu(props) {
  const listMenu = [
    {
      menu: "Register Animal",
      to: "/RegisterAnimals",
    },
  

    {
        menu: "Record Insemination",
        to: "/RecordInsemination",
      },
      {
        menu: "Record Calving",
        to: "/RecordCalving",
      },
      {
        menu: "All Animals",
        to: "#",
      },
  ];
  return (
    <AppListItems handleDrawerClose={props.handleDrawerClose} menus={listMenu}></AppListItems>
  );
}

export default AnimalsListMenu;
