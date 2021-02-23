import React from "react";
import CardMenu from "../../organisims/CardMenu/CardMenu";
import AppContainer from "../../Templates/AppContainer/AppContainer";
import CardMenuWrapper from "../../Templates/CardMenu/CardMenuWrapper";
import profileImage from '../../../assets/images/icons8-farmer-64.png'
import feedbackImage from '../../../assets/images/icons8-feedback-100.png'
import farmImage from '../../../assets/images/icons8-farm-100.png'
import trainingImage from '../../../assets/images/icons8-training-100.png';
import cropImage from '../../../assets/images/icons8-barley-100.png'


import "./HomePage.css";
function HomePage() {
  return (
    <div>
      <AppContainer>
       
        <div id="desktopCards">
          <CardMenuWrapper>
            <CardMenu image={trainingImage} xs="4" to='/TrainingPage'  cardTitle="Training"></CardMenu>
            <CardMenu image={profileImage} xs="4" to='/ProfilePage'  cardTitle="Profile"></CardMenu>
            <CardMenu image={farmImage} xs="4" to="/Farm" cardTitle="Farm"></CardMenu>
            <CardMenu image={cropImage} xs="4" to="/ValueChains" cardTitle="Value Chains"></CardMenu>

            <CardMenu image={feedbackImage}  xs="4" cardTitle="Feedback"></CardMenu>

          </CardMenuWrapper>
        </div>

        <div id="mobileCards">
          <CardMenuWrapper>
            <CardMenu image={trainingImage} xs="6" to='/TrainingPage'  cardTitle="Training"></CardMenu>
            <CardMenu image={profileImage} xs="6" to='/ProfilePage'  cardTitle="Profile"></CardMenu>
            <CardMenu image={farmImage} xs="6" to="/Farm" cardTitle="Farm"></CardMenu>
            <CardMenu image={cropImage} xs="6" to="/ValueChains" cardTitle="Value Chains"></CardMenu>

            <CardMenu image={feedbackImage} xs="6" to="#" cardTitle="Feedback"></CardMenu>

          </CardMenuWrapper>
        </div>
      </AppContainer>
    </div>
  );
}

export default HomePage;
