import React, { Component } from 'react';
import styled from 'styled-components';

const Type = styled.div`
      width: 100%;
      height: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      span:first-child {
        text-transform: uppercase;
        font-weight: bold;
        transform: rotate(-10deg) scale(1.2, 1);
        margin-bottom: 1rem;
        transition: transform 0.25s linear;
      }
      &:hover {
        span:first-child {
        transform: rotate(10deg) scale(1.2, 1);
        }
      }
`;

class BlogPreviewTypeOne extends Component {
  render() {
    return (
      <Type>{this.props.title.split( ' ' ).map( word => (
        <span>{word}</span>
      ) )}</Type>
    )
  }
}

export default BlogPreviewTypeOne;