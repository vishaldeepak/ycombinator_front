import React, { Component } from 'react';
import Aux from '../hoc/aux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Header from '../components/Navigation/Header';
import Footer from '../components/Navigation/Footer';
import {  getFooterItems } from "../helpers";

class Layout extends Component {

  state = {
    footerMenu: {...getFooterItems()}
  }

  render(){
    return(
      <Aux>
        <Header
          isAuthenticated={this.props.isAuthenticated}
          username={this.props.username}
        />
        <div className="feed">
          {this.props.children}
        </div>
        <div className="footer__line"></div>
        <Footer
          footerMenu={ this.state.footerMenu }
        />
      </Aux>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: (state.token !== null),
    username: state.username
  };
}

export default withRouter(connect(mapStateToProps)(Layout));