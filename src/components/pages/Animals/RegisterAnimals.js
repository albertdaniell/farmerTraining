import React from "react";
import { Divider, Typography } from "@material-ui/core";

import Spacer from "../../organisims/Spacer/Spacer";
import AppContainer from "../../Templates/AppContainer/AppContainer";
import RegisterAnimalsForm from "./RegisterAnimalsForm";

function RegisterAnimals() {
  return (
    <div>
      <AppContainer>
        <Spacer spacing={2} padding={1}></Spacer>
        <Typography variant="h5">Register Animals</Typography> <Divider></Divider>
        <Spacer spacing={1} padding={1}></Spacer>
        <RegisterAnimalsForm></RegisterAnimalsForm>
      </AppContainer>
    </div>
  );
}

export default RegisterAnimals;
