import React, { Component } from 'react';
import Layout from '../components/organisms/Layout';
import styled from 'styled-components';
import BlogPreview from '../components/molecules/BlogPreview';

const Holder = styled.ul`
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
    @media ( ${props => props.theme.breakpoints.md} ) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media ( ${props => props.theme.breakpoints.lg} ) {
      grid-template-columns: repeat(4, 1fr);
    }
`;

class Blog extends Component {
  render() {
    return (
      <Layout>
        <article>
          <header>
            <h1>Blog</h1>
          </header>
          <Holder>
            {this.props.data.allMarkdownRemark.edges.map( edge => (
              <BlogPreview key={edge.node.id} post={edge.node}/>
            ) )}
          </Holder>
        </article>
      </Layout>
    )
  }
}

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex : "\/_posts/blog/"}
      }
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
    ){
      edges {
        node{
          id
          frontmatter {
            title
            date
            path
            thumbnail
          }
        }
      }
    }
  }
`