// React
import React from "react";
// Material UI components
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
// Style tool
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
  displayBox: {
    width: "70%",
    margin: "auto",
    marginTop: "20px",
    minHeight: "25vh",
    padding: 40
  }
});

const DisplayBox = props => (
  <Paper className={props.classes.displayBox} elevation={4}>
    <Typography variant="h2" color="inherit" className={props.classes.displayText}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deleniti dolore illo
    </Typography>
  </Paper>
);

export default withStyles(styles)(DisplayBox);