import React, { Component } from 'react';
import styled from 'styled-components';

const Holder = styled.footer`
  margin-top: 4rem;
  p {
    margin: 0;
    text-align: right;
    ${props => props.theme.typeStyles( -6 )};
    line-height: 1.4;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Holder>
        <p>© Will McLean {new Date().getFullYear()}, <br/> Site by <a href="https://www.wills-websites.com">Will's Websites</a></p>
      </Holder>
    )
  }
}

export default Footer;