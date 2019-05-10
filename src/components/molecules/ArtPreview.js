import React, { Component } from 'react';
import { Link } from "gatsby";
import Image from '../elements/Image';

class ArtPreview extends Component {
    render() {
        return (
            <li>
              <Link to={this.props.post.frontmatter.path}>
                <Image imgName={this.props.post.frontmatter.thumbnail}/>
              </Link>
            </li>
        )
    }
}

export default ArtPreview;