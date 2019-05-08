// React
import React from "react";
// Material UI components
import TextField from "@material-ui/core/TextField";
import Paper from '@material-ui/core/Paper';
// Style tool
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
  textPaper: {
    marginTop: "40px",
    width: "70%",
    margin: "auto",
    padding: 40
  },
  textField: {
    width: "100%"
  }
});

const InputBox = props => (
  <Paper className={props.classes.textPaper} elevation={4}>
    <TextField
      id="outlined-multiline-static"
      multiline
      rows="10"
      className={props.classes.textField}
      inputProps={{
        style: {textAlign: "center", fontSize: "3rem"}
      }}
      autoFocus={true}
    />
  </Paper>
);

export default withStyles(styles)(InputBox);
