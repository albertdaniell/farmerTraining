import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import React, { useContext } from "react";
import { LoginContext } from "../../../contexts/LoginContext/LoginContext";
import Divider from "@material-ui/core/Divider";
import Spacer from "../../organisims/Spacer/Spacer";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

function ProfileDetails() {
  const { userDetails } = useContext(LoginContext);
  const classes = useStyles();

  return (
    <div>
      <List>
        <Divider></Divider>

      <Spacer spacing={1} padding={1}></Spacer>
        <strong>Farmer Name</strong>
        <ListItemText primary={userDetails["Farmers Name"]} />

        <Spacer spacing={1} padding={1}></Spacer>
        <Divider></Divider>
        <Spacer spacing={1} padding={1}></Spacer>
        <strong>Phone Number</strong>

        <ListItemText primary={userDetails[`Phone No of the farmer`]} />
        <Spacer spacing={1} padding={1}></Spacer>
        <Divider></Divider>

        <Spacer spacing={1} padding={1}></Spacer>
        <strong>Age</strong>
        <ListItemText primary={userDetails["Age"]} />
        <Spacer spacing={1} padding={1}></Spacer>
         <Divider></Divider>
         <Spacer spacing={1} padding={1}></Spacer>

         <center>
         <Link to="/Farm">
         <Button
          disableElevation
          id=""
          size="small"
          
          variant="contained"
          color="primary"
        >
          View Farm Details
        </Button>
         </Link>
         </center>

       
      </List>
    </div>
  );
}

export default ProfileDetails;
