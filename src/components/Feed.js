import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Auth from '../containers/Auth';

class Feed extends Component {

  //these render stuffs are just
  //placeholders
  //i was thinking we make components for every menu item
  //cause this component might be too big otherwise
  //unless i can come up with a way to do it dynamically using one function or component
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
        <Route exact path ='/past' component={this.renderViewPast} />
        <Route exact path ='/comments' component={this.renderViewComments} />
        <Route exact path ='/ask' component={this.renderViewAsk} />
        <Route exact path ='/show' component={this.renderViewShow} />
        <Route exact path ='/submit' component={this.renderViewSubmit} />
        <Route exact path ='/login' component={Auth} />
      </div>
    );
  }

}

export default Feed;
