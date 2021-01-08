import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

function Spacer(props) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      margin: {
        margin: theme.spacing(props.spacing),
        padding: props.padding,
    
      },
    })
  );
  const classes = useStyles();

  return <div className={classes.margin}></div>;
}

export default Spacer;
