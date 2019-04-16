import React, { Component } from 'react';
import axios from '../axiosMain';

class Feed extends Component {
  //these render stuffs are just
  //placeholders
  //i was thinking we make components for every menu item
  //cause this component might be too big otherwise
  //unless i can come up with a way to do it dynamically using one function or component
  state = {
    posts: null,
    error: false
  }

  componentDidMount(){
    axios.get("/posts")
      .then(response => {
        this.setState({posts: response.data})
      })
      .catch(error => {
        this.setState({error: true})
      })
  }

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
      </div>
    );
  }

}

export default Feed;
