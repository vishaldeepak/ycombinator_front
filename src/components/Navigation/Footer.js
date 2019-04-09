import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
  renderFooterMenu = key => {
    return (
      <span key={key}>
        <Link
          className="footer__link"
          to={"/".concat(`${this.props.footerMenu[key].link}`)}
        >
          {this.props.footerMenu[key].value}
        </Link>
      </span>
    );
  }
  render() {
    return (
      <div className="footer">
        <div className="footer__menu">
          <span className="footer__menu-list">
            {Object.keys(this.props.footerMenu).map(this.renderFooterMenu)}
          </span>
          <span>Search: </span>
          <form>
            <input></input>
          </form>
        </div>
      </div>
    )
  }

}

export default Footer;
