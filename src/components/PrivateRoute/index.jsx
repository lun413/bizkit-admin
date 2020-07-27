import React from "react";
import {
  Route,
  Redirect
} from "react-router-dom";
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Navigation from './partials/NavDrawer';
import TopBar from "./partials/TopBar";

const styles = makeStyles({
  appBar: {
    paddingLeft: 69,
    paddingRight: 78,
    width: `calc(100% - ${250}px)`,
    marginLeft: 250,
    backgroundColor: "#FFFFFF"
  },
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingLeft: 69,
    paddingRight: 78,
    minHeight: 56,
    '@media (min-width:0px) and (orientation: landscape)': {
      minHeight: 48,
    },
    '@media (min-width:600px)':{
      minHeight: 64,
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingLeft: 69,
    paddingRight: 78,
  },
});

const PrivateRoute = ({ logoutHandler, isLoggedIn, children, topBarContent, ...props }) => {
  const classes = styles();
  return (
    <Route {...props}>
      {
        isLoggedIn ? (
          <div className={classes.root} >
            <CssBaseline />
            <TopBar klass={classes.appBar}>
              { topBarContent }
            </TopBar>
            <Navigation logoutHandler={ logoutHandler } />
            <main className={classes.content}>
              <div className={classes.toolbar}></div>              
              { children }
            </main>
          </div>
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    </Route>
  )
}

export default PrivateRoute;