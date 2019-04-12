import React, { Component } from "react";
import {connect} from 'react-redux';
import Layout from '../containers/Layout';
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Auth from "../containers/Auth";
import Feed from './Feed';
import * as actions from '../store/actions/indexAction';

class App extends Component {
  componentDidMount(){
    this.props.setupAuth()
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" component={Feed} />
        <Redirect to="/" />
      </Switch>
    )

    return (
      <div className="main-layout">
        <BrowserRouter>
          <Layout>
            {routes}
          </Layout>
        </BrowserRouter>
      </div>
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
