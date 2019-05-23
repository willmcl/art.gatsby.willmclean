import React, { Component } from 'react';
import { Link } from "gatsby";
import Image from '../elements/Image';
import { convertToSlug } from '../../utils/helpers';

class ArtPreview extends Component {
    render() {
        return (
            <li>
              <Link to={convertToSlug(this.props.post.frontmatter.title)}>
                <Image imgName={this.props.post.frontmatter.thumbnail}/>
              </Link>
            </li>
        )
    }
}

export default ArtPreview;