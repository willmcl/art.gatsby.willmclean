import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/organisms/Layout';
import BlogArtPosts from '../components/organisms/BlogArtPosts';
import styled from 'styled-components';

const Holder = styled.article`
  margin-bottom: 8rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  align-items: start;
  grid-auto-flow: dense;
  @media ( ${props => props.theme.breakpoints.md} ) {
    grid-template-columns: 1fr 1fr;
  }
  .text {
    @media ( ${props => props.theme.breakpoints.md} ) {
      grid-column: 2/3;
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
          <p>{frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: html }}/>
        </div>
        <BlogArtPosts art={frontmatter.art}/>
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