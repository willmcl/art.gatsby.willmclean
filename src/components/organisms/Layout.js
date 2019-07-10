import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import Navigation from '../molecules/Navigation';

import GlobalStyles from '../elements/GlobalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../utils/styling';

const Content = styled.main`
  min-height: 80vh;
`;

class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
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
              <GlobalStyles/>
              <Header siteTitle={data.site.siteMetadata.title}/>
              <Navigation/>
              <Content>{this.props.children}</Content>
              <Footer/>
            </>
          )}
        />
      </ThemeProvider>
    )
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
