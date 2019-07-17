/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ( { actions, graphql } ) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve( `src/templates/Blog.js` );
  const artTemplate = path.resolve( `src/templates/Art.js` );
  return graphql( `
    {
      blogs: allMarkdownRemark(
        filter: { fileAbsolutePath: {regex : "\/_posts/blog/"} }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
      art: allMarkdownRemark(
        filter: { 
          fileAbsolutePath: {regex : "\/_posts/art/"} 
          frontmatter:{ rating: { gte: 2} }
        }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              rating
            }
          }
        }
      }
    }
  ` ).then( result => {

    if ( result.errors ) {
      return Promise.reject( result.errors )
    }

    // Create blog pages
    result.data.blogs.edges.forEach( ( { node } ) => {
      createPage( {
        path: '/blog/' + node.frontmatter.title.toLowerCase()
        .replace( /[^\w ]+/g, '' )
        .replace( / +/g, '-' ),
        component: blogTemplate,
        context: {
          title: node.frontmatter.title,
        }, // additional data can be passed via context
      } )
    } );

    // Create art pages
    const artPosts = result.data.art.edges;
    artPosts.forEach( ( { node }, i, array ) => {
      createPage( {
        path: '/art/' + node.frontmatter.title.toLowerCase()
        .replace( /[^\w ]+/g, '' )
        .replace( / +/g, '-' ),
        component: artTemplate,
        context: {
          title: node.frontmatter.title,
          next: array[i + 1],
          prev: array[i - 1],
        },
      } )
    } );

    // Create art-list pages
    const posts = result.data.art.edges;
    const postsPerPage = 180;
    const numPages = Math.ceil( posts.length / postsPerPage );
    Array.from( { length: numPages } ).forEach( ( _, i ) => {
      createPage( {
        path: i === 0 ? `/` : `/${i + 1}`,
        component: path.resolve( './src/templates/ArtArchive.js' ),
        context: { limit: postsPerPage, skip: i * postsPerPage, numPages, currentPage: i + 1, },
      } )
    } )

  } )
};

