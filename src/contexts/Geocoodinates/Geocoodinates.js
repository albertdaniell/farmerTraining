import React, { createContext, useEffect, useState } from "react";

export const GeocoodinatesContext = createContext();

export const GeocoodinatesContextProvider = (props) => {
  const { children } = props;
  const [lat,setLat]=useState();
  const [long,setLong]=useState();

  const getCoordinates=()=>{
    navigator.geolocation.getCurrentPosition((res) => {
   
        let latitude = res.coords.latitude;
        let longitude = res.coords.longitude;
        setLat(latitude);
        setLong(longitude);
  
      });
  }


  useEffect(() => {
  getCoordinates();
  }, []);

  return (
    <GeocoodinatesContext.Provider value={{ lat, long,getCoordinates }}>
      {children}
    </GeocoodinatesContext.Provider>
  );
};
