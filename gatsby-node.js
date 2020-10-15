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
      drawings: allContentfulArtwork(
        sort: { 
          order: DESC, 
          fields: [date] 
        }
        limit: 1000
        filter: {includeInDrawings: {eq: true}}
      ) {
        edges {
          node {
            id
            title
          }
        }
      }
      paintings: allContentfulArtwork(
        sort: { 
          order: DESC, 
          fields: [date]
        }
        limit: 1000
        filter: {includeInPaintings: {eq: true}}
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

    // Create art-archive pages
    const artArchivePosts = result.data.art.edges;
    const artArchivePostsPerPage = 60;
    const artArchiveNumPages = Math.ceil( artArchivePosts.length / artArchivePostsPerPage );
    Array.from( { length: artArchiveNumPages } ).forEach( ( _, i ) => {
      createPage( {
        path: i === 0 ? `/archive` : `/archive/${i + 1}`,
        component: path.resolve( './src/templates/ArtArchive.js' ),
        context: { limit: artArchivePostsPerPage, skip: i * artArchivePostsPerPage, numPages: artArchiveNumPages, currentPage: i + 1, },
      } )
    } );

    // Create painting-archive pages
    const paintingArchivePosts = result.data.paintings.edges;
    const paintingArchivePostsPerPage = 60;
    const paintingArchiveNumPages = Math.ceil( paintingArchivePosts.length / paintingArchivePostsPerPage );
    Array.from( { length: paintingArchiveNumPages } ).forEach( ( _, i ) => {
      createPage( {
        path: i === 0 ? `/paintings` : `/paintings/${i + 1}`,
        component: path.resolve( './src/templates/PaintingsArchive.js' ),
        context: { limit: paintingArchivePostsPerPage, skip: i * paintingArchivePostsPerPage, numPages: paintingArchiveNumPages, currentPage: i + 1, },
      } )
    } );

    // Create drawing-archive pages
    const drawingArchivePosts = result.data.drawings.edges;
    const drawingArchivePostsPerPage = 60;
    const drawingArchiveNumPages = Math.ceil( drawingArchivePosts.length / drawingArchivePostsPerPage );
    Array.from( { length: drawingArchiveNumPages } ).forEach( ( _, i ) => {
      createPage( {
        path: i === 0 ? `/drawings` : `/drawings/${i + 1}`,
        component: path.resolve( './src/templates/DrawingsArchive.js' ),
        context: { limit: drawingArchivePostsPerPage, skip: i * drawingArchivePostsPerPage, numPages: drawingArchiveNumPages, currentPage: i + 1, },
      } )
    } );

  } )
};

