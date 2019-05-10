import React, { Component } from 'react';
import { Link } from "gatsby";

class BlogPreview extends Component {
    render() {
        return (
            <li>
              <Link to={this.props.post.frontmatter.path}>{this.props.post.frontmatter.title}</Link>
            </li>
        )
    }
}

export default BlogPreview;