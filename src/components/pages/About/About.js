import { Divider, Typography } from "@material-ui/core";
import React from "react";
import Spacer from "../../organisims/Spacer/Spacer";
import AppContainer from "../../Templates/AppContainer/AppContainer";

function About() {
  return (
    <div>
      <AppContainer>
        <Spacer spacing={2} padding={1}></Spacer>
        <Typography variant="h5">About</Typography> <Divider></Divider>
        <center>
          <p>Version 1.0</p>
          <p>
            Developed by Kalro Agriculture & Livestock Research Organization
            (KALRO)
          </p>
          <small>This app may collect anonymous usage data</small>
          <p>Copyright 2020</p>
        </center>
      </AppContainer>
    </div>
  );
}

export default About;
