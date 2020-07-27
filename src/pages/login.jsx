import React from 'react';
import { 
  Button,
  Card, 
  CardContent, 
  FormControl,
  Grid,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  TextField,
  Typography
 } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import './login.css'

// TODO add react-validation and handle auth error
class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      showPassword: false,
    }
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  };

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword})
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleLoginClick = (event) => {
    let email = this.state.email;
    let password = this.state.password;
    this.props.authHandler(email, password);
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          height: '90vh',
        }}
      >
        <Grid item>
          <Card variant="outlined">
            <CardContent>
            <Typography variant="h4" component="span">
              Авторизация
            </Typography>
              <form  
                noValidate 
                autoComplete="off"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <TextField 
                  fullWidth
                  label="Email"
                  onChange={ this.handleEmailChange }
                  value={ this.state.email }
                  variant="outlined" 
                  margin="normal"
                />
                <FormControl 
                  variant="outlined"
                  fullWidth
                  margin="normal"
                >
                  <InputLabel variant="outlined" htmlFor="password-field">Password</InputLabel>
                  <OutlinedInput
                    id="password-field"
                    type={ this.state.showPassword ? 'text' : 'password'}
                    value={ this.state.password }
                    onChange={ this.handlePasswordChange }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={ this.handleClickShowPassword}
                          onMouseDown={ this.handleMouseDownPassword }
                        >
                          { this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Button 
                  onClick={ this.handleLoginClick }
                  variant="outlined"
                  margin="dense" 
                  color="primary"
                >
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default LoginPage;