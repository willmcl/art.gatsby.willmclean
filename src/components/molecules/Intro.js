import React, { Component } from 'react';
import styled from 'styled-components';

const Holder = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2rem;
  margin: 10rem 0;
  @media (${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
  section {
    @media (${props => props.theme.breakpoints.md}) {
      grid-column: 2/3;
    }
    p {
      text-align: justify;
      ${props => props.theme.typeStyles( 10 )};
      text-transform: uppercase;
      font-weight: 600;
      margin: 0;
    }
  }
`;

class Intro extends Component {
  render() {
    if ( this.props.visible ) {
      return (
        <Holder>
          <section>
            <p>I just need to see everything in one place. It'll all be clear then.</p>
          </section>
        </Holder>
      )
    } else {
      return null;
    }
  }
}

export default Intro;