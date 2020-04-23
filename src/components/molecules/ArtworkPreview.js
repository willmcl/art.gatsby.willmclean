import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ListItem = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

class ArtworkPreview extends Component {
  render() {
    return (
      <ListItem>
        <Link to={`/art/${this.props.post.id}`}>
          <Img fluid={this.props.post.image.fluid}/>
        </Link>
      </ListItem>
    )
  }
}

export default ArtworkPreview;
