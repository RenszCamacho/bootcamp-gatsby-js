import React from "react"
import { Link } from "gatsby"

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">Renszo</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
