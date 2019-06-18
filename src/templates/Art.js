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
    grid-template-columns: 1fr 2fr 1fr;
  }
`;

const Content = styled.section`
  margin-bottom: 8rem;
  h1, p { margin: 0; }
  @media ( ${props => props.theme.breakpoints.md} ) {
    grid-column: 2/3;
  }
  .text {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 0.5rem;
    margin-top: 2rem;
    > :nth-child(even) { text-align: right; }
    .description {
      grid-column: 1/3;
      margin-top: 2rem;
    }
  }
`;

export default function Template( { data } ) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Holder>
        <Content>
          <Image imgName={frontmatter.thumbnail}/>
          <div className="text">
            <h1>{frontmatter.title}</h1>
            <p>{moment( frontmatter.date ).format( 'YYYY' )}</p>
            <p>{frontmatter.material}</p>
            <p>{frontmatter.width} x {frontmatter.height}</p>
            <div className="description" dangerouslySetInnerHTML={{ __html: html }}/>
          </div>
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