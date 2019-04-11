import React, { Component } from "react";
import Header from "./Navigation/Header";
import Feed from "./Feed";
import Footer from "./Navigation/Footer";
import { getMenuItem, getFooterItems } from "../helpers";
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Auth from "../containers/Auth";

class App extends Component {
  constructor() {
    super();
    this.state = {
      headerMenu: {...getMenuItem()},
      footerMenu: {...getFooterItems()}
    }
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" component={Auth} />
        <Redirect to="/" />
      </Switch>
    )

    return (
      <div className="main-layout">
        <BrowserRouter>
          <Header
            menu={ this.state.headerMenu }
          />
          <Feed
            menu={ this.state.headerMenu }
            footerMenu={ this.state.footerMenu }
          />
          <div className="footer__line"></div>
          <Footer
            footerMenu={ this.state.footerMenu }
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
