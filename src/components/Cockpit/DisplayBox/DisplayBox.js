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
// Clipboard API
import { CopyToClipboard } from "react-copy-to-clipboard";

const styles = theme => ({
  displayBox: {
    width: `calc(${PAPER_WIDTH})`,
    margin: "auto",
    marginTop: PAPER_MARGIN_TOP,
    minHeight: "25vh",
    padding: DISPLAY_PAPER_PADDING,
    textAlign: "center",
    fontSize: "3rem",
    "&:hover": {
      cursor: "pointer"
    },
    userSelect: "none"
  }
});

const mapStateToProps = state => ({
  text: state.transformedText
});

const DisplayBox = props => (
  <CopyToClipboard text={props.text}>
    <Paper className={props.classes.displayBox} elevation={4}>
      <Typography variant="h2" color="inherit" className={props.classes.displayText}>
        {props.text}
      </Typography>
    </Paper>
  </CopyToClipboard>
);

export default connect(mapStateToProps)(withStyles(styles)(DisplayBox));