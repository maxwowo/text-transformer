// React
import React from "react";

// Material UI components
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

// Style tool
import { withStyles } from "@material-ui/core/styles";

// Input box components
import ProcessorOptions from "./ProcessorOptions/ProcessorOptions";

// Constants
import { DISPLAY_PAPER_PADDING, INPUT_TEXTFIELD_PADDING_TOP, PAPER_MARGIN_TOP, PAPER_WIDTH } from "../../../constants";

const styles = theme => ({
  textPaper: {
    marginTop: PAPER_MARGIN_TOP,
    width: `calc(${PAPER_WIDTH} + ${2 * DISPLAY_PAPER_PADDING}px)`,
    margin: "auto"
  },
  textField: {
    width: "100%"
  }
});

const InputBox = props => (
  <Paper className={props.classes.textPaper} elevation={4}>
    <ProcessorOptions/>
    <TextField
      id="outlined-multiline-static"
      multiline
      rows="10"
      className={props.classes.textField}
      inputProps={{
        style: {textAlign: "center", fontSize: "3rem", paddingTop: INPUT_TEXTFIELD_PADDING_TOP}
      }}
      autoFocus={true}
    />
  </Paper>
);

export default withStyles(styles)(InputBox);
