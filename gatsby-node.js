/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/Blog.js`);
  return graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: {regex : "\/_posts/blog/"} }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
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
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: '/' + node.frontmatter.title.toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-'),
        component: postTemplate,
        context: {
          title: node.frontmatter.title,
        }, // additional data can be passed via context
      })
    })
  })
};

