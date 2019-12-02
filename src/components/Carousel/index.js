import React, { Component } from "react";

import BlogPost from "../common/BlogPost";

import "./styles.scss";


class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    }
  }

  getPrevPost = () => {
    const { index } = this.state;

    if (index-1 >= 0) {
      this.setState({
        index: index-1
      })
    }

  }

  getNextPost = () => {
    const { posts } = this.props,
      { index } = this.state;

    if (index+3 < posts.length) {
      this.setState({
        index: index+1
      })
    }
  }

  render() {
    const { posts } = this.props,
      { index } = this.state;

    return (
      <div className="carousel">
          {index > 0 && <i className="fa fa-angle-left fa-2x" onClick={this.getPrevPost} />}
          <div className="first">
            <BlogPost
              caption={posts[index].caption}
              date={posts[index].date}
              img={posts[index].img}
            />
          </div>
          <div className="second">
            <BlogPost
              caption={posts[index+1].caption}
              date={posts[index+1].date}
              img={posts[index+1].img}
            />
          </div>
          <BlogPost
            caption={posts[index+2].caption}
            date={posts[index+2].date}
            img={posts[index+2].img}
          />
          <i className="fa fa-angle-right fa-2x" onClick={this.getNextPost} />
      </div>
    );
  }
}

export default Carousel;
