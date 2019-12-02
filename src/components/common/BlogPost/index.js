import React from "react";

import "./styles.scss";

const BlogPost = ({ caption, date, img }) => (
  <div className="blog-post">
    <div className="header">
      <img alt="img" src={require("../../../assets/imgs/Asset 6.svg")} />
      <span className="date">{date}</span>
    </div>
    <img alt="img" src={img} />
    <div className="caption">{caption}</div>
    <div className="actions">
      <i className="fa fa-reply" />
      <i className="fa fa-retweet" />
      <i className="fa fa-heart-o" />
      <i className="fa fa-external-link" />
    </div>
  </div>
);

export default BlogPost;
