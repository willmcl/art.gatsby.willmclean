import React, { Component } from 'react';
import { Link } from 'gatsby';
import { convertToSlug } from '../../utils/helpers';

class BlogPreview extends Component {

  render() {
    const frontmatter = this.props.post.frontmatter;
    return (
      <li>
        <Link to={`/blog/${convertToSlug(frontmatter.title)}`}>{frontmatter.title}</Link>
      </li>
    )
  }
}

export default BlogPreview;