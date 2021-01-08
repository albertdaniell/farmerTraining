import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import ForgotPass from "../components/pages/admin/ForgotPass/ForgotPass";
import Login from "../components/pages/admin/Login/Login";
import Register from "../components/pages/admin/Register/Register";
import ProfilePage from "../components/pages/ProfilePage/ProfilePage";
import HomePage from "../components/pages/HomePage/HomePage";
import Animals from "../components/pages/Animals/Animals";
import Test from "../components/pages/Animals/Test";
import About from "../components/pages/About/About";
import RegisterAnimals from "../components/pages/Animals/RegisterAnimals";
import Farm from "../components/pages/Farm/Farm";
import RecordFarmDetails from "../components/pages/Farm/RecordFarmDetails";
import RecordInsemination from "../components/pages/Animals/RecordInsemination";
import RecordCalving from "../components/pages/Animals/RecordCalving";
import TrainingRoomLanding from "../components/pages/TrainingRoom/TrainingRoomLanding/TrainingRoomLanding";
import GreenGramsMenuList from "../components/pages/TrainingRoom/GreenGrams/GreenGramsMenuList";
import GreenGramsChapters from "../components/pages/TrainingRoom/GreenGramsChapters/GreenGramsChapters";
import { LoginContext } from "../contexts/LoginContext/LoginContext";
import GreenGramsIntroduction from "../components/pages/TrainingRoom/GreenGrams/FactSheets/Introduction/GreenGramsIntroduction";
import GreenGramsVariety from "../components/pages/TrainingRoom/GreenGrams/FactSheets/GreenGramsVariety/GreenGramsVariety";
import GreenGramsPlanting from "../components/pages/TrainingRoom/GreenGrams/FactSheets/GreenGramsPlanting/GreenGramsPlanting";
import GreenGramsSoil from "../components/pages/TrainingRoom/GreenGrams/FactSheets/GreenGramsSoil/GreenGramsSoil";
import GreenGramsSoilFertitlity from "../components/pages/TrainingRoom/GreenGrams/FactSheets/GreenGramsSoilFertitlity/GreenGramsSoilFertitlity";
import GreenGramsRoutine from "../components/pages/TrainingRoom/GreenGrams/FactSheets/GreenGramsRoutine/GreenGramsRoutine";
import GreenGramsProtection from "../components/pages/TrainingRoom/GreenGrams/FactSheets/GreenGramsProtection/GreenGramsProtection";
import GreenGramsHarvest from "../components/pages/TrainingRoom/GreenGrams/FactSheets/GreenGramsHarvest/GreenGramsHarvest";
function Routes() {
  const { loginFunc, phone, setPhone,isLoggedIn } = useContext(LoginContext);
  return (
    <Router>
      <Switch>

        
       
        <Route exact path="/" component={isLoggedIn?HomePage:Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/forgotPassword" component={ForgotPass}></Route>
        {/* <Route path="/HomePage" component={HomePage}></Route> */}
        <Route path="/ProfilePage" component={!isLoggedIn?Login:ProfilePage}></Route>
        <Route path="/Farm" component={!isLoggedIn?Login:Farm}></Route>
        <Route path="/RecordFarm" component={!isLoggedIn?Login:RecordFarmDetails}></Route>

        <Route path="/TrainingPage" component={!isLoggedIn?Login:TrainingRoomLanding}></Route>
        <Route path="/GreengramsChapters" component={!isLoggedIn?Login:GreenGramsChapters}></Route>
        <Route path="/GreengramsIntro" component={!isLoggedIn?Login:GreenGramsIntroduction}></Route>
        <Route path="/GreengramsVariety" component={!isLoggedIn?Login:GreenGramsVariety}></Route>
        <Route path="/GreengramsPlanting" component={!isLoggedIn?Login:GreenGramsPlanting}></Route>
        <Route path="/GreengramsSoil" component={!isLoggedIn?Login:GreenGramsSoil}></Route>
        <Route path="/GreengramsSoilFertility" component={!isLoggedIn?Login:GreenGramsSoilFertitlity}></Route>
        <Route path="/GreengramsRoutine" component={!isLoggedIn?Login:GreenGramsRoutine}></Route>
        <Route path="/GreengramsProtection" component={!isLoggedIn?Login:GreenGramsProtection}></Route>
        <Route path="/GreengramsHarvest" component={!isLoggedIn?Login:GreenGramsHarvest}></Route>



  











        <Route path="/Test" component={Test}></Route>
        <Route path="/About" component={About}></Route>
      </Switch>
    </Router>
  );
}

export default Routes;
