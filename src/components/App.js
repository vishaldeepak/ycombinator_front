import React, { Component } from "react";
import {connect} from 'react-redux';
import Layout from '../containers/Layout';
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Auth from "../containers/Auth";
import Feed from './Feed';
import Logout from "../containers/Logout";
import * as actions from '../store/actions/indexAction';

class App extends Component {
  componentDidMount(){
    this.props.setupAuth()
  }

  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path="/login" component={Auth} />
        <Redirect to="/" />
      </Switch>
    )

    if(this.props.isAuthenticated){
      routes = (
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={Feed} />
          <Redirect to="/" />
        </Switch>
      )
    }

    return (
      <BrowserRouter>
        <div className="main-layout">
          <Layout>
            {routes}
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: (state.token !== null)
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setupAuth: () => dispatch(actions.setAuthInitial())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
