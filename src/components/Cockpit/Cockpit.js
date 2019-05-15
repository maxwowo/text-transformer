// React
import React from "react";

// Material UI components
import Grid from "@material-ui/core/Grid";

// Cockpit components
import InputBox from "./InputBox/InputBox";
import DisplayBox from "./DisplayBox/DisplayBox";

// Style tool
import { withStyles } from "@material-ui/core/styles";

// Constants
import { DRAWER_WIDTH } from "../../constants/styles";

const styles = theme => ({
  // Style for the navbar
  cockpit: {
    // Shift cockpit when viewport is small
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH
    },
    marginTop: "1rem"
  }
});

const Cockpit = props => (
  <Grid
    justify="center"
    container
    alignItems="center"
    className={props.classes.cockpit}
  >
    <Grid item xs={12}>
      <InputBox />
    </Grid>
    <Grid item xs={12}>
      <DisplayBox />
    </Grid>
  </Grid>
);

export default withStyles(styles)(Cockpit);
