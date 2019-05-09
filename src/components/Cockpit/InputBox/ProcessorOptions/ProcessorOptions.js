// React
import React, { Component } from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FolderIcon from "@material-ui/icons/Folder";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  optionsBar: {
    backgroundColor: "lightgrey",
    borderRadius: "inherit",
    width: "100%"
  }
});

class ProcessorOptions extends Component {
  state = {
    value: "recents"
  };

  handleOptionToggle = (event, val) => {
    this.setState({value: val});
  };

  render() {
    return (
      <BottomNavigation value={this.state.value} onChange={this.handleOptionToggle}
                        className={this.props.classes.optionsBar}>
        <BottomNavigationAction value="recents" icon={<RestoreIcon/>}/>
        <BottomNavigationAction value="favorites" icon={<FavoriteIcon/>}/>
        <BottomNavigationAction value="nearby" icon={<LocationOnIcon/>}/>
        <BottomNavigationAction value="folder" icon={<FolderIcon/>}/>
      </BottomNavigation>
    );
  }

}

export default withStyles(styles)(ProcessorOptions);