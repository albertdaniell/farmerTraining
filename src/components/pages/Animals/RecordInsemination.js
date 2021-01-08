import { Divider, Typography } from "@material-ui/core";
import React from "react";
import Spacer from "../../organisims/Spacer/Spacer";
import AppContainer from "../../Templates/AppContainer/AppContainer";
import RecordInseminationForm from "./RecordInseminationForm";

function RecordInsemination() {
  return (
    <div>
      <AppContainer>
        <Spacer spacing={2} padding={1}></Spacer>
        <Typography variant="h5">Record Insemination</Typography>{" "}
        <Divider></Divider>
        <Spacer spacing={2} padding={1}></Spacer>
        <RecordInseminationForm></RecordInseminationForm>
      </AppContainer>
    </div>
  );
}

export default RecordInsemination;
