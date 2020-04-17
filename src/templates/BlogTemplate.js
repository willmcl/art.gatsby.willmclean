import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/organisms/Layout';
import BlogArtPosts from '../components/organisms/BlogArtPosts';
import styled from 'styled-components';
import CircleText from '../components/elements/CircleText';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import moment from 'moment';

const Holder = styled.article`
  margin-bottom: 8rem;
  margin-top: 8rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  align-items: start;
  grid-auto-flow: dense;
  @media ( ${props => props.theme.breakpoints.sm} ) {
    grid-template-columns: 1fr 2fr 1fr;
  }
  @media ( ${props => props.theme.breakpoints.lg} ) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .text {
    @media ( ${props => props.theme.breakpoints.sm} ) {
      grid-column: 2/3;
    }
    h1 { display: none; }
    .titleHolder {
      margin: 0 6rem;
      @media ( ${props => props.theme.breakpoints.sm} ) {
        margin: 0;
      }
    }
    .h6 { 
      text-align: center; 
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
  .images {
    @media ( ${props => props.theme.breakpoints.sm} ) {
      grid-column: 1/4;
    }
  }
`;

class BlogTemplate extends Component {
  render() {
    const { title, createdAt, content, artworks } = this.props.data.contentfulBlog;
    return (
      <Layout>
        <Holder>
          <div className="text">
            <h1>{title}</h1>
            <div className="titleHolder">
              <CircleText text={title}/>
            </div>
            <p className="h6">{moment( createdAt ).format( 'YYYY' )}</p>
            <div>{documentToReactComponents(content.json)}</div>
          </div>
          <section className="images">
            <BlogArtPosts artworks={artworks}/>
          </section>
        </Holder>
      </Layout>
    )
  }
}

export default BlogTemplate;

export const pageQuery = graphql`
    query($title: String!) {
        contentfulBlog(title: { eq: $title }) {
            title
            createdAt
            content {
                json
            }
            artworks {
                id
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
