// React
import React from "react";

// Material UI components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// Style tool
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  // Style for the page title
  title: {
    color: "#424242"
  }
});

// LeftBar
const LeftBar = props => (
  <Grid item>
    <Grid container alignItems="center">
      <Typography variant="h6" color="inherit" className={props.classes.title}>
        Text Transformer
      </Typography>
    </Grid>
  </Grid>
);

export default withStyles(styles)(LeftBar);
