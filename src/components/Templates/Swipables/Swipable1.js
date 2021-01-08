import { Button } from "@material-ui/core";
import React from "react";

function Swipable1(props) {
    const { setIsDoneIntro } = props;

  return <div class ="slide slide1">
      <h2>
      Welcome to AI Cattle App
      </h2>

      Some text goes here

      <Button
        id="getStarted"
        size="large"
        variant="contained"
        color="primary"
        onClick={() => setIsDoneIntro(true)}
      >
        Let's Get Started
      </Button>
  </div>;
}

export default Swipable1;
