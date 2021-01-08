import { Button } from "@material-ui/core";
import React from "react";

function Swipable3(props) {
  const { setIsDoneIntro } = props;
  return (
    <div class="slide slide3">
      <Button
        id="getStarted2"
        size="large"
        variant="contained"
        color="primary"
        onClick={() => setIsDoneIntro(true)}
      >
        Let's Get Started
      </Button>
    </div>
  );
}

export default Swipable3;
