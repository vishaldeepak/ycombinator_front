import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';

class Feed extends Component {

  renderView = () => {
    return(
      <h1>Feed</h1>
    )
  };

  renderViewNew = () => {
    return(
      <h1>New</h1>
    )
  }

  renderViewPast = () => {
    return(
      <h1>Past</h1>
    )
  };

  renderViewComments = () => {
    return(
      <h1>Comments</h1>
    )
  };

  renderViewAsk = () => {
    return(
      <h1>Ask</h1>
    )
  };

  renderViewShow = () => {
    return(
      <h1>Show</h1>
    )
  };

  renderViewSubmit = () => {
    return(
      <h1>Submit</h1>
    )
  };

  render() {
    return(
      <div className="feed">
        <Route exact path ='/' component={this.renderView} />
        <Route exact path ='/new' component={this.renderViewNew} />
      </div>
    );
  }

}

export default Feed;
