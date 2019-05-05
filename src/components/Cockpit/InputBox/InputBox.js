// React
import React from "react";

// Material UI components
import TextField from "@material-ui/core/TextField";

// Style tool
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    width: "80%"
  }
});

const InputBox = props => (
  <TextField
    id="outlined-multiline-static"
    label="Multiline"
    multiline
    rows="15"
    className={props.classes.textField}
    variant="outlined"
    inputProps={{
      style: { textAlign: "center" }
    }}
  />
);

export default withStyles(styles)(InputBox);
