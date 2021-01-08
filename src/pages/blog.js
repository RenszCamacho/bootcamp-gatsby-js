import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog</h1>
      <p>
        {data.allMdx.edges.map(edges => {
          return (
            <ol>
              <h2>{edges.node.frontmatter.title}</h2>
              <p>{edges.node.frontmatter.date}</p>
            </ol>
          )
        })}
      </p>
    </Layout>
  )
}

export default Blog
