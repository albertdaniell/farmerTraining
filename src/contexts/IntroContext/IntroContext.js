import React, { createContext, useState } from "react";

export const IntroContext = createContext();

export const IntroContextProvider = (props) => {
  const { children } = props;
  const [isDoneIntro, setIsDoneIntro] = useState(false);

  return (
    <IntroContext.Provider value={{ isDoneIntro, setIsDoneIntro }}>
      {children}
    </IntroContext.Provider>
  );
};
