// React
import React from "react";

// Material UI components
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Style tool
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  // Style for the Github icon
  githubIcon: {
    fontSize: "2rem"
  }
});

// RightBar
const RightBar = props => (
  <Grid item>
    <IconButton color="inherit">
      <FontAwesomeIcon icon={faGithub} className={props.classes.githubIcon} />
    </IconButton>
  </Grid>
);

export default withStyles(styles)(RightBar);
