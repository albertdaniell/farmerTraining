import {Grid } from "@material-ui/core";
import React from "react";
import "./CardMenuWrapper.css";

function CardMenuWrapper(props) {
  return (
    <div id="CardMenuWrapper">
      <Grid container>{props.children}</Grid>
    </div>
  );
}

export default CardMenuWrapper;
