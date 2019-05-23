import React, { Component } from 'react';
import styled from 'styled-components';

const Type = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      font-weight: bold;
      .middle {
        transform: rotate(10deg) scale( 1.2 );
        transition: transform 0.25s linear;
        font-weight: normal;
      }
      &:hover {
        text-decoration: none;
        .middle {
          transform: rotate(-10deg) scale( 1.2 );
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
      <Type>
          <span className="top">{top.map( word => (
            <>{word} </>
          ) )}</span>
          <span className="middle">{middle.map( word => (
            <>{word}</>
          ) )}</span>
          <span className="bottom">{bottom.map( word => (
            <> {word}</>
          ) )}</span>
      </Type>
    )
  }
}

export default BlogPreviewTypeThree;