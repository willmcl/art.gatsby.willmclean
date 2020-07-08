import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/organisms/Layout';
import ArtworkPreview from '../components/molecules/ArtworkPreview';
import styled from 'styled-components';
import SEO from '../components/molecules/SEO';
import Pagination from '../components/organisms/Pagination';

const Holder = styled.div`
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
      grid-template-columns: repeat(6, 1fr);
    }
`;

class ArtArchive extends Component {

  render() {

    return (
      <Layout>
        <SEO title="Art"/>
        <article>
          <Holder>
            {this.props.data.allContentfulArtwork.edges.map( edge => (
              <ArtworkPreview key={edge.node.id} post={edge.node}/>
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
        allContentfulArtwork(
            sort: {fields: [createdAt], order: ASC}
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    title
                    createdAt
                    image {
                        fluid(maxWidth: 1000) {
                            sizes
                            src
                            srcSet
                            aspectRatio
                        }
                    }
                }
            }
        }
    }
`;
