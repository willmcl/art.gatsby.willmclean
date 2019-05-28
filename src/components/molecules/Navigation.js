import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding-left: 0;
    margin: 4rem 0;
    @media ( ${props => props.theme.breakpoints.md} ) {
      margin: 8rem 0;
    }
    li {
      margin: 0 1rem;
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