import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`;

const Circle = styled.svg`
  width: 100%;
  height: auto;
  animation: ${rotate} 40s linear infinite;
  path {
    fill: transparent;
    stroke: transparent;
  }
  text {
    text-align: justify;
    ${props => props.theme.typeStyles( 16 )};
    text-transform: uppercase;
    font-weight: 600;
    @media (${props => props.theme.breakpoints.md}) {
      ${props => props.theme.typeStyles( 10 )};
    }
  }
`;

class CircleText extends Component {
    render() {
        return (
              <Circle viewBox="0 0 500 500" width="500" height="500">
                <circle cx="250" cy="250" r="100" fill="white" stroke="black"/>
                <path id="circle"
                  d="
                M 250 250
                m -200, 0
                a 200,200 0 1,1 400,0
                a 200,200 0 1,1 -400,0
                "
                />
                <text width="500" textLength="240%">
                  <textPath xlinkHref="#circle" textLength="240%">{this.props.text}</textPath>
                </text>
              </Circle>
        )
    }
}

export default CircleText;