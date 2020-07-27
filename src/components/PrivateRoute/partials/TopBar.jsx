import React from "react";
import { AppBar } from "@material-ui/core";

const TopBar = (props) => {
  return (
    <AppBar position="fixed" className={props.klass}>
      { props.children }
    </AppBar>
  )
};

export default TopBar;