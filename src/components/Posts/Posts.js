import React, { Component } from 'react';
import axios from '../../axiosMain';
import Spinner from '../UI/Spinner';
import Post from './Post/Post';

class Posts extends Component{

  state = {
    posts: null
  }

  componentDidMount(){
    axios.get("/posts.json")
      .then(response => {
        this.setState({posts: response.data.data})
      })
      .catch(error => {
        this.setState({error: true})
      })
  }

  buildPosts = () => {
    let posts = this.state.posts.map( (post, index) => (
      <Post title={post.attributes.title}
        key={post.id}
        url={post.attributes.url}
        createdBy={post.attributes.createdBy}
        createdAt={post.attributes.createdAt}
        userId={post.relationships.user.data.id}
        postIndex={index}
      />
    ))
    return posts;
  }

  render(){
    let posts = <Spinner/>

    if(this.state.posts){
      posts = this.buildPosts();
    }

    return(
      <div style={{ paddingTop: 15}}>
        {posts}
      </div>
    )
  }
}

export default Posts;