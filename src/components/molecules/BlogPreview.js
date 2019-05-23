import React, { Component } from 'react';
import BlogPreviewTypeOne from './BlogPreviewTypeOne';
import BlogPreviewTypeTwo from './BlogPreviewTypeTwo';
import BlogPreviewTypeThree from './BlogPreviewTypeThree';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Preview = styled.li`
    display: flex;
    align-items: stretch;
    min-height: 180px;
    @media ( ${props => props.theme.breakpoints.md} ) {
      min-height: 250px;
    }
    @media ( ${props => props.theme.breakpoints.lg} ) {
      min-height: 300px;
    }
    a {
      display: inline-block;
      width: 100%;
    }
`;

class BlogPreview extends Component {

  render() {
    const frontmatter = this.props.post.frontmatter;
    const wordCount = frontmatter.title.split(' ').length;
    const randomiser = Math.floor(Math.random() * 5) + 1;
    if( wordCount < 5 ) {
      return (
        <Preview>
          <Link to={frontmatter.path}>
            <BlogPreviewTypeOne title={frontmatter.title} />
          </Link>
        </Preview>
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
        <Preview>
          <Link to={frontmatter.path}>
            <BlogPreviewTypeTwo title={frontmatter.title}/>
          </Link>
        </Preview>
      )
    }
  }
}

export default BlogPreview;