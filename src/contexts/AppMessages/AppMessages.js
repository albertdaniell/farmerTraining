import React, { createContext, useState } from "react";

export const AppMessages = createContext();

export const AppMessagestProvider = (props) => {
  

  const [message,setMessage] = useState("");
  const [title,setTitle]=useState("");
  const [showMessage,setShowMesage]=useState(null)
  const [severity,setseverity]=useState("")
  const [canDismiss,setCanDissmiss]=useState(false);

  return (
    <AppMessages.Provider value={{ message,title,showMessage,setMessage,setTitle,setShowMesage,canDismiss,setCanDissmiss,setseverity }}>
      {props.children}
    </AppMessages.Provider>
  );
};
