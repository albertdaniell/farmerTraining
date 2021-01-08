import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
  backgroundColor:'red'
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Test() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container>
      <Grid item md={12} sm={12} xs={12}>
        <Grid container  spacing={spacing}>
         
            <Grid item md={6} sm={6} xs={12}>
              <Paper className={classes.paper}>
              aa
                  </Paper>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Paper className={classes.paper}>
              aa
                  </Paper>
            </Grid>
        </Grid>
      </Grid>
     
    </Grid>
  );
}
