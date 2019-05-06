import React, { Component } from 'react';
import { Link } from "gatsby";

class PostLink extends Component {
    render() {
        return (
            <li className="PostLink">
              <Link to={this.props.post.frontmatter.path}>
                {this.props.post.frontmatter.title} ({this.props.post.frontmatter.date})
              </Link>
            </li>
        )
    }
}

export default PostLink;