import React from "react"
import { Link } from "gatsby"

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        I am Renszo Camacho. I am a UI / UX Designer & Web Developer, and I'm
        very passionate and dedicated to my work. With 5 years experience as a
        professional graphic designer, I have acquired the skills and knowledge
        necessary to make your project a success.
      </p>

      <p>
        Need a developer? <Link to="/contact">Contactame Me</Link>
      </p>
    </div>
  )
}

export default About
