import React, { Component } from 'react';
import Layout from '../components/organisms/Layout';
import styled from 'styled-components';
import ArtPreview from '../components/molecules/ArtPreview';
import SEO from '../components/molecules/SEO';

const Holder = styled.ul`
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
    @media ( ${props => props.theme.breakpoints.md} ) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media ( ${props => props.theme.breakpoints.lg} ) {
      grid-template-columns: repeat(4, 1fr);
    }
`;

class Index extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Art" />
        <article>
          <Holder>
            {this.props.data.allMarkdownRemark.edges.map( edge => (
              <ArtPreview key={edge.node.id} post={edge.node}/>
            ) )}
          </Holder>
        </article>
      </Layout>
    )
  }
}

export default Index;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex : "\/_posts/art/"}
      }
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
    ){
      edges {
        node{
          id
          frontmatter {
            title
            date
            thumbnail
          }
        }
      }
    }
  }
`