import React from "react";
import { Toolbar, Typography, Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

const TopBarContent = (props) => {
  return (
    <Toolbar 
      // gutters="0"
      style={{ display: "flex", justifyContent: "space-between"}}
    >
      <Typography 
        variant="h6" 
        noWrap
        style={{ paddingLeft: 0, color: "black"}}
      >
        Компании
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        // className={classes.button}
        startIcon={<AddIcon />}
      >
        Добавить
      </Button>
    </Toolbar>
  )
};

export default TopBarContent;