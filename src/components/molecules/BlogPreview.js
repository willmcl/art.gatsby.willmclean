import React, { Component } from 'react';
import BlogPreviewTypeOne from './BlogPreviewTypeOne';
import BlogPreviewTypeTwo from './BlogPreviewTypeTwo';
import BlogPreviewTypeThree from './BlogPreviewTypeThree';

class BlogPreview extends Component {

  render() {
    const frontmatter = this.props.post.frontmatter;
    const wordCount = frontmatter.title.split(' ').length;
    const randomiser = Math.floor(Math.random() * 5) + 1;
    if( wordCount < 5 ) {
      return (
        <BlogPreviewTypeOne
          path = {frontmatter.path}
          title={frontmatter.title}/>
      )
    } else if( wordCount < 10 && wordCount !== 6 ) {
      return (
        <BlogPreviewTypeThree
          path={frontmatter.path}
          title={frontmatter.title}
          wordCount={wordCount}/>
      )
    } else {
      return (
        <BlogPreviewTypeTwo
          path = {frontmatter.path}
          title={frontmatter.title}/>
      )
    }
  }
}

export default BlogPreview;