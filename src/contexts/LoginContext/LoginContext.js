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
  const [phone, setPhone] = useState("726488286");
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
    setIsLoading(true);
   
    setTimeout(() => {
      axios
        .get(`https://kalro-farmers.herokuapp.com/farmers/${phone}`, {
          params: body,
        })

        .then((res) => {
          console.log("results...", res.data[0].rows[0].NameofFarmer);
          setUserDetails(res.data[0].rows[0]);
          saveLocalStorageFn(res.data[0].rows[0]);
          if (res.data[0].rows[0] === undefined) {
            console.log("Data isnt available");
            alert("User Cannot be found");
            setIsLoading(false);
          } else {
            setUserDetails(res.data[0].rows[0]);
            
            
            setIsLoading(false);
            setisloggedin(true);
            setTitle("Success");
            setShowMesage(true);
            setMessage("Welcome" + res.data[0].rows[0].NameofFarmer + "");
            setseverity("success");
            setCanDissmiss(true);
          }
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
        }}
      >
        {props.children}
      </LoginContext.Provider>
    </>
  );
};
