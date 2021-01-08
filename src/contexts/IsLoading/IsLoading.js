import React, { createContext, useEffect, useState } from "react";

export const IsLoadingContext = createContext();

export const IsLoadingContextProvider = (props) => {
  const { children } = props;
  const [isLoading, setIsLoading] = useState(false);

  return (
    <IsLoadingContext.Provider value={{ setIsLoading, isLoading }}>
      {children}
    </IsLoadingContext.Provider>
  );
};
