import { Divider, Typography } from "@material-ui/core";
import React from "react";
import Spacer from "../../../../organisims/Spacer/Spacer";
import AppContainer from "../../../../Templates/AppContainer/AppContainer";
import SorghumMenuList from "../SorghumMenuList";

function SorghumChapters() {
  return (
    <div>
      <AppContainer>
        <div>
          <Spacer spacing={2} padding={1}></Spacer>
          <Typography variant="h5">Sorghum Chapters</Typography>{" "}
          <Divider></Divider>
          <SorghumMenuList></SorghumMenuList>
        </div>
      </AppContainer>
    </div>
  );
}

export default SorghumChapters;
