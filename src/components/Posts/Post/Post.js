import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return(
    <div>
      <div>
        <span className={classes.indexNumber}>
          {props.postIndex + 1}.
        </span>
        <span className={classes.triangleUp}>
        </span>
        <span className={classes.title}>
          {props.title}
        </span>
        <span className={classes.url}>({props.url})</span>
      </div>
      <div className={classes.titleInfo}>
        <span>27 points by </span>
        <span>{props.createdBy} </span>
        <span>15 mins ago </span>
        <span>| </span>
        <span>hide </span>
        <span>| </span>
        <span>43 comments</span>
      </div>
    </div>
  )
}

export default Post;