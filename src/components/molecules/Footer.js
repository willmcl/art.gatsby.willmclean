import React, { Component } from 'react';
import styled from 'styled-components';

const Holder = styled.footer`
  margin-top: 4rem;
  p {
    margin: 0;
    text-align: right;
    ${props => props.theme.typeStyles( -6 )};
    line-height: 1;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Holder>
        <p>© {new Date().getFullYear()}, <a href="https://www.willmclean.net">Will McLean</a></p>
      </Holder>
    )
  }
}

export default Footer;