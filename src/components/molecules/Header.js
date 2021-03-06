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
        <p><a href="mailto:willmcl@gmail.com">Contact</a></p>
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
