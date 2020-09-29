import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = {
  root: {
    background: "black"
  },
  input: {
    color: "Red"
  }
};

function CustomizedInputs(props) {
  const { classes } = props;

  return (
    <TextField
      defaultValue="color"
      className={classes.root}
      InputProps={{
        className: classes.input
      }}
    />
  );
}