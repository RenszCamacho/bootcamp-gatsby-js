import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"

function templateBlog({ data }) {
  return (
    <Layout>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.frontmatter.date}</p>
      {/* <div dangerouslySetInnerHTML={{ __html: data.mdx.body }}></div> */}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
    }
  }
`

export default templateBlog
