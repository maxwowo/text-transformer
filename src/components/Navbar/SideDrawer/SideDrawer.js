// React
import React, { Component } from "react";

// Material UI components
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";

// Constants
import { DRAWER_WIDTH } from "../../../constants";

// All the drawer items
import drawerItems from "./drawerItems";

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: DRAWER_WIDTH
    }
  },
  drawerPaper: {
    width: DRAWER_WIDTH
  }
});

class SideDrawer extends Component {
  state = {
    open: false
  };

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const sideList = (
      <List>
        {drawerItems.map((curr, i) => (
          <ListItem button key={i}>
            <ListItemIcon>{curr.icon}</ListItemIcon>
            <ListItemText primary={curr.text} />
          </ListItem>
        ))}
      </List>
    );

    return (
      <Hidden xsDown implementation="css">
        <Drawer
          className={this.props.classes.drawer}
          variant="permanent"
          classes={{
            paper: this.props.classes.drawerPaper
          }}
          anchor="left"
        >
          {sideList}
        </Drawer>
      </Hidden>
    );
  }
}

export default withStyles(styles)(SideDrawer);
