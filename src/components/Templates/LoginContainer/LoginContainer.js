import React from "react";
import Grid from "@material-ui/core/Grid";
import "./LoginContainer.css";
import { Box } from "@material-ui/core";
import cow from "../../../assets/images/cow.jpg";
import LoginFooter from "../../organisims/LoginFooter/LoginFooter";
import LoginHeader from "../../organisims/LoginHeader/LoginHeader";
function LoginContainer(props) {
  const { children } = props;
  return (
    <Box id="loginContainer">
      <Grid container>
        <Grid item sm={7} id="loginRightSide">
          <div id="sideImage"></div>
        </Grid>
        <Grid id="loginScreen" item sm={5}>
          <LoginHeader></LoginHeader>
          {children}
          <LoginFooter></LoginFooter>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginContainer;
