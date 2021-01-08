import { Divider, Typography } from "@material-ui/core";
import React from "react";
import Spacer from "../../organisims/Spacer/Spacer";
import AppContainer from "../../Templates/AppContainer/AppContainer";
import "./Animals.css";
import AnimalsListMenu from "./AnimalsListMenu";

function Animals() {
  return (
    <div>
      <AppContainer>
        <div>
          <Spacer spacing={2} padding={1}></Spacer>
          <Typography variant="h5">Animals</Typography> <Divider></Divider>
          <AnimalsListMenu></AnimalsListMenu>
        </div>
      </AppContainer>
    </div>
  );
}

export default Animals;
