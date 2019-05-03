import React, { Component } from 'react';
import { Link } from 'gatsby';

class Navigation extends Component {
    render() {
        return (
            <nav className="Navigation">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/page-2/">Page 2</Link></li>
              </ul>
            </nav>
        )
    }
}

export default Navigation;