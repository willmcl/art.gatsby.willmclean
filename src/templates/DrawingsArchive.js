import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/organisms/Layout';
import ArtworkPreview from '../components/molecules/ArtworkPreview';
import SEO from '../components/molecules/SEO';
import Pagination from '../components/organisms/Pagination';
import GridLayout from '../components/molecules/GridLayout';

class DrawingsArchive extends Component {

  render() {

    return (
      <Layout>
        <SEO title="Drawings"/>
        <article>
          <GridLayout>
            {this.props.data.allContentfulArtwork.edges.map( edge => (
              <ArtworkPreview key={edge.node.id} post={edge.node}/>
            ) )}
          </GridLayout>
          <Pagination base="drawings" pageContext={this.props.pageContext}/>
        </article>
      </Layout>
    )
  }
}

export default DrawingsArchive;

export const drawingsArchiveQuery = graphql`
    query drawingsArchiveQuery($skip: Int!, $limit: Int!) {
        allContentfulArtwork(
            sort: {fields: [date], order: DESC}
            limit: $limit
            skip: $skip
            filter: {includeInDrawings: {eq: true}}
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
