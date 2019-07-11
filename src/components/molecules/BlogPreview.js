import React, { Component } from 'react';
import { Link } from 'gatsby';
import { convertToSlug } from '../../utils/helpers';
import FirstBlogArtImage from './FirstBlogArtImage';
import styled from 'styled-components';

const Holder = styled.li`
  @media ( ${props => props.theme.breakpoints.sm} ) {
    grid-column: 2/3;
  }
  .text{
    text-align: justify;
    line-height: 1.2;
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      ${props => props.theme.typeStyles( 2 )};
      .number {
        font-weight: normal;
        margin-right: 1rem;
        font-style: italic;
        ${props => props.theme.typeStyles( -8 )};
      }
    }
  }
  .images {
    display: none;
    img {
      position: fixed;
      z-index: -1;
      width: 20vw;
      height: auto;
      &:nth-child(1) { top: 8vw; left: 8vw; }
      &:nth-child(2) { top: 8vw; right: 8vw; }
      &:nth-child(3) { bottom: 8vw; right: 8vw; }
      &:nth-child(4) { bottom: 8vw; left: 8vw; }
    }
  }
  .text:hover + .images { display: block; }
`;

class BlogPreview extends Component {

  render() {
    const frontmatter = this.props.post.frontmatter;
    return (
      <Holder>
        <div className="text">
          <Link to={`/blog/${convertToSlug( frontmatter.title )}`}>
            <span className="number">{this.props.i + 1}</span>
            <span>{frontmatter.title}</span>
          </Link>
        </div>
        <div className="images">
          <FirstBlogArtImage art={frontmatter.art}/>
          <FirstBlogArtImage art={frontmatter.art}/>
          <FirstBlogArtImage art={frontmatter.art}/>
          <FirstBlogArtImage art={frontmatter.art}/>
        </div>
      </Holder>
    )
  }
}

export default BlogPreview;