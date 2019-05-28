import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/organisms/Layout';
import Image from '../components/elements/Image';
import styled from 'styled-components';
import moment from 'moment';

const Holder = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  @media ( ${props => props.theme.breakpoints.md} ) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

const Content = styled.section`
  p { margin: 0.5rem 0; }
  @media ( ${props => props.theme.breakpoints.md} ) {
    grid-column: 3/4;
    margin-top: 12rem;
  }
  > :first-child { margin-top: 0 }
  > :last-child { margin-bottom: 0 }
`;

export default function Template( { data } ) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Holder>
        <Image imgName={frontmatter.thumbnail}/>
        <Content>
          <h1>{frontmatter.title}</h1>
          <p>{moment(frontmatter.date).format('YYYY')}</p>
          <p>{frontmatter.material}</p>
          <p>{frontmatter.width} x {frontmatter.height}</p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Content>
      </Holder>
    </Layout>
  )
}

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