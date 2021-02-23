import { Avatar } from "@material-ui/core";
import React, { useContext } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import image from "../../../assets/images/cow.jpg";
import "./ProfileImage.css";
import { LoginContext } from "../../../contexts/LoginContext/LoginContext";
import { Alert } from "@material-ui/lab";

function ProfileImage(props) {
  const {userDetails}=useContext(LoginContext);
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      profileImg: {
        height: props.height,
        width: props.width,
        marginTop:props.marginTop,
        backgroundColor:props.bg,
        color:props.color
      },
    })
  );
  const classes = useStyles();
  return (
    <div>
      <center>
        {
          userDetails.length === 0?null:
  <Avatar className={classes.profileImg}>{userDetails["Farmers Name"][0]}</Avatar>

        }
      </center>
    </div>
  );
}

export default ProfileImage;
