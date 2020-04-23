import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/organisms/Layout';
import ArtworkPreview from '../components/molecules/ArtworkPreview';
import styled from 'styled-components';
import SEO from '../components/molecules/SEO';
import Intro from '../components/molecules/Intro';

const Holder = styled.div`
    display: grid;
    margin-top: 8rem;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    @media ( ${props => props.theme.breakpoints.md} ) {
      grid-template-columns: repeat(2, 1fr);
    }
`;

const GridInner = styled.div`
  width: 100%;
  padding: 4rem;
  @media ( ${props => props.theme.breakpoints.md} ) {
    padding: 10rem;
  }
`;

class ArtArchive extends Component {

  render() {

    return (
      <Layout>
        <SEO title="Will McLean"/>
        <article>
          <Intro/>
          <Holder>
            {this.props.data.contentfulPage.artworks.map( artwork => (
              <GridInner>
                <ArtworkPreview key={artwork.id} post={artwork}/>
              </GridInner>
            ) )}
          </Holder>
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
