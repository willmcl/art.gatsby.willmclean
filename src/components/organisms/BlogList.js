import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import BlogPreview from '../molecules/BlogPreview';

class BlogList extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
            query BlogListQuery {
            allMarkdownRemark(
              filter: {
                fileAbsolutePath: {regex : "\/_posts/blog/"}
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
                <BlogPreview key={edge.node.id} post={edge.node}/>
              ) )}
            </>
          )
        }}/>
    )
  }
}

export default BlogList;