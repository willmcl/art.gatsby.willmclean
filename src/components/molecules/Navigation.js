import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 1rem 0;
    padding: 1rem 0;
    @media ( ${props => props.theme.breakpoints.md} ) {
      margin: 1rem 0;
    }
    li {
      font-weight: 600;
      text-transform: uppercase;
    }
`;

class Navigation extends Component {
    render() {
        return (
            <nav>
              <List>
                <li><Link to="/">Art</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about/">About</Link></li>
                <li><a href="https://www.etsy.com/au/shop/WillMcLeanStudio" target="_blank" rel="noopener noreferrer">Shop</a></li>
              </List>
            </nav>
        )
    }
}

export default Navigation;