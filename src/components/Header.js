import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

class Header extends Component {

  renderMenu = key => {
    return(
      <span key={key}>
        <Link className="header__link" to={"/".concat(`${this.props.menu[key].link}`)}>{this.props.menu[key].value}</Link>
      </span>
    )
  }
  render() {
    return (
      <nav className="header"> 
        <img src={logo} className="header__logo" alt="logo"/>
        <div className="header__menu">
          <h4 className="header__headline">Hacker News</h4>
          <span className="header__menu-list">
            {Object.keys(this.props.menu).map(this.renderMenu)}
          </span>
        </div>
        <div className="header__login">
          <span>login</span>
        </div>
      </nav>
    );
  }

}

export default Header;
