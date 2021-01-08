import { Typography } from "@material-ui/core";
import React from "react";
import AlertMessage from "../../organisims/AlertMessage/AlertMessage";
import CardMenu from "../../organisims/CardMenu/CardMenu";
import ProfileForm from "../../organisims/ProfileForm/ProfileForm";
import AppContainer from "../../Templates/AppContainer/AppContainer";
import CardMenuWrapper from "../../Templates/CardMenu/CardMenuWrapper";
import Divider from "@material-ui/core/Divider";

import "./ProfilePage.css";
import Spacer from "../../organisims/Spacer/Spacer";
import ProfileImage from "../../organisims/ProfileImage/ProfileImage";
function ProfilePage() {
  return (
    <div>
      <AppContainer>
        <Spacer spacing={2} padding={1}></Spacer>
        <Typography variant="h5">Profile</Typography> <Divider></Divider>
        <ProfileImage bg='black' color='white' marginTop={20} height={80} width={80}></ProfileImage>
        <ProfileForm></ProfileForm>
      </AppContainer>
    </div>
  );
}

export default ProfilePage;
