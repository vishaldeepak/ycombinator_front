import React, { Component } from "react";
import Header from "./Header";
import Feed from "./Feed";
import Footer from "./Footer";
import { getMenuItem } from "../helpers";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      headerMenu: {...getMenuItem()},
    }
  }
  render() {
    return (
      <div className="main-layout">
        <BrowserRouter>
          <Header menu={ this.state.headerMenu } />
          <Feed menu={ this.state.headerMenu }/>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
