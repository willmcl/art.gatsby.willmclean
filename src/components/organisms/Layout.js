import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import Navigation from '../molecules/Navigation';

class Layout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
          <Header siteTitle={data.site.siteMetadata.title}/>
          <Navigation/>
          <main>{this.props.children}</main>
          <Footer/>
          </>
        )}
      />
    )
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
