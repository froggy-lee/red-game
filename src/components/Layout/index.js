import React from 'react'
import styled from 'styled-components'
// import HeaderDesktop from './Header'
import { Container } from 'reactstrap'

import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('./Header'), {
  ssr: false
})

const LandingLayout = ({ children }) => {
  return (
    <Container fluid>
      <DynamicHeader />
      <Main>{children}</Main>
    </Container>
  )
}

export default LandingLayout

const Main = styled.main``
