// React
import React from "react";
import { connect } from "react-redux";

// Material UI components
import TextField from "@material-ui/core/TextField";

// Style tool
import { withStyles } from "@material-ui/core/styles";

// Constants
import { INPUT_TEXTFIELD_PADDING_TOP } from "../../../../constants/styles";
import { GENERATE } from "../../../../constants/actions";

const styles = theme => ({
  textField: {
    width: "100%"
  }
});

const mapDispatchToProps = dispatch => ({
  OnTextChanged: (text, processor) => dispatch({text: text, type: GENERATE, processor: processor})
});

const InputBox = props => {
  const numRows = Math.floor(window.innerHeight / 90);

  return (
    <TextField
      id="outlined-multiline-static"
      multiline
      rows={numRows}
      className={props.classes.textField}
      inputProps={{
        style: {textAlign: "center", fontSize: "3rem", paddingTop: INPUT_TEXTFIELD_PADDING_TOP}
      }}
      autoFocus={true}
      onChange={e => {
        props.OnTextChanged(e.target.value, props.type);
      }}
    />
  );
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(InputBox));
