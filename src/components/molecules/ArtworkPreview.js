import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ListItem = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
`;

const BuyText = styled.small`
  display: block;
  text-align: right;
  margin-top: 1rem;
  font-size: 1rem;
`;



class ArtworkPreview extends Component {
  render() {
    return (
      <ListItem>
        <Link to={`/art/${this.props.post.id}`}>
          {this.props.post.image && <Img fluid={this.props.post.image.fluid}/>}
        </Link>
        {this.props.post.buy && <BuyText><a href={this.props.post.buy} target="_blank" rel="noopener noreferrer">Buy &rarr;</a></BuyText>}
      </ListItem>
    )
  }
}

export default ArtworkPreview;
