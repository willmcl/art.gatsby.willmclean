import React, { Component } from 'react';
import { Link } from 'gatsby';
import { convertToSlug } from '../../utils/helpers';
import styled from 'styled-components';
import Img from 'gatsby-image';

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
    .imageHolder {
      position: fixed;
      z-index: -1;
      width: 20vw;
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
    const post = this.props.post;
    return (
      <Holder>
        <div className="text">
          <Link to={`/blog/${convertToSlug( post.title )}`}>
            <span className="number">{this.props.i + 1}</span>
            <span>{post.title}</span>
          </Link>
        </div>
        <div className="images">
          <div class="imageHolder"><Img fluid={post.artworks[ 0 ].image.fluid}/></div>
          <div class="imageHolder"><Img fluid={post.artworks[ 0 ].image.fluid}/></div>
          <div class="imageHolder"><Img fluid={post.artworks[ 0 ].image.fluid}/></div>
          <div class="imageHolder"><Img fluid={post.artworks[ 0 ].image.fluid}/></div>
        </div>
      </Holder>
    )
  }
}

export default BlogPreview;
