import { Switch } from "@material-ui/core";
import { Router } from "@material-ui/icons";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { AppMessages } from "../AppMessages/AppMessages";
import { IsLoadingContext } from "../IsLoading/IsLoading";
import { saveLocalStorageFn } from "../../services/saveLocalStorage";

export const LoginContext = createContext();
const axios = require("axios");

export const LoginContextProvider = (props) => {
  const {
    message,
    title,
    showMessage,
    setMessage,
    setTitle,
    setShowMesage,
    setseverity,
    canDismiss,
    setCanDissmiss,
  } = useContext(AppMessages);
  const { setIsLoading, isLoading } = useContext(IsLoadingContext);
  const [phone, setPhone] = useState("");
  
  const [userDetails, setUserDetails] = useState("");
  const [password, setPassword] = useState();
  const [isLoggedIn, setisloggedin] = useState(false);
  const [isLoadingOffline, setIsLoadingOffline] = useState(true);
  let body = {
    FarmerMobileNumber: phone,
  };

  const getOffline = () => {
    const offlineData = localStorage.getItem("offlineUserData");
    if (offlineData === null) {
      setisloggedin(false);
      setIsLoadingOffline(false);
    } else {
      setisloggedin(true);
      setUserDetails(JSON.parse(offlineData));
      setIsLoadingOffline(false);
    }
 
  };

  const logOut = () => {
    setIsLoading(true);
    setTimeout(() => {
      setisloggedin(false);
      localStorage.removeItem("offlineUserData");
      setIsLoading(false);
    }, 1500);
  };

  const loginFunc = async (props) => {
    if(phone === ""){
      alert("Phone should not be empty!")
      return 0;
    }

    if(password !=="12345"){
      alert("Phone and Password is incorrect!")
      return 0;
    }
    setIsLoading(true);
   let url1=`https://kalro-farmers.herokuapp.com/`;
   let url2=`http://127.0.0.1:4000/`;

    setTimeout(() => {
      axios
        .get(`${url1}checkfarmers/`, {
          params:{"Phone No of the farmer":phone}
        })

        .then((res) => {

          let resultData=res.data[0].rows
          

          if(resultData === null){
            console.log("Data isnt available");
            alert("User Cannot be found");
            setIsLoading(false);
          }

          else{
            setUserDetails(resultData);
            saveLocalStorageFn(resultData);
            setIsLoading(false);
            setisloggedin(true);
            setTitle("Success");
            setShowMesage(true);
            setMessage("Welcome " + resultData["Farmers Name"] + "");
            setseverity("success");
            setCanDissmiss(true);
          }
          // if (res.data[0].rows[0] === null) {
          //   console.log("Data isnt available");
          //   alert("User Cannot be found");
          //   setIsLoading(false);
          // } else {
          //   setUserDetails(res.data[0].rows[0]);
            
            
          //   setIsLoading(false);
          //   setisloggedin(true);
          //   setTitle("Success");
          //   setShowMesage(true);
          //   setMessage("Welcome" + res.data[0].rows[0].NameofFarmer + "");
          //   setseverity("success");
          //   setCanDissmiss(true);
          // }
        })
        .catch((e) => console.log(e));
    }, 1000);
  };
  useEffect(() => {
    getOffline();

  }, []);
  return (
    <>
      {isLoggedIn ? (
        <Router>
          <Switch>
            <Redirect to="/HomePage"></Redirect>
          </Switch>
        </Router>
      ) : null}
      <LoginContext.Provider
        value={{
          loginFunc,
          phone,
          setPhone,
          isLoggedIn,
          userDetails,
          logOut,
          isLoadingOffline,
          setPassword
        }}
      >
        {props.children}
      </LoginContext.Provider>
    </>
  );
};
