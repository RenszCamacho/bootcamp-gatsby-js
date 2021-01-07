import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const Foot = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
`

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <Foot>
      <p>&copy; 2021 All right reserved {data.site.siteMetadata.author}</p>
    </Foot>
  )
}

export default Footer
