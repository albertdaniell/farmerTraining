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
import chapterImage from "../../../../assets/images/icons8-page-100.png";

function SorghumMenuList() {
  const listMenu = [
    {
      menu: "Sorghum Growing in Kenya",
      to: "/SorghumIntro",
    },
    {
      menu: "Choice of sorghum varieties ",
      to: "/GreengramsVariety",
    },

    {
      menu: "Planting of sorghum",
      to: "/GreengramsPlanting",
    },
    {
      menu: "Soil and water conservation measures",
      to: "/GreengramsSoil",
    },
    {
      menu: "Enhancing yields through ",
      to: "/GreengramsSoilFertility",
    },
    {
      menu: "Sorghum plant nutrition",
      to: "/GreengramsRoutine",
    },
    {
      menu: "Soil fertility",
      to: "/GreengramsProtection",
    },
    {
      menu: "Sorghum routine management practices",
      to: "/GreengramsHarvest",
    },
    {
      menu: "Protection of sorghum against insect pests",
      to: "#",
    },
    {
      menu: "Sorghum harvest, processing and storage",
      to: "#",
    },
    {
      menu:
        "Economics of using growth booster and mineral supplement in sorghum production",
      to: "#",
    },
    {
      menu: "Economic benefits on sorghum grain production",
      to: "#",
    },
    {
      menu:
        "Economics of sorghum cultivation using growth booster and mineral zinc supplement in semi-arid eastern Kenya",
      to: "#",
    },
    {
      menu: "Sources of growth booster and Zinc mineral supplement",
      to: "#",
    },
  ];
  return (
    <AppListItems
      showIcon={true}
      image={chapterImage}
      menus={listMenu}
    ></AppListItems>
  );
}

export default SorghumMenuList;
