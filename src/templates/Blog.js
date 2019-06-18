import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/organisms/Layout';
import styled from 'styled-components';

const Holder = styled.article`
  margin-bottom: 8rem;
  @media ( ${props => props.theme.breakpoints.md} ) {
    margin-left: 50%;
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
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }}/>
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
            }
        }
    }
`;