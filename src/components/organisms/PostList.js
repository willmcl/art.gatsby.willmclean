import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PostLink from '../molecules/PostLink';

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
                  id
                  frontmatter {
                    title
                    date
                    path
                  }
                }
              }
            }
          }`}
          render={data => {
            return (
              <ul>
                {data.allMarkdownRemark.edges.map( edge => (
                <PostLink key={edge.node.id} post={edge.node}/>
                ) )}
              </ul>
            )
          }}/>
      </div>
    )
  }
}

export default PostList;