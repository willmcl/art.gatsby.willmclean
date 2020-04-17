import React, { Component } from 'react';
import ArtworkPreview from '../molecules/ArtworkPreview';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 8rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  @media(${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
  }
  @media(${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

class BlogArtPosts extends Component {

  render() {
    if ( this.props.artworks ) {
      return (
        <List>
          {this.props.artworks.map( edge => (
            <ArtworkPreview key={edge.id} post={edge}/>
          ) )}
        </List>
      )
    } else {
      return null
    }
  }
}

export default BlogArtPosts;
