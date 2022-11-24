import { ContainerSection, TitleSection } from '@styles/theme.config'
import styled from 'styled-components'

export const Wrapper = styled(ContainerSection)``

export const Title = styled(TitleSection)``

export const Content = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`
export const Infor = styled.div`
  @media (max-width: 768px) {
    margin-top: -5rem;
  }
`

export const TokenName = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  margin-top: 5.5rem;
  margin-bottom: 1rem;
`
export const Properties = styled.div`
  padding: 0.5rem 2.5rem;
  &.allocation {
    font-weight: 700;
    margin-top: 3rem;
  }
  &:nth-child(ODD) {
    background: linear-gradient(90deg, #18273b 0%, rgba(24, 39, 59, 0) 99.87%);
  }
  span {
    &:last-child {
      margin-left: 0.5rem;
    }
  }
`
