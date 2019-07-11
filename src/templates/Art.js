import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/organisms/Layout';
import Image from '../components/elements/Image';
import styled, { keyframes } from 'styled-components';
import moment from 'moment';
import { convertToSlug } from '../utils/helpers';

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
    .description {
      grid-column: 1/3;
      margin-top: 2rem;
    }
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

class Art extends Component {

  componentDidMount() {
    console.log( this.props.pageContext );
  }

  render() {
    const { markdownRemark } = this.props.data;
    const { frontmatter, html } = markdownRemark;
    const { prev, next } = this.props.pageContext;
    return (
      <Layout>
        <Holder>
          <Pagination prev>
            {prev && (
              <p>
                <Link to={`/art/${convertToSlug( prev.node.frontmatter.title )}`} rel="prev">Newer</Link>
              </p>
            )}
          </Pagination>
          <Content>
            <Image
              imgName={frontmatter.thumbnail}
              sizes="(min-width: 768px) 50vw, 100vw"/>
            <div className="text">
              <h1>{frontmatter.title}</h1>
              <p>{moment( frontmatter.date ).format( 'YYYY' )}</p>
              <p>{frontmatter.material}</p>
              <p>{frontmatter.width} x {frontmatter.height}</p>
              {html && (
                <div className="description" dangerouslySetInnerHTML={{ __html: html }}/>
              )}
            </div>
          </Content>
          <Pagination>
            {next && (
              <p>
                <Link to={`/art/${convertToSlug( next.node.frontmatter.title )}`} rel="next">Older</Link>
              </p>
            )}
          </Pagination>
        </Holder>
      </Layout>
    )
  }
}

export default Art;

export const pageQuery = graphql`
    query($title: String!) {
        markdownRemark(frontmatter: { title: { eq: $title } }) {
            html
            frontmatter {
                title
                date
                thumbnail
                material
                width
                height
            }
        }
    }
`;