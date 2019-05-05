// React
import React, { Component } from "react";

// Material UI components
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// Icon
import MenuIcon from "@material-ui/icons/Menu";

// All the drawer items
import drawerItems from "./drawerItems";

const styles = {
  list: {
    width: 250
  }
};

class SideDrawer extends Component {
  state = {
    open: false
  };

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const sideList = (
      <div className={this.props.classes.list}>
        <List>
          {drawerItems.map((curr, i) => (
            <ListItem button key={i}>
              <ListItemIcon>{curr.icon}</ListItemIcon>
              <ListItemText primary={curr.text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <IconButton color="inherit" onClick={this.handleDrawerToggle}>
          <MenuIcon />
        </IconButton>

        <Drawer open={this.state.open} onClose={this.handleDrawerToggle}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.handleDrawerToggle}
            onKeyDown={this.handleDrawerToggle}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(SideDrawer);
