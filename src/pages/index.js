import React from "react"
import { Link } from "gatsby"
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

function Index() {
  return (
    <Layout>
      <GlobalStyle />
      <Container>
        <h1>Hello</h1>
        <p>I am Renszo</p>
        <p>
          Need a developer? <Link to="/contact">Contactame Me</Link>
        </p>
      </Container>
    </Layout>
  )
}

export default Index
