import React from 'react';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles({  
  drawer: {
    width: 250,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 250,
  },
  toolbar: {
    minHeight: 56,
    '@media (min-width:0px) and (orientation: landscape)': {
      minHeight: 48,
    },
    '@media (min-width:600px)':{
      minHeight: 64,
    }
  }
});

export default function NavDrawer(props){
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button component={Link} to="/companies">
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary="Клиенты" />
        </ListItem>
        <ListItem 
          button 
          onClick={ props.logoutHandler }
        >
          <ListItemIcon><ExitToAppIcon/></ListItemIcon>
          <ListItemText primary="Выход" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
}