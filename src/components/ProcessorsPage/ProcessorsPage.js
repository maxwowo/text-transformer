// React
import React from "react";

// Material UI components
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

// Custom components
import Navbar from "../Navbar/Navbar";

// Constants
import { DRAWER_WIDTH } from "../../constants/styles";

const styles = theme => ({
  // Style for the navbar
  content: {
    // Shift cockpit when viewport is small
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${DRAWER_WIDTH}px - 5rem)`,
      marginLeft: `calc(${DRAWER_WIDTH}px + 5rem)`
    },
    marginTop: "4rem"
  }
});

const ProcessorsPage = props => (
  <div>
    <Navbar/>
    <div className={props.classes.content}>
      <Typography variant="h6" color="inherit" paragraph>🅱️ Blood type B: Turns every b or B in the sentence into the
        emoji</Typography>
      <Typography variant="h6" color="inherit" paragraph>👏 Clap: Turns every space into the emoji</Typography>
      <Typography variant="h6" color="inherit" paragraph>🎺 Trumpet: Adds spaces in between the characters and adds the
        emoji in front of and after the sentence</Typography>
      <Typography variant="h6" color="inherit" paragraph>👌 Ok: Randomly makes every character uppercase or
        lowercase, does not make the i character uppercase</Typography>
    </div>
  </div>
);

export default withStyles(styles)(ProcessorsPage);