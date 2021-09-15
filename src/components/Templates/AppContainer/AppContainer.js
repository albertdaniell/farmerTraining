import { Container, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import AppNav from "../AppNav/AppNav";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import "./AppContainer.css";
import Spacer from "../../organisims/Spacer/Spacer";
import AlertMessage from "../../organisims/AlertMessage/AlertMessage";
import { AppMessages } from "../../../contexts/AppMessages/AppMessages";

function AppContainer(props) {
  const { children } = props;
  const { message,title,showMessage,setMessage,setTitle,setShowMesage,setseverity }=useContext(AppMessages)


  return (
    <div>
      <AppNav></AppNav>
      <Spacer spacing={4} padding={1}></Spacer>
      <Container id="appContainerDiv" style={{}} maxWidth="md">
        <Grid container spacing={1}>
          <Grid item md={12} sm={12} xs={12}>
            <div className="alert animate__animated animate__pulse">

              {
                showMessage?
                <AlertMessage
         
              ></AlertMessage>
                :null
              }
          
            </div>

            <div className="col animate__animated animate__fadeIn">{children}  <Spacer spacing={2} padding={1}></Spacer></div>
          </Grid>
         
        </Grid>
      </Container>
    </div>
  );
}

export default AppContainer;
