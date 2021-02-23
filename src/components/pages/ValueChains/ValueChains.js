import { Typography } from "@material-ui/core";
import React from "react";
import AppContainer from "../../Templates/AppContainer/AppContainer";
import CardMenuWrapper from "../../Templates/CardMenu/CardMenuWrapper";
import Divider from "@material-ui/core/Divider";
import Spacer from "../../organisims/Spacer/Spacer";
import ValueChainsDetails from './ValueChainsDetails'

function ValueChains() {
  return (
    <div>
      <AppContainer>
        <Spacer spacing={2} padding={1}></Spacer>
        <Typography variant="h5">Value Chains</Typography> <Divider></Divider>
      
       <ValueChainsDetails></ValueChainsDetails>
      </AppContainer>
    </div>
  );
}

export default ValueChains;
