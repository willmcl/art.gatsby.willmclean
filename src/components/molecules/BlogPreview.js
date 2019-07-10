import React, { Component } from 'react';
import { Link } from 'gatsby';
import { convertToSlug } from '../../utils/helpers';
import FirstBlogArtImage from './FirstBlogArtImage';

class BlogPreview extends Component {

  render() {
    const frontmatter = this.props.post.frontmatter;
    return (
      <li>
        <Link to={`/blog/${convertToSlug(frontmatter.title)}`}>{frontmatter.title}</Link>
        <FirstBlogArtImage art={frontmatter.art}/>
      </li>
    )
  }
}

export default BlogPreview;