import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding-left: 0;
    li {
      margin: 0 1rem;
    }
`;

class Navigation extends Component {
    render() {
        return (
            <nav>
              <List>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/">About</Link></li>
              </List>
            </nav>
        )
    }
}

export default Navigation;