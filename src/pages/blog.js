import React, { Component } from 'react';
import Layout from '../components/organisms/Layout';
import styled from 'styled-components';
import BlogPreview from '../components/molecules/BlogPreview';
import SEO from '../components/molecules/SEO';

const List = styled.ul`
      list-style: none;
      padding-left: 0;
`;

class Blog extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Blog"/>
        <article>
          <List>
            {this.props.data.allMarkdownRemark.edges.map( edge => (
              <BlogPreview key={edge.node.id} post={edge.node}/>
            ) )}
          </List>
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