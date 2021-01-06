import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const List = styled.ul`
  display: flex;
`
const Items = styled.li`
  padding: 20px;
  list-style: none;
`

function Navbar() {
  return (
    <Nav>
      <div>
        <Link to="/">Renszo</Link>
      </div>
      <List>
        <Items>
          <Link to="/">Home</Link>
        </Items>
        <Items>
          <Link to="/about">About</Link>
        </Items>
        <Items>
          <Link to="/contact">Contact</Link>
        </Items>
        <Items>
          <Link to="/blog">Blog</Link>
        </Items>
      </List>
    </Nav>
  )
}

export default Navbar
