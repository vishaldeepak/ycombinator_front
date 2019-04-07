import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      formControl: {
        username: {
          value: ""
        },
        password: {
          value: ""
        },
      }
    };
  }

  renderForm = (buttonName) => {
    return (
      <form className="login__form"> 
        <div>username: <input
            type="text"
            name="username"
            value={this.state.formControl.username.value}
            onChange={this.onChange}
          />
        </div>
        <div>password: <input
            type="password"
            name="password"
            value={this.state.formControl.password.value}
            onChange={this.onChange}
          />
        </div>
        <button className="login__button">{buttonName}</button>
      </form>
    )
  }
  render() {
    return(
      <div className="login">
        <h2 className="login__headline">Login</h2>
          {this.renderForm("login")}
        <h2 className="login__headline">Create Account</h2>
          {this.renderForm("create account")}
      </div>
    )
  }
} 

export default Login;
