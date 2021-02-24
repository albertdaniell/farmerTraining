import React, { useContext, useEffect } from "react";
import LoginContainer from "../../../Templates/LoginContainer/LoginContainer";
import TextField from "@material-ui/core/TextField";

import "./Login.css";
import { Button, Grid } from "@material-ui/core";
import { IntroContext } from "../../../../contexts/IntroContext/IntroContext";
import SwipableWrap from "../../../Templates/Swipables/SwipableWrap";
import { Link, Redirect } from "react-router-dom";
import AppLoginLogo from "../../../organisims/AppLoginLogo/AppLoginLogo";
import { LoginContext } from "../../../../contexts/LoginContext/LoginContext";
import { SettingsApplicationsSharp } from "@material-ui/icons";
function Login() {
  const { loginFunc, phone, setPhone,isLoggedIn,isLoadingOffline,setPassword } = useContext(LoginContext);

  const { isDoneIntro, setIsDoneIntro} = useContext(IntroContext);
  
  return (
    <div>
      {!isLoadingOffline
      
      ?
      <LoginContainer>
        <div id="loginForm">
          <AppLoginLogo
            name="Crop Phenology App"
            textAlign="center"
            pageTitle="Login"
          ></AppLoginLogo>

          <br></br>
          <form>
            <Grid id="textFieldGrid">
              <TextField
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                variant="outlined"
                type="number"
                fullWidth
                id="textField"
                label="Phone number, start with i.e 791827382"
              />
            </Grid>
            <Grid id="textFieldGrid">
              <TextField
              onChange={(e)=>setPassword(e.target.value)}
              variant="outlined"
                type="password"
                fullWidth
                id="textField"
                label="Password"
              />
            </Grid>
            <br></br>

            <div id="loginButtonContainer">
              {/* <div id="forgotPassDiv">
                <Link id="" to="/forgotPassword">
                  Forgot Password
                </Link>
              </div> */}

              <Button
                id="loginButton"
                size="large"
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => loginFunc()}
              >
                Login
              </Button>
            </div>
          </form>
          {/* <div id="centerDiv">
            <div id="horizontal"></div>
            <span>or</span>
            <div id="horizontal"></div>
          </div>
          <br></br> */}
          {/* <center>
            <Link id="registerAccount" to="/register">
              Register for an account
            </Link> 
            <br></br> <br></br>
             <Link  id="" to="/HomePage">Go to Home Direct</Link>
          </center> */}
        </div>
      </LoginContainer>
      :null}
     
      
    </div>
  );
}

export default Login;
