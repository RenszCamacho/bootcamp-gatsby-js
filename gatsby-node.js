const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.
  if (node.internal.type === "Mdx") {
    // console.log(JSON.stringify(node, undefined, 4))
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPages } = actions

//   // 1.Get path to template
//   const blogTemplate = path.resolve("./src/templates/templateBlog.js")
//   const res = await graphql`
//     query {
//       allMdx {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `
//   res.allMdx.edges.map(edge => {
//     createPages({
//       components: blogTemplate,
//       path: `/blog/${edges.node.fields.slug}`,
//       context: {
//         slug: edge.node.fields.slug,
//       },
//     })
//   })
// }
