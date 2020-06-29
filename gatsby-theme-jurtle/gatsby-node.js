const path = require('path');
const fs = require("fs")
const { createFilePath } = require("gatsby-source-filesystem");
// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = "src/posts"
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if(node.internal.type === 'Mdx' ) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value: `/blog${value}`,
    })
  }
}

exports.createPages =  async({ graphql, actions, reporter }) => {
  const { createPage  } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/posts-page-layout.tsx`),
      context: { id: node.id }
    })
  })
}
