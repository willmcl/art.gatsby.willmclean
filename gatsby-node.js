/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = ( { actions, graphql } ) => {
  const { createPage } = actions;
  const artTemplate = path.resolve( `src/templates/ArtworkTemplate.js` );
  return graphql( `
    {
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
    const postsPerPage = 60;
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

