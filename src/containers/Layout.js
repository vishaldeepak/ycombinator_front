import React, { Component } from 'react';
import Aux from '../hoc/aux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Header from '../components/Navigation/Header';
import Footer from '../components/Navigation/Footer';
import Feed from '../components/Feed';
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
          userName={this.props.username}
        />
        <Feed
          menu={ this.state.headerMenu }
          footerMenu={ this.state.footerMenu }
        />
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
    userName: state.username
  };
}

export default withRouter(connect(mapStateToProps)(Layout));