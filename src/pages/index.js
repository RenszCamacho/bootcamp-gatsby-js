import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const Container = styled.div`
  background: red;
`

function Index() {
  return (
    <Layout>
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
