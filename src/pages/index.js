import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/organisms/Layout';
import ArtworkPreview from '../components/molecules/ArtworkPreview';
import SEO from '../components/molecules/SEO';
import Intro from '../components/molecules/Intro';
import GridLayout from '../components/molecules/GridLayout';

class ArtArchive extends Component {

  render() {

    return (
      <Layout>
        <SEO title="Will McLean"/>
        <article>
          <Intro/>
          <GridLayout>
            {this.props.data.contentfulPage.artworks.map( artwork => (
              <ArtworkPreview key={artwork.id} post={artwork}/>
            ) )}
          </GridLayout>
        </article>
      </Layout>
    )
  }
}

export default ArtArchive;

export const frontPageQuery = graphql`
    query {
        contentfulPage(title: {eq: "Frontpage"}) {
            title
            artworks {
                id
                title
                createdAt
                buy
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
`;
