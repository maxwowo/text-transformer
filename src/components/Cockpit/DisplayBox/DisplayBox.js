// React
import React from "react";
import { connect } from "react-redux";
// Material UI components
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// Style tool
import { withStyles } from "@material-ui/core/styles";
// Constants
import { DISPLAY_PAPER_PADDING, PAPER_MARGIN_TOP, PAPER_WIDTH } from "../../../constants/styles";

const styles = theme => ({
  displayBox: {
    width: `calc(${PAPER_WIDTH})`,
    margin: "auto",
    marginTop: PAPER_MARGIN_TOP,
    minHeight: "25vh",
    padding: DISPLAY_PAPER_PADDING
  }
});

const mapStateToProps = state => ({
  text: state.text
});

const DisplayBox = props => {
  return <Paper className={props.classes.displayBox} elevation={4}>
    <Typography variant="h2" color="inherit" className={props.classes.displayText}>
      {props.text}
    </Typography>
  </Paper>;
};

export default connect(mapStateToProps)(withStyles(styles)(DisplayBox));