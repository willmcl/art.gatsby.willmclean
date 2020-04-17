import React, { Component } from 'react';
import Layout from '../components/organisms/Layout';
import styled from 'styled-components';
import BlogPreview from '../components/molecules/BlogPreview';
import SEO from '../components/molecules/SEO';

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 8rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  @media ( ${props => props.theme.breakpoints.sm} ) {
    grid-template-columns: 1fr 4fr 1fr;
  }
  @media ( ${props => props.theme.breakpoints.md} ) {
    grid-template-columns: 1fr 2fr 1fr;
  }
`;

class Blog extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Blog"/>
        <article>
          <List>
            {this.props.data.allContentfulBlog.edges.map( ( edge, i ) => (
              <BlogPreview key={edge.node.id} post={edge.node} i={i}/>
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
        allContentfulBlog(sort: {fields: createdAt, order: DESC}) {
            edges {
                node {
                    id
                    title
                    artworks {
                        id
                        image {
                            fluid(maxWidth: 200) {
                                sizes
                                src
                                srcSet
                                aspectRatio
                            }
                        }
                    }
                }
            }
        }
    }
`
