import React from "react";
import CardMenu from "../../../organisims/CardMenu/CardMenu";
import AppContainer from "../../../Templates/AppContainer/AppContainer";
import CardMenuWrapper from "../../../Templates/CardMenu/CardMenuWrapper";
import cropImage from "../../../../assets/images/icons8-barley-100.png";
import { Divider, Grid, Typography } from "@material-ui/core";
import AppListItems from "../../../organisims/AppListItems/AppListItems";
import Spacer from "../../../organisims/Spacer/Spacer";


function TrainingRoomLanding() {

  const listMenu = [
    {
      menu: "Green grams",
      to: "/GreengramsChapters",
    },
    {
      menu: "Sorghum",
      to: "#",
    },

  
 
  ];
  return (
    <div>
      <AppContainer>
      <Spacer spacing={2} padding={1}></Spacer>
        <Typography variant="h5">Training Room</Typography> <Divider></Divider>
        <AppListItems showIcon={true} image={cropImage}  menus={listMenu}></AppListItems>
      </AppContainer>
    </div>
  )
}

export default TrainingRoomLanding;
