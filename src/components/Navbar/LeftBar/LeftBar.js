// React
import React from "react";

// Material UI components
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

// Icon
import MenuIcon from "@material-ui/icons/Menu";

// LeftBar
const LeftBar = () => (
  <Grid item>
    <Grid justify="left" container alignItems="center">
      <IconButton color="inherit">
        <MenuIcon />
      </IconButton>

      <Typography variant="h6" color="inherit">
        Text Generator
      </Typography>
    </Grid>
  </Grid>
);

export default LeftBar;
