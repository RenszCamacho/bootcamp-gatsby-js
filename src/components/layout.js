import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`

function Layout({ children }) {
  return (
    <Wrapper>
      <Navbar />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Layout
