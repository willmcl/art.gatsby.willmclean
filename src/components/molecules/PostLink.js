import React, { Component } from 'react';
import { Link } from "gatsby";

class PostLink extends Component {
    render() {
        return (
            <li>
              <Link to={this.props.post.frontmatter.path}>
                <p>{this.props.post.frontmatter.title} ({this.props.post.frontmatter.date})</p>
              </Link>
            </li>
        )
    }
}

export default PostLink;