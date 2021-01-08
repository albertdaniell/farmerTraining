import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./NextPrevious.css";
import { useHistory } from "react-router-dom";

function NextPrevious(props) {
  let history = useHistory();
  return (
    <div id="nextPrevDiv">
      <Link>
        <Button
          onClick={() => history.goBack()}
          fullWidth
          id="prevButton"
          variant="outlined"
          color="primary"
        >
          Previous
        </Button>
      </Link>

      <Link to={props.to}>
        <Button fullWidth id="nextButton" variant="outlined" color="primary">
          Next
        </Button>{" "}
      </Link>
    </div>
  );
}

export default NextPrevious;
