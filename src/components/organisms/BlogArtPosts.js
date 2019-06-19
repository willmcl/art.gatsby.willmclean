import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ArtPreview from '../molecules/ArtPreview';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 8rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  @media ( ${props => props.theme.breakpoints.sm} ) {
    grid-template-columns: 1fr 1fr;
  }
`;

class BlogArtPosts extends Component {

  render() {
    if ( this.props.art ) {
      return (
        <StaticQuery
          query={graphql`
            query BlogArtPostsQuery {
            allMarkdownRemark(
              filter: {
                  fileAbsolutePath: {regex : "\/_posts/art/"}
              }
            ){
              edges {
                node{
                  id
                  frontmatter {
                    title
                    thumbnail
                  }
                }
              }
            }
          }`}
          render={data => {
            const works = data.allMarkdownRemark.edges.filter(
              edge => this.props.art.includes( edge.node.frontmatter.title )
            );
            if ( !works ) {
              return null
            }
            return (
              <List>
                {works.map( edge => (
                  <ArtPreview key={edge.node.id} post={edge.node}/>
                ) )}
              </List>
            )
          }}
        />
      )
    } else {
      return null
    }
  }
}

export default BlogArtPosts;