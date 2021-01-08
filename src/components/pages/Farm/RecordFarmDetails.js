import { Divider, Typography } from "@material-ui/core";
import React from "react";
import Spacer from "../../organisims/Spacer/Spacer";
import AppContainer from "../../Templates/AppContainer/AppContainer";
import RecordFarmDetailsForm from "./RecordFarmDetailsForm";

function RecordFarmDetails() {
  return (
    <div>
      <AppContainer>
        <Spacer spacing={2} padding={1}></Spacer>
        <Typography variant="h5">Record Farm Details</Typography>{" "}
        <Divider></Divider> <Spacer spacing={1} padding={1}></Spacer>
        <RecordFarmDetailsForm></RecordFarmDetailsForm>
      </AppContainer>
    </div>
  );
}

export default RecordFarmDetails;
