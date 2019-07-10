import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/organisms/Layout';
import BlogArtPosts from '../components/organisms/BlogArtPosts';
import styled from 'styled-components';
import CircleText from '../components/elements/CircleText';

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

export default function Template( {
                                    data, // this prop will be injected by the GraphQL query below.
                                  } ) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Holder>
        <div className="text">
          <h1>{frontmatter.title}</h1>
          <div className="titleHolder">
            <CircleText text={frontmatter.title}/>
          </div>
          <p className="h6">{frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: html }}/>
        </div>
        <section className="images">
          <BlogArtPosts art={frontmatter.art}/>
        </section>
      </Holder>
    </Layout>
  )
}

export const pageQuery = graphql`
    query($title: String!) {
        markdownRemark(frontmatter: { title: { eq: $title } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                art
            }
        }
    }
`;