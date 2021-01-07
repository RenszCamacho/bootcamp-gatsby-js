import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import GlobalStyle from "../components/globalStyle"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: blue;
`

function Index() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <Layout>
      <GlobalStyle />
      <Container>
        <h1>{data.site.siteMetadata.title}</h1>
        <p>I am {data.site.siteMetadata.author}</p>
        <p>
          Need a developer? <StyledLink to="/contact">Contactame Me</StyledLink>
        </p>
      </Container>
    </Layout>
  )
}

// export const data = graphql`
//   query Index {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//   }
// `

export default Index
