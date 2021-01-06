import React from "react"
import styled from "styled-components"

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
  return (
    <Foot>
      <p>&copy; 2021 All right reserved</p>
    </Foot>
  )
}

export default Footer
