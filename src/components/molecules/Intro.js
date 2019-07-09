import React, { Component } from 'react';
import styled from 'styled-components';

const Holder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  margin: 30rem 0;
  section {
    grid-column: 2/3;
    p {
      text-align: justify;
    }
  }
`;

class Intro extends Component {
    render() {
      if(this.props.visible){
        return (
          <Holder>
            <section>
              <p>For god's sakes, I just need to see everything in one bloody place. I am sick of digging around for sketches in the kitchen drawers or under the kid's beds. Once I see it all in one place I'll know what to do. It'll all be clear then.</p>
            </section>
          </Holder>
        )
      } else {
        return null;
      }
    }
}

export default Intro;