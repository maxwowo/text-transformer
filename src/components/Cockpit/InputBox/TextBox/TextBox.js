// React
import React from "react";
import { connect } from "react-redux";
// Material UI components
import Input from "@material-ui/core/Input";
// Style tool
import { withStyles } from "@material-ui/core/styles";
// Constants
import { MIN_BOX_HEIGHT } from "../../../../constants/styles";
import { GENERATE } from "../../../../constants/actions";

const styles = theme => ({
  textField: {
    width: "100%",
    height: MIN_BOX_HEIGHT
  }
});

const mapDispatchToProps = dispatch => ({
  OnTextChanged: (text, processor) => dispatch({text: text, type: GENERATE, processor: processor})
});

const InputBox = props => (
  <Input
    autoFocus={true}
    onChange={e => {
      props.OnTextChanged(e.target.value, props.type);
    }}
    inputProps={{
      style: {textAlign: "center", fontSize: "3rem"}
    }}
    className={props.classes.textField}
  />
);

export default connect(null, mapDispatchToProps)(withStyles(styles)(InputBox));
