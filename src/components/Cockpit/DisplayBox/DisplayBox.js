// React
import React, { Component } from "react";
import { connect } from "react-redux";
// Material UI components
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
// Style tool
import { withStyles } from "@material-ui/core/styles";
// Constants
import { DISPLAY_PAPER_PADDING, BOX_HEIGHT, DISPLAY_PAPER_BOTTOM_MARGIN, PAPER_WIDTH } from "../../../constants/styles";
// Clipboard API
import { CopyToClipboard } from "react-copy-to-clipboard";

const styles = theme => ({
  displayPaper: {
    width: `calc(${PAPER_WIDTH})`,
    margin: "auto",
    minHeight: BOX_HEIGHT,
    padding: DISPLAY_PAPER_PADDING,
    textAlign: "center",
    fontSize: "3rem",
    "&:hover": {
      cursor: "pointer"
    },
    userSelect: "none",
    display: "flex",
    marginBottom: DISPLAY_PAPER_BOTTOM_MARGIN
  },
  close: {
    padding: theme.spacing.unit / 2
  },
  displayText: {
    margin: "auto",
    lineHeight: "inherit"
  }
});

const mapStateToProps = state => ({
  text: state.transformedText
});

class DisplayBox extends Component {
  state = {
    clipboardBarOpen: false
  };

  handleClick = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <CopyToClipboard text={this.props.text}>
          <Paper className={this.props.classes.displayPaper} elevation={4} onClick={this.handleClick}>
            <Typography variant="h3" color="inherit" className={this.props.classes.displayText} noWrap>
              {this.props.text}
            </Typography>
          </Paper>
        </CopyToClipboard>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={<span id="message-id">Copied to clipboard</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={this.props.classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon/>
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(DisplayBox));