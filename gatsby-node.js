/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve(`src/templates/Blog.js`);
  const artTemplate = path.resolve(`src/templates/Art.js`);
  return graphql(`
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
        filter: { fileAbsolutePath: {regex : "\/_posts/art/"} }
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
    }
  `).then(result => {

    if (result.errors) {
      return Promise.reject(result.errors)
    }

    // Create blog pages
    result.data.blogs.edges.forEach(({ node }) => {
      createPage({
        path: '/' + node.frontmatter.title.toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-'),
        component: blogTemplate,
        context: {
          title: node.frontmatter.title,
        }, // additional data can be passed via context
      })
    });

    // Create art pages
    result.data.art.edges.forEach(({ node }) => {
      createPage({
        path: '/' + node.frontmatter.title.toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-'),
        component: artTemplate,
        context: {
          title: node.frontmatter.title,
        }, // additional data can be passed via context
      })
    });

  })
};

