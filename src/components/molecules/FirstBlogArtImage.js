import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from '../elements/Image';

class FirstBlogArtImage extends Component {
    render() {
      if ( this.props.art ) {
        return (
          <StaticQuery
            query={graphql`
            query FirstBlogArtImage {
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
              const work = data.allMarkdownRemark.edges.filter(
                edge => this.props.art[0] === edge.node.frontmatter.title
              );
              console.log(work[0]);
              if ( work && work[0] ) {
                return (
                  <Image
                    imgName={work[0].node.frontmatter.thumbnail}
                    sizes="(min-width: 992px) 25vw, (min-width: 768px) 35vw, 50vw"/>
                )
              } else {
                return null;
              }
            }}
          />
        )
      } else {
        return null;
      }
    }
}

export default FirstBlogArtImage;