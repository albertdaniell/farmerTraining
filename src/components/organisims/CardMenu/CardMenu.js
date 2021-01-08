import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import DelayLink from "react-delay-link";

import "./CardMenu.css";
import { Link } from "react-router-dom";
import { HandleProfileMenu } from "../../../contexts/HandleProfileMenu/HandleProfileMenu";
import { HandleLeftDrawer } from "../../../contexts/HandleLeftDrawer/HandleLeftDrawer";

function CardMenu(props) {
  const { handleDrawerClose,open } = useContext(HandleLeftDrawer);
  return (
    <Grid item xs={props.xs}>
      {" "}
      <DelayLink  delay={100} to={props.to} id="cardMenuLink">
        <ToggleButton onClick={open?handleDrawerClose:null} id="toggleBtn">
          <div id="paper">
            <div id="paper-image">
              <img src={props.image}></img>
            </div>
            <span>{props.cardTitle}</span>
          </div>
        </ToggleButton>
      </DelayLink>
    </Grid>
  );
}

export default CardMenu;
