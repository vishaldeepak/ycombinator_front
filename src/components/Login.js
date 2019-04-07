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
        createUsername: {
          value: ""
        },
        createPassword: {
          value: ""
        },
        confirmPassword: {
          value: ""
        },
      }
    };
  }

  handleOnChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      formControl: {
        ...this.state.formControl,
        [name]: {
          ...this.state.formControl[e.target.name],
          value
        }
      }
    });
  };

  handleOnSubmitCreateAccount = (e)  => {
    const password = this.state.formControl.createPassword;
    const confirmPassword = this.state.formControl.confirmPassword;
    if(password.value !== confirmPassword.value) {
      e.preventDefault();
      alert('passwords does not match');
    } else {
      alert('passwords match make API call or something');
    }
  }

  renderLoginForm = () => {
    return (
      <form className="login__form"> 
        <div className="login__form-input">username: <input
            type="text"
            name="username"
            value={this.state.formControl.username.value}
            onChange={this.handleOnChange}
          />
        </div>
        <div className="login__form-input">password: <input
            type="password"
            name="password"
            value={this.state.formControl.password.value}
            onChange={this.handleOnChange}
          />
        </div>
        <button className="login__button">login</button>
      </form>
    )
  }

  renderCreateAccountForm = () => {
    return (
      <form 
        className="login__form"
        onSubmit={this.handleOnSubmitCreateAccount}
      > 
        <div className="login__form-input">username: <input
            type="text"
            name="createUsername"
            value={this.state.formControl.createUsername.value}
            onChange={this.handleOnChange}
          />
        </div>
        <div className="login__form-input">password: <input
            type="password"
            name="createPassword"
            value={this.state.formControl.createPassword.value}
            onChange={this.handleOnChange}
          />
        </div>
        <div className="login__form-input">confirm password: <input 
            type="password"
            name="confirmPassword"
            value={this.state.formControl.confirmPassword.value}
            onChange={this.handleOnChange}
          />
        </div>
        <button className="login__button">create account</button>
      </form>
    )
  }

  render() {
    return(
      <div className="login">

        <h2 className="login__headline">Login</h2>
          {this.renderLoginForm()}

        <h2 className="login__headline">Create Account</h2>
          {this.renderCreateAccountForm()}

      </div>
    )
  }
} 

export default Login;
