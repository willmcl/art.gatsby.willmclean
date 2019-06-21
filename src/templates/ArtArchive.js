import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/organisms/Layout';
import ArtPreview from '../components/molecules/ArtPreview';
import styled from 'styled-components';
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

class ArtArchive extends Component {

  render() {

    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? "/art" : `/art/${(currentPage - 1).toString()}`;
    const nextPage = `/art/${(currentPage + 1).toString()}`;

    return (
      <Layout>
        <SEO title="Art"/>
        <article>
          <nav>
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Previous Page
              </Link>
            )}
            {!isLast && (
              <Link to={nextPage} rel="next">
                Next Page →
              </Link>
            )}
          </nav>
          <nav>
            {Array.from({ length: numPages }, (_, i) => (
              <Link key={`pagination-number${i + 1}`} to={`/art/${i === 0 ? "" : i + 1}`}>
                {i + 1}
              </Link>
            ))}
          </nav>
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

export default ArtArchive;

export const artArchiveQuery = graphql`
    query artArchiveQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            limit: $limit
            skip: $skip
            filter: {
                fileAbsolutePath: {regex : "\/_posts/art/"}
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