// React
import React from "react";

// Material UI components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

// Navbar components
import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./RightBar/RightBar";

// Navbar
const Navbar = () => (
  <AppBar position="static" color="inherit">
    <Toolbar>
      <Grid justify="space-between" container alignItems="center">
        <LeftBar />
        <RightBar />
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Navbar;
