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

function FarmDetails() {
  const { userDetails } = useContext(LoginContext);
  const classes = useStyles();

  return (
    <div>
      <List>
      
      <Spacer spacing={1} padding={1}></Spacer>
        <strong>Land Ownership</strong>
        <ListItemText primary={userDetails["Farmerownership"]} />

        <Spacer spacing={1} padding={1}></Spacer>

        <Divider></Divider>
        <Spacer spacing={1} padding={1}></Spacer>
        <strong>Total Farm Size</strong>
        <ListItemText primary={userDetails[`Totalfarmsize`]} />
        <Spacer spacing={1} padding={1}></Spacer>
        <Divider></Divider>

        <Divider></Divider>
        <Spacer spacing={1} padding={1}></Spacer>
        <strong>County</strong>
        <ListItemText primary={userDetails[`County`]} />
        <Spacer spacing={1} padding={1}></Spacer>
        <Divider></Divider>


        <Divider></Divider>
        <Spacer spacing={1} padding={1}></Spacer>
        <strong>Sub County</strong>
        <ListItemText primary={userDetails[`Subcounty`]} />
        <Spacer spacing={1} padding={1}></Spacer>
        <Divider></Divider>

        <Divider></Divider>
        <Spacer spacing={1} padding={1}></Spacer>
        <strong>Ward</strong>
        <ListItemText primary={userDetails[`Ward`]} />
        <Spacer spacing={1} padding={1}></Spacer>
        <Divider></Divider>

        

        

        <Spacer spacing={1} padding={1}></Spacer>
        <strong>Latitude</strong>

        <ListItemText primary={userDetails[`farm_latitude`]} />
        <Spacer spacing={1} padding={1}></Spacer>
        <Divider></Divider>
        

        <Spacer spacing={1} padding={1}></Spacer>
        <strong>Longitude</strong>
        <ListItemText primary={userDetails["farm_longitude"]} />
        <Spacer spacing={1} padding={1}></Spacer>
         <Divider></Divider>
         <Spacer spacing={1} padding={1}></Spacer>

         <center>
             <Link to="/ProfilePage">
             <Button
          disableElevation
          id=""
          size="small"
          
          variant="contained"
          color="primary"
        >
          View Profile Details
        </Button>

             </Link>
       
         </center>

       
      </List>
    </div>
  );
}

export default FarmDetails;
