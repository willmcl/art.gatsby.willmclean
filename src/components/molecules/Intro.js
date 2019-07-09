import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const Holder = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 4rem 0;
  grid-row-gap: 4rem;
  @media (${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
    margin: 10rem 0;
  }
  section {
    overflow: hidden;
    @media (${props => props.theme.breakpoints.sm}) {
      padding: 0 4rem;
    }
    svg {
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
    }
  }
`;

class Intro extends Component {
  render() {
    if ( this.props.visible ) {
      return (
        <Holder>
          <section>
            <svg viewBox="0 0 500 500" width="500" height="500">
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
                <textPath xlinkHref="#circle" textLength="240%">
                  I just need to see everything in one place.
                </textPath>
              </text>
            </svg>
          </section>
          <section>
            <svg viewBox="0 0 500 500" width="500" height="500">
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
                <textPath xlinkHref="#circle" textLength="240%">
                  It'll all be clear then.
                </textPath>
              </text>
            </svg>
          </section>
        </Holder>
      )
    } else {
      return null;
    }
  }
}

export default Intro;