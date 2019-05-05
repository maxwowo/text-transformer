// React
import React from "react";

// Material UI components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

// Navbar components
import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./RightBar/RightBar";
import SideDrawer from "./SideDrawer/SideDrawer";

// Style tool
import { withStyles } from "@material-ui/core/styles";

// Constants
import { DRAWER_WIDTH } from "../../constants";

const styles = theme => ({
  // Style for the navbar
  navbar: {
    // Make navbar full size when viewport is small
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH
    }
  }
});

// Navbar
const Navbar = props => (
  <AppBar position="static" color="inherit" className={props.classes.navbar}>
    <Toolbar>
      <Grid justify="space-between" container alignItems="center">
        <LeftBar />
        <SideDrawer />
        <RightBar />
      </Grid>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Navbar);
