import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

class PostList extends Component {
  render() {
    return (
      <div className="PostList">
        <p>This is the post list.</p>
        <StaticQuery
          query={graphql`
            query PostListQuery {
            allMarkdownRemark(
              sort: {
                fields: [frontmatter___date]
                order: DESC
              }
            ){
              edges {
                node{
                  frontmatter {
                    title
                    thumbnail
                    rating
                    date
                  }
                }
              }
            }
          }`}
          render={data => {
            console.log( data );
            return (
              data.allMarkdownRemark.edges.map( edge => (
                <p>{edge.node.frontmatter.title}</p>
              ) )
            )
          }}/>
      </div>
    )
  }
}

export default PostList;