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
import AppListItems from "../../../organisims/AppListItems/AppListItems";
import chapterImage from '../../../../assets/images/icons8-page-100.png'

function GreenGramsMenuList() {
  const listMenu = [
    {
      menu: "Introduction",
      to: "/GreengramsIntro",
    },
    {
      menu: "Choice of varieties",
      to: "/GreengramsVariety",
    },

    {
      menu: "Planting",
      to: "/GreengramsPlanting",
    },
    {
      menu: "Soil and water conservation measures",
      to: "/GreengramsSoil",
    },
    {
      menu: "Soil fertility",
      to: "/GreengramsSoilFertility",
    },
    {
      menu: "Routine management practices",
      to: "/GreengramsRoutine",
    },
    {
      menu: "Protection of green gram against insect pests and diseases",
      to: "/GreengramsProtection",
    },
    {
      menu: "Harvest, processing and storage",
      to: "/GreengramsHarvest",
    },
  ];
  return <AppListItems showIcon={true} image={chapterImage} menus={listMenu}></AppListItems>;
}

export default GreenGramsMenuList;
