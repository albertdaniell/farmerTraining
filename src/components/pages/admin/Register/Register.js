import React from "react";
import LoginContainer from "../../../Templates/LoginContainer/LoginContainer";
import TextField from "@material-ui/core/TextField";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import "./Register.css";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import AppLoginLogo from "../../../organisims/AppLoginLogo/AppLoginLogo";
function Register() {
  return (
    <div>
      <LoginContainer>
        <div id="loginForm">
        <AppLoginLogo name="Crop Phenology App" textAlign="center" pageTitle="Register Account"></AppLoginLogo>
          {/* <Typography variant="h5">
            Register <PersonAddIcon></PersonAddIcon>
          </Typography>{" "} */}
          <br></br>
          <form><Grid id="textFieldGrid">
              <TextField
                type="text"
                fullWidth
                id="textField"
                label="Enter Name i.e John Doe"
              />
            </Grid>
            <Grid id="textFieldGrid">
              <TextField
                type="number"
                fullWidth
                id="textField"
                label="Enter Phone i.e 791827392"
              />
            </Grid>
            <Grid id="textFieldGrid">
              <TextField
                type="password"
                fullWidth
                id="textField"
                label="Password"
              />
            </Grid>

            <Grid id="textFieldGrid">
              <TextField
                type="password"
                fullWidth
                id="textField"
                label="Confirm Password"
              />
            </Grid>
            <br></br>

            <div id="loginButtonContainer">
             
            <Button
              id="registerButton"
              size="large"
              fullWidth
              variant="contained"
              color="primary"
            >
              Register
            </Button>
            </div>

           
          </form>
          <div id="centerDiv">
            <div id="horizontal"></div>
            <span>or</span>
            <div id="horizontal"></div>
          </div>
          <br></br>
          <center>
          <Link  id="registerAccount"to="/"> Already have an account? Login</Link>

            
          </center>
        </div>
      </LoginContainer>
    </div>
  );
}

export default Register;
