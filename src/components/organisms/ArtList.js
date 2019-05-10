import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ArtPreview from '../molecules/ArtPreview';

class ArtList extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
            query ArtPostListQuery {
            allMarkdownRemark(
              filter: {
                  fileAbsolutePath: {regex : "\/_posts/art/"}
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
          }`}
        render={data => {
          return (
            <>
              {data.allMarkdownRemark.edges.map( edge => (
                <ArtPreview key={edge.node.id} post={edge.node}/>
              ) )}
            </>
          )
        }}/>
    )
  }
}

export default ArtList;