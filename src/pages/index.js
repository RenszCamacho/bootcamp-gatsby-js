import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

function Index() {
  return (
    <div>
      <Navbar />
      <h1>Hello</h1>
      <p>I am Renszo</p>
      <p>
        Need a developer? <Link to="/contact">Contactame Me</Link>
      </p>
      <Footer />
    </div>
  )
}

export default Index
