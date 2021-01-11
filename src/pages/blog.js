import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

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
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMdx.edges.map(edges => {
          return (
            <Link to={`/blog/${edges.node.fields.slug}`}>
              <li>
                <h2>{edges.node.frontmatter.title}</h2>
                <p>{edges.node.frontmatter.date}</p>
              </li>
            </Link>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
