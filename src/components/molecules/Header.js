import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const Holder = styled.header`
    display: flex;
    justify-content: space-between;
    p {
      margin: 0;
      line-height: 1;
      font-weight: 600;
      text-transform: uppercase;
    }
`;

class Header extends Component {
  render() {
    return (
      <Holder>
        <p>
          <Link to="/">
            {this.props.siteTitle}
          </Link>
        </p>
        <p>Archive</p>
      </Holder>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header
