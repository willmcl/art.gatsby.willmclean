import React, { Component } from 'react';
import { Link } from 'gatsby';
import Image from '../elements/Image';
import { convertToSlug } from '../../utils/helpers';
import styled from 'styled-components';

const ListItem = styled.li`
  img {
    width: 100%;
    height: auto;
  }
`;

class ArtPreview extends Component {
  render() {
    return (
      <ListItem>
        <Link to={convertToSlug( this.props.post.frontmatter.title )}>
          <Image
            imgName={this.props.post.frontmatter.thumbnail}
            sizes="(min-width: 992px) 25vw, (min-width: 768px) 35vw, 50vw"/>
        </Link>
      </ListItem>
    )
  }
}

export default ArtPreview;