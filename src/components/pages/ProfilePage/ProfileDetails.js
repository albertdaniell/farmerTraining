import { List, ListItem, ListItemText } from "@material-ui/core";
import React, { useContext } from "react";
import { LoginContext } from "../../../contexts/LoginContext/LoginContext";
import { makeStyles } from "@material-ui/core/styles";

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
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemText>
              <strong>Farmer Name</strong>
          </ListItemText>
          <ListItemText primary={userDetails["Farmers Name"]} />
        </ListItem>

        <ListItem alignItems="flex-start">
          <ListItemText>
              <strong>Phone Number</strong>
          </ListItemText>
          <ListItemText primary={userDetails[`Phone No of the farmer`]} />
        </ListItem>

        <ListItem alignItems="flex-start">
          <ListItemText>
              <strong>Education</strong>
          </ListItemText>
          <ListItemText primary={userDetails["Education level"]} />
        </ListItem>

        <ListItem alignItems="flex-start">
          <ListItemText>
              <strong>Age</strong>
          </ListItemText>
          <ListItemText primary={userDetails["Age"]} />
        </ListItem>
      </List>

    
    </div>
  );
}

export default ProfileDetails;
