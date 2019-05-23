import React, { Component } from 'react';
import styled from 'styled-components';

const Type = styled.div`
      width: 90px;
      transform: rotate(-90deg) scale(1.2, 0.8);
      font-weight: bold;
      transition: transform 0.25s linear;
      &:hover {
        transform: rotate(-70deg) scale(1.2, 0.8);
      }
`;

class BlogPreviewTypeTwo extends Component {
  render() {
    return (
      <Type>{this.props.title}</Type>
    )
  }
}

export default BlogPreviewTypeTwo;