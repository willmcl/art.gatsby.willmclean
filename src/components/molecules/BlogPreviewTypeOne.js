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
        text-decoration: none;
        span:first-child {
        transform: rotate(10deg) scale(1.2, 1);
        }
      }
    }
`;

class BlogPreviewTypeOne extends Component {
  render() {
    return (
      <Preview>
        <Link to={this.props.path}>{this.props.title.split( ' ' ).map( word => (
          <span>{word}</span>
        ) )}</Link>
      </Preview>
    )
  }
}

export default BlogPreviewTypeOne;