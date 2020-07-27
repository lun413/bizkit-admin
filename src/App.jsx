import React from 'react';
import axios from 'axios';
import './App.css';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LoginPage from './pages/login';
import CompaniesPage from 'pages/companies';
import PrivateRoute from 'components/PrivateRoute/index'
import CompaniesTopBarContent from 'components/companies/TopBarContent';

// TODO use Context for auth process, login check, rm prop drills
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: !!localStorage.getItem('access'),
    }
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  // passed as prop
  handleAuth(email, password){
    // TODO add expire check
    const API_URL = process.env.REACT_APP_API_URL;
    axios.post(API_URL + "token/", {
      email,
      password
    }).then(response => {
      console.log(response.data)
      if (response.data.access && response.data.refresh) {
        localStorage.setItem("access", JSON.stringify(response.data.access));
        localStorage.setItem("refresh", JSON.stringify(response.data.refresh));
        this.setState( state => ({
          isLoggedIn: true,
        }))
      } 
    }).catch(error => {

      console.log(error.response)
    });
  }

  handleLogout(){
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    console.log("yay!")
    this.setState( state => ({
      isLoggedIn: false,
    }))
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            { isLoggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
          { 
            isLoggedIn 
            ? <Redirect to="/dashboard" /> 
            : <LoginPage 
                authHandler={ this.handleAuth }
              />
          }
          </Route>
          <PrivateRoute
            isLoggedIn={ this.state.isLoggedIn }
            logoutHandler={ this.handleLogout }
            path="/dashboard"
          >
            <h1>DASHBOARD</h1> 
          </PrivateRoute>
          <PrivateRoute
            isLoggedIn={ this.state.isLoggedIn }
            logoutHandler={ this.handleLogout }
            path="/companies"
            topBarContent={ <CompaniesTopBarContent /> }
          >
            <CompaniesPage />
          </PrivateRoute>
        </Switch>
      </div>
    );
  }  
}

export default App;
