// React
import React from "react";

// Material UI components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

// Custom components
import Navbar from "../Navbar/Navbar";

// Constants
import { DRAWER_WIDTH } from "../../constants/styles";

const styles = theme => ({
  // Style for the navbar
  paragraph: {
    // Shift cockpit when viewport is small
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH
    },
    marginTop: "5rem"
  }
});

const AboutPage = props => (
  <div>
    <Navbar/>
    <Grid container className={props.classes.paragraph} justify="center">
      <Typography variant="h3" color="inherit">😢Ironman dies😔</Typography>
    </Grid>
  </div>
);

export default withStyles(styles)(AboutPage);