import React from 'react'
import styled from 'styled-components'

export default function Buttons() {
  return (
    <LoginButton>
      Login
    </LoginButton>
  )
}


const LoginButton = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`