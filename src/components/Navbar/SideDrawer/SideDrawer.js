// React
import React from "react";

// React router
import { Link } from "react-router-dom";

// Material UI components
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";

// Constants
import { DRAWER_WIDTH } from "../../../constants/styles";

// All the drawer items
import drawerItems from "./drawerItems";

const styles = theme => ({
  // Hide the drawer when the viewport is small
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: DRAWER_WIDTH
    }
  },
  drawerPaper: {
    width: DRAWER_WIDTH
  }
});

const SideDrawer = props => {

  const sideList = (
    <List>
      {drawerItems.map((curr, i) => (
        <Link to={curr.link}>
          <ListItem button key={i}>
            <ListItemIcon>{curr.icon}</ListItemIcon>
            <ListItemText primary={curr.text} primaryTypographyProps={{"variant": "button"}}/>
          </ListItem>
        </Link>
      ))}
    </List>
  );

  return (
    <Hidden xsDown implementation="css">
      <Drawer
        className={props.classes.drawer}
        variant="permanent"
        classes={{
          paper: props.classes.drawerPaper
        }}
        anchor="left"
      >
        {sideList}
      </Drawer>
    </Hidden>
  );
};

export default withStyles(styles)(SideDrawer);
