import React, { useContext, useEffect } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { AppMessages } from "../../../contexts/AppMessages/AppMessages";
import { Button } from "@material-ui/core";

function AlertMessage(props) {
  const {
    message,
    title,
    showMessage,
    setMessage,
    setTitle,
    setShowMesage,
    severity,
    canDismiss,
  } = useContext(AppMessages);
  useEffect(() => {
    // setTimeout(() => {
    //   setShowMesage(false)
    // }, 10000);
  }, []);
  return (
    <div>
      <Alert severity={severity}>
        <AlertTitle style={{ fontWeight: "bold" }}>{title}</AlertTitle>
        {message} <br></br> <br></br>
        {canDismiss ? (
          <Button
            size="small"
            disableElevation
            onClick={() => setShowMesage(false)}
            variant="contained"
            color="default"
          >
            Dismiss
          </Button>
        ) : null}
      </Alert>
    </div>
  );
}

export default AlertMessage;
