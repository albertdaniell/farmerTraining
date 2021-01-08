import { Divider, Typography } from "@material-ui/core";
import React from "react";
import Spacer from "../../organisims/Spacer/Spacer";
import AppContainer from "../../Templates/AppContainer/AppContainer";
import RecordCalvingForm from "./RecordCalvingForm";

function RecordCalving() {
  return (
    <div>
      <AppContainer>
        <Spacer spacing={2} padding={1}></Spacer>
        <Typography variant="h5">Record Calving</Typography>{" "}
        <Divider></Divider>
        <Spacer spacing={2} padding={1}></Spacer>
        <RecordCalvingForm></RecordCalvingForm>
      </AppContainer>
    </div>
  );
}

export default RecordCalving;
