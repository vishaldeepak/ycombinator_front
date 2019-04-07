import React, { Component } from "react";
import Header from "./Header";
import Feed from "./Feed";
import Footer from "./Footer";
import { getMenuItem, getFooterItems } from "../helpers";
import { 
  BrowserRouter,
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      headerMenu: {...getMenuItem()},
      footerMenu: {...getFooterItems()}
    }
  }
  render() {
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
