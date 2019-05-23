import React, { Component } from 'react';
import { Link } from 'gatsby';

class BlogPreview extends Component {

  render() {
    const frontmatter = this.props.post.frontmatter;
    return (
      <li>
        <Link to={frontmatter.path}>{frontmatter.title}</Link>
      </li>
    )
  }
}

export default BlogPreview;