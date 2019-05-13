import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Preview = styled.li`
    display: flex;
    align-items: stretch;
    justify-content: center;
    min-height: 180px;
    @media ( ${props => props.theme.breakpoints.md} ) {
      min-height: 250px;
    }
    @media ( ${props => props.theme.breakpoints.lg} ) {
      min-height: 300px;
    }
    &:hover { border: 1px solid; }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      font-weight: bold;
      .middle {
        transform: rotate(-10deg) scale( 1.2 );
        transition: transform 0.25s linear;
        font-weight: normal;
      }
      &:hover {
        text-decoration: none;
        .middle {
          transform: rotate(10deg) scale( 1.2 );
        }
      }
    }
`;

class BlogPreviewTypeThree extends Component {
  render() {
    const middleIndex = Math.floor( this.props.wordCount / 2 );
    let top = this.props.title.split(' ');
    let middle = top.splice(middleIndex);
    let bottom = middle.splice(1);
    return (
      <Preview>
        <Link to={this.props.path}>
          <span className="top">{top.map( word => (
            <>{word} </>
          ) )}</span>
          <span className="middle">{middle.map( word => (
            <>{word}</>
          ) )}</span>
          <span className="bottom">{bottom.map( word => (
            <> {word}</>
          ) )}</span>
        </Link>
      </Preview>
    )
  }
}

export default BlogPreviewTypeThree;