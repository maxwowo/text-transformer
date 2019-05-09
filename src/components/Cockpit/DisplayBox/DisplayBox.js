// React
import React from "react";

// Material UI components
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

// Style tool
import { withStyles } from "@material-ui/core/styles";

// Constants
import { DISPLAY_PAPER_PADDING, PAPER_MARGIN_TOP, PAPER_WIDTH } from "../../../constants";

const styles = theme => ({
  displayBox: {
    width: `calc(${PAPER_WIDTH})`,
    margin: "auto",
    marginTop: PAPER_MARGIN_TOP,
    minHeight: "25vh",
    padding: DISPLAY_PAPER_PADDING
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