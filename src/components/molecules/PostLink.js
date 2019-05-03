import React, { Component } from 'react';
import { Link } from "gatsby";

class PostLink extends Component {
    render() {
        return (
            <ul className="PostLink">
              <Link to={this.props.post.frontmatter.path}>
                {this.props.post.frontmatter.title} ({this.props.post.frontmatter.date})
              </Link>
            </ul>
        )
    }
}

export default PostLink;