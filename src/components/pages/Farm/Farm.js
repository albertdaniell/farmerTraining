import { Divider, Typography } from "@material-ui/core";
import React from "react";
import Spacer from "../../organisims/Spacer/Spacer";
import AppContainer from "../../Templates/AppContainer/AppContainer";
import "./Farm.css";
import FarmListMenu from "./FarmListMenu";

function Farm() {
  return (
    <div>
      <AppContainer>
        <div>
          <Spacer spacing={2} padding={1}></Spacer>
          <Typography variant="h5">Farm</Typography> <Divider></Divider>
          <FarmListMenu></FarmListMenu>
        </div>
      </AppContainer>
    </div>
  );
}

export default Farm;
