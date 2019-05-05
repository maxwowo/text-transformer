// React
import React from "react";

// Material UI components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// LeftBar components
import SideDrawer from "./SideDrawer/SideDrawer";

// LeftBar
const LeftBar = () => (
  <Grid item>
    <Grid justify="left" container alignItems="center">
      <SideDrawer />

      <Typography variant="h6" color="inherit">
        Text Generator
      </Typography>
    </Grid>
  </Grid>
);

export default LeftBar;
