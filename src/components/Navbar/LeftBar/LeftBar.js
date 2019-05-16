// React
import React from "react";

// React router
import { Link } from "react-router-dom";

// Material UI components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// Style tool
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({

  // Style for the page title
  titleLink: {
    color: "#424242"
  }
});

// LeftBar
const LeftBar = props => (
  <Grid item>
    <Grid container alignItems="center">
      <Typography variant="h6" color="inherit" className={props.classes.title}>
        <Link to="/" className={props.classes.titleLink}>Text Transformer</Link>
      </Typography>
    </Grid>
  </Grid>
);

export default withStyles(styles)(LeftBar);
