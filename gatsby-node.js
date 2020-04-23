/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = ( { actions, graphql } ) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve( `src/templates/BlogTemplate.js` );
  const artTemplate = path.resolve( `src/templates/ArtworkTemplate.js` );
  return graphql( `
    {
      blogs: allContentfulBlog(
        sort: {
          fields: [createdAt]
          order: DESC
        }
      ){
        edges {
          node{
            id
            title
          }
        }
      }
      art: allContentfulArtwork(
        sort: { 
          order: DESC, 
          fields: [date] 
        }
        limit: 1000
      ) {
        edges {
          node {
            id
            title
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
        path: '/blog/' + node.title.toLowerCase()
        .replace( /[^\w ]+/g, '' )
        .replace( / +/g, '-' ),
        component: blogTemplate,
        context: {
          title: node.title,
        }, // additional data can be passed via context
      } )
    } );

    // Create art pages
    const artPosts = result.data.art.edges;
    artPosts.forEach( ( { node }, i, array ) => {
      createPage( {
        path: '/art/' + node.id,
        component: artTemplate,
        context: {
          id: node.id,
          next: array[i + 1],
          prev: array[i - 1],
        },
      } )
    } );

    // Create art-list pages
    const posts = result.data.art.edges;
    const postsPerPage = 2;
    const numPages = Math.ceil( posts.length / postsPerPage );
    Array.from( { length: numPages } ).forEach( ( _, i ) => {
      createPage( {
        path: i === 0 ? `/archive` : `/archive/${i + 1}`,
        component: path.resolve( './src/templates/ArtArchive.js' ),
        context: { limit: postsPerPage, skip: i * postsPerPage, numPages, currentPage: i + 1, },
      } )
    } )

  } )
};

