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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: blue;
`

function Navbar() {
  return (
    <Nav>
      <div>
        <StyledLink to="/">Renszo</StyledLink>
      </div>
      <List>
        <Items>
          <StyledLink to="/">Home</StyledLink>
        </Items>
        <Items>
          <StyledLink to="/about">About</StyledLink>
        </Items>
        <Items>
          <StyledLink to="/contact">Contact</StyledLink>
        </Items>
        <Items>
          <StyledLink to="/blog">Blog</StyledLink>
        </Items>
      </List>
    </Nav>
  )
}

export default Navbar
