import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

function Index() {
  return (
    <Layout>
      <h1>Hello</h1>
      <p>I am Renszo</p>
      <p>
        Need a developer? <Link to="/contact">Contactame Me</Link>
      </p>
    </Layout>
  )
}

export default Index
