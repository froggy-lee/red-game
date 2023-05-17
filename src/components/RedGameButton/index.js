import React from 'react'
import styled from 'styled-components'

const RedGameButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

export default RedGameButton

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 0.5rem;

  min-width: 75px;
  padding: 0.5rem 1rem;

  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.whiteColor};

  background: ${({ theme }) => theme.blueColor};
  box-shadow: 0px 4px 0px #224e7b;
  border-radius: 5.6338px;
`
