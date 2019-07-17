import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/organisms/Layout';
import ArtPreview from '../components/molecules/ArtPreview';
import styled from 'styled-components';
import SEO from '../components/molecules/SEO';
import Pagination from '../components/organisms/Pagination';
import Intro from '../components/molecules/Intro';

const Holder = styled.ul`
    list-style: none;
    padding-left: 0;
    display: grid;
    margin-top: 8rem;
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    grid-template-columns: repeat(2, 1fr);
    @media ( ${props => props.theme.breakpoints.md} ) {
      grid-column-gap: 8rem;
      grid-row-gap: 8rem;
    }
    @media ( ${props => props.theme.breakpoints.lg} ) {
      grid-template-columns: repeat(3, 1fr);
    }
`;

class ArtArchive extends Component {

  render() {

    return (
      <Layout>
        <SEO title="Art"/>
        <article>
          <Intro visible={this.props.pageContext.currentPage === 1}/>
          <Holder>
            {this.props.data.allMarkdownRemark.edges.map( edge => (
              <ArtPreview key={edge.node.id} post={edge.node}/>
            ) )}
          </Holder>
          <Pagination pageContext={this.props.pageContext}/>
        </article>
      </Layout>
    )
  }
}

export default ArtArchive;

export const artArchiveQuery = graphql`
    query artArchiveQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            limit: $limit
            skip: $skip
            filter: {
                fileAbsolutePath: {regex : "\/_posts/art/"}
                frontmatter:{ rating: { gte: 2} }
            }
        ) {
            edges {
                node {
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
`;