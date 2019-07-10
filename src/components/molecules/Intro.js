import React, { Component } from 'react';
import styled from 'styled-components';
import CircleText from '../elements/CircleText';

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
  }
`;

class Intro extends Component {
  render() {
    if ( this.props.visible ) {
      return (
        <Holder>
          <section>
            <CircleText text="I just need to see everything in one place."/>
          </section>
          <section>
            <CircleText text="It'll all be clear then."/>
          </section>
        </Holder>
      )
    } else {
      return null;
    }
  }
}

export default Intro;