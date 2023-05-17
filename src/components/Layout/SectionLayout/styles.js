import styled from 'styled-components'
import { ContainerSection } from '@styles/theme.config'

export const Layout = styled.div`
  position: relative;
  width: 100%;
`

export const Container = styled(ContainerSection)``

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
`

export const Title = styled.h1`
  font-family: 'Arial Black';
  font-style: normal;
  font-weight: 900;
  font-size: clamp(25px, 4vw, 41px);
`

export const Description = styled.h2`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: clamp(14px, 2vw, 20px);

  max-width: 725px;
`

export const Content = styled.div``
