import React from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import {  getMenuItems } from "../../helpers";
import Aux from "../../hoc/aux";

const header = (props) => {
  let menu = getMenuItems();

  let renderMenu = key => {
    return (
      <span key={key}>
        <Link
          className="header__link"
          to={"/".concat(`${menu[key].link}`)}
        >
          {menu[key].value}
        </Link>
      </span>
    );
  };

  let rightControls = (
    <Link className="header__link" to={"/login"}>login</Link>
  );

  if(props.isAuthenticated){
    rightControls = (
      <Aux>
        <Link
          className="header__link"
          to={"/user"}>
          {props.username}
        </Link>
        <Link
          className="header__link"
          to={"/logout"}
        >
        Logout
        </Link>
      </Aux>
    )
  }

  return(
    <nav className="header">
    <img src={logo} className="header__logo" alt="logo" />
    <div className="header__menu">
      <h4 className="header__headline">Hacker News</h4>
      <span className="header__menu-list">
        {Object.keys({...menu}).map(renderMenu)}
      </span>
    </div>
    <div className="header__space"></div>
    <div className="header__login">
      {rightControls}
    </div>
  </nav>
  )
}

export default header;
