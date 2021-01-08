import React from "react";
import LoginContainer from "../../../Templates/LoginContainer/LoginContainer";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import AppLoginLogo from "../../../organisims/AppLoginLogo/AppLoginLogo";
function ForgotPass() {


  return (
    <div>
      

        <LoginContainer>
        <div id="loginForm">
        <AppLoginLogo name="Crop Phenology App" textAlign="center" pageTitle=" Forgot Password "></AppLoginLogo>
          {/* <Typography variant="h5">
            Forgot Password <LockIcon></LockIcon>
          </Typography>{" "} */}
          <small>Kindly enter the phone number you used to register an account, and we will send a confirmation SMS.</small>
          <br></br>
          <form>
            <Grid id="textFieldGrid">
              <TextField
                type="number"
                fullWidth
                id="textField"
                label="Phone number i.e 791827382"
              />
            </Grid>
            
            <br></br>

            <div id="loginButtonContainer">
              <div id="forgotPassDiv">
          <Link  id="" to="/">Return to Sign In</Link>

                
              </div>
            <Button
              id="loginButton"
              size="large"
              fullWidth
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
            </div>

           
          </form>
       
        </div>
      </LoginContainer>
        
      
     
    </div>
  );
}

export default ForgotPass;
