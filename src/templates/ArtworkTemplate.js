import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/organisms/Layout';
import styled, { keyframes } from 'styled-components';
import Img from 'gatsby-image';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Holder = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  @media ( ${props => props.theme.breakpoints.md} ) {
    grid-template-columns: 1fr 2fr 1fr;
  }
`;

const Content = styled.section`
  margin-top: 8rem;
  margin-bottom: 8rem;
  h1, p { margin: 0; }
  @media ( ${props => props.theme.breakpoints.md} ) {
    grid-column: 2/3;
  }
  img {
    width: 100%;
    height: auto;
    animation: ${fadeIn} 0.1s linear 0.25s 1 normal both;
  }
  .text {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 0.5rem;
    margin-top: 2rem;
    animation: ${fadeIn} 0.1s linear 0.25s 1 normal both;
    > :nth-child(even) { text-align: right; }
  }
`;

const Pagination = styled.nav`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: ${props => props.prev ? "flex-start" : "flex-end"};
  animation: ${fadeIn} 0.1s linear 0.25s 1 normal both;
  p {
    margin: 0;
    transform: translateX(${props => props.prev ? "-2rem" : "2rem"}) rotate(${props => props.prev ? 270 : 90}deg);
    transform-origin: center;
  }
`;

class ArtworkTemplate extends Component {

  render() {
    const { contentfulArtwork } = this.props.data;
    const { title, image, date, material, width, height, buy } = contentfulArtwork;
    const { prev, next } = this.props.pageContext;
    return (
      <Layout>
        <Holder>
          <Pagination prev>
            {prev && (
              <p>
                <Link to={`/art/${prev.node.id}`} rel="prev">Newer</Link>
              </p>
            )}
          </Pagination>
          <Content>
            <Img fluid={image.fluid}/>
            <div className="text">
              <h1>{title}</h1>
              <p>{date}</p>
              <p>{material}</p>
              <p>{width && height && `${width}cm x ${height}cm`}</p>
              {buy && <p><a href={buy} target="_blank" rel="noopener noreferrer">Buy</a></p>}
            </div>
          </Content>
          <Pagination>
            {next && (
              <p>
                <Link to={`/art/${next.node.id}`} rel="next">Older</Link>
              </p>
            )}
          </Pagination>
        </Holder>
      </Layout>
    )
  }
}

export default ArtworkTemplate;

export const pageQuery = graphql`
    query($id: String!) {
        contentfulArtwork(id: { eq: $id }) {
            title
            createdAt
            material
            width
            height
            date(formatString: "YYYY")
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
`;
