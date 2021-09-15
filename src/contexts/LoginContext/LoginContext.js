import { Switch } from "@material-ui/core";
import { Router } from "@material-ui/icons";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { AppMessages } from "../AppMessages/AppMessages";
import { IsLoadingContext } from "../IsLoading/IsLoading";
import { saveLocalStorageFn } from "../../services/saveLocalStorage";
import {
  CONTENT_URL,
  LOGIN_SUCCESS,
  SINGIN_URL,
  VC_URL,
} from "../../common/common/commonVariables";
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

  const [userDetails, setUserDetails] = useState({
    id: 618,
    NameofFarmer: "Julia Simiyu",
    Agebracket: "46-65 yrs",
    FarmerMobileNumber: null,
    education: null,
    Totalfarmsize: "0.5",
    Farmerownership: "Inheritance",
    Gender: "F",
    Phone: "254711301287",
    GPSfarm: null,
    farm_latitude: "0.4758468",
    farm_longitude: "34.19916",
    County: "Busia",
    Subcounty: "Teso South",
    Ward: "Chakol South",
    Apiculture: "0",
    Aquaculture: "0",
    Avocado: "0",
    Banana: "0",
    Beans: "1",
    BeefCattle: "0",
    Butternuts: "0",
    Cabbages: "0",
    CashewNuts: "0",
    Cassava: "1",
    Coconut: "0",
    Coffee: "0",
    ComercialPeas: "0",
    Cotton: "0",
    Cowpea: "0",
    DairyGoat: "0",
    Dolichos: "0",
    Donkey: "0",
    FarmYardManure: "0",
    Fodder: "0",
    Goats: "0",
    GreenGrams: "0",
    Herbs: "0",
    IndigineousVegetables: "0",
    IrishPotatoes: "0",
    Kale: "0",
    Macadamia: "0",
    Maize: "1",
    Mangoes: "0",
    Millet: "0",
    Miraa: "0",
    Mushroom: "0",
    Onion: "0",
    Oranges: "0",
    Pearlmillet: "0",
    PigeonPea: "0",
    Pigs: "0",
    Rabbitrearing: "0",
    Rice: "0",
    Seaweed: "0",
    Sericulture: "0",
    Sheep: "0",
    Sorghum: "0",
    Soyabean: "0",
    Sugarcane: "0",
    SweetPotatoes: "0",
    Tea: "0",
    Tobacco: "0",
    Tomatoes: "0",
    Trees: "0",
    Watermelon: "0",
    Woodlot: "0",
    Yams: "0",
    password: "1234567",
    date_added: "2021-09-15T03:57:41.996161Z",
    date_updated: "2021-09-15T03:57:41.996195Z",
  });
  const [password, setPassword] = useState();
  const [isLoggedIn, setisloggedin] = useState(true);
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
          contentsFromVC,
          getContentFromVC,
        }}
      >
        {props.children}
      </LoginContext.Provider>
    </>
  );
};
