import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Preview = styled.li`
    display: flex;
    align-items: center;
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
      width: 90px;
      transform: rotate(-90deg) scale(1.2, 0.8);
      font-weight: bold;
      transition: transform 0.25s linear;
      &:hover {
        transform: rotate(-70deg) scale(1.2, 0.8);
      }
    }
`;

class BlogPreviewTypeTwo extends Component {
  render() {
    return (
      <Preview>
        <Link to={this.props.path}>{this.props.title}</Link>
      </Preview>
    )
  }
}

export default BlogPreviewTypeTwo;