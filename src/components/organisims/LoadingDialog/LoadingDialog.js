import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  LinearProgress,
} from "@material-ui/core";
import React from "react";

function LoadingDialog() {
  return (
    <div>
      <Dialog aria-labelledby="simple-dialog-title" open={true}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        <center>
        <CircularProgress size={30} color="inherit" /></center> <br></br> Please wait...
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default LoadingDialog;
