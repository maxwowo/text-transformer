import React, { Component } from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Paper from "@material-ui/core/Paper";

import { BLOOD_TYPE_B, CLAP, HORN } from "../../../constants/processors";

import TextBox from "./TextBox/TextBox";
// Style tool
import { withStyles } from "@material-ui/core/styles";
// Constants
import { DISPLAY_PAPER_PADDING, PAPER_MARGIN_TOP, PAPER_WIDTH } from "../../../constants/styles";


const styles = theme => ({
  textPaper: {
    marginTop: PAPER_MARGIN_TOP,
    width: `calc(${PAPER_WIDTH} + ${2 * DISPLAY_PAPER_PADDING}px)`,
    margin: "auto"
  },
  optionsBar: {
    backgroundColor: "lightgrey",
    borderRadius: "inherit",
    width: "100%"
  }
});

class ProcessorOptions extends Component {
  state = {
    value: BLOOD_TYPE_B
  };

  handleOptionToggle = (event, val) => {
    this.setState({value: val});
  };

  render() {
    return (
      <Paper className={this.props.classes.textPaper} elevation={4}>
        <BottomNavigation value={this.state.value} onChange={this.handleOptionToggle}
                          className={this.props.classes.optionsBar}>
          <BottomNavigationAction value={BLOOD_TYPE_B} icon="🅱️"/>
          <BottomNavigationAction value={CLAP} icon="👏"/>
          <BottomNavigationAction value={HORN} icon="🎺"/>
        </BottomNavigation>

        <TextBox type={this.state.value} />
      </Paper>
    );
  }

}

export default withStyles(styles)(ProcessorOptions);