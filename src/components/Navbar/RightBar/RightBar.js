// React
import React from "react";

// Material UI components
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// RightBar
const RightBar = () => (
  <Grid item>
    <IconButton color="inherit">
      <FontAwesomeIcon icon={faGithub} />
    </IconButton>
  </Grid>
);

export default RightBar;
