import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menu: {
        item_1: {
          value: "new |"
        },
        item_2: {
          value: " past |"
        },
        item_3: {
          value: " comments |"
        },
        item_4: {
          value: " ask |"
        },
        item_5: {
          value: " show |"
        },
        item_6: {
          value: " jobs |"
        },
        item_7: {
          value: " submit"
        },
      }
    };
  }

  renderMenu = key => {
    return(
      <span key={key}>
        <span>{this.state.menu[key].value}</span>
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
            {Object.keys(this.state.menu).map(this.renderMenu)}
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
