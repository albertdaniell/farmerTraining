import { Switch } from "@material-ui/core";
import { Router } from "@material-ui/icons";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { AppMessages } from "../AppMessages/AppMessages";
import { IsLoadingContext } from "../IsLoading/IsLoading";
import { saveLocalStorageFn } from "../../services/saveLocalStorage";
import { CONTENT_URL, LOGIN_SUCCESS, SINGIN_URL, VC_URL } from "../../common/common/commonVariables";
import {
  AxiosGetService,
  AxiosPostService,
  AxiosPostService2,
} from "../../Servicescopy/AxiosServices";

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

  const [loginPhone, SetLoginPhone] = useState("254711301287");
  const [loginPassword, SetLoginPassword] = useState("1234567");

  const [userDetails, setUserDetails] = useState("");
  const [password, setPassword] = useState();
  const [isLoggedIn, setisloggedin] = useState(false);
  const [isLoadingOffline, setIsLoadingOffline] = useState(true);

  const [valuechains, setValueChains] = useState([]);
  const [valueChainDetail, setValueChainDetail] = useState([]);
  const [vcisLoading, setvcIsLoading] = useState(null);
  const [contentsFromVC, setContentsFromVC] = useState([]);


  const [isLoadingContent, setIsLoadingContent] = useState(null);

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

  const getContentFromVC = async (id, url = `${CONTENT_URL}`) => {
    // console.log("getting vc")
    try {
      setIsLoadingContent(true);
      const getRes = await AxiosGetService(`${url}?vcid=${id}`);
      const getResData = await getRes;
      // console.log(getResData.data);
      setContentsFromVC(getResData.data);
      setIsLoadingContent(false);
    } catch (e) {
      console.log(e);
      console.log(url);
      setContentsFromVC([]);

      setIsLoadingContent(false);
    }
  };

  const loginFunc = async (props) => {
    if (loginPhone === "") {
      alert("Phone should not be empty!");
      return 0;
    }

    // if(password !=="12345"){
    //   alert("Phone and Password is incorrect!")
    //   return 0;
    // }
    setIsLoading(true);
    let url1 = `https://kalro-farmers.herokuapp.com/`;
    let url2 = `http://127.0.0.1:4000/`;

    try {
      const postData = await AxiosPostService2(`${SINGIN_URL}`, {
        password: loginPassword,
        phone: loginPhone,
      });
      const resp = await postData;
      let data = await resp.data;

      let { user_data } = data;

      console.log(data);

      if ((await data.message) === LOGIN_SUCCESS) {
        setUserDetails(user_data);
        saveLocalStorageFn(user_data);
        setIsLoading(false);
        setisloggedin(true);
        setTitle("Success");
        setShowMesage(true);
        setMessage(`Welcome ${user_data.NameofFarmer}`);
        setseverity("success");
        setCanDissmiss(true);
      }
    } catch (e) {}

    return 0;

    setTimeout(() => {
      axios
        .get(`${url1}checkfarmers/`, {
          params: { "Phone No of the farmer": phone },
        })

        .then((res) => {
          let resultData = res.data[0].rows;

          if (resultData === null) {
            console.log("Data isnt available");
            alert("User Cannot be found");
            setIsLoading(false);
          } else {
            setUserDetails(resultData);
            saveLocalStorageFn(resultData);
            setIsLoading(false);
            setisloggedin(true);
            setTitle("Success");
            setShowMesage(true);

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

  const getValueChains = async () => {
    // console.log("getting vc")
    setvcIsLoading(true);
    setTimeout(async () => {
      try {
        const getRes = await AxiosGetService(`${VC_URL}`);
        const getResData = await getRes;
        setvcIsLoading(true);

          console.log(getResData);
        setValueChains(getResData.data);
        setvcIsLoading(false);
      } catch (e) {
        setValueChains([]);
        setvcIsLoading(false);
      }
    }, 500);
  };
  useEffect(() => {
    getOffline();
  }, []);

  useEffect(() => {
    getValueChains();
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
          setPassword,
          SetLoginPhone,
          SetLoginPassword,
          loginPhone,
          loginPassword,
          valuechains,
          valueChainDetail,
          vcisLoading,
          isLoadingContent,
          contentsFromVC,getContentFromVC
        }}
      >
        {props.children}
      </LoginContext.Provider>
    </>
  );
};
