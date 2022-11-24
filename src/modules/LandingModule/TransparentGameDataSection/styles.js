import styled from 'styled-components'
import SectionLayout from '@components/Layout/SectionLayout'
import { SectionItem } from '@components'

export const Section = styled(SectionLayout)`
  background: ${({ theme }) => theme.secondBg};
`

export const Wrapper = styled.div`
  padding-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`

export const ItemWrapper = styled(SectionItem)`
  width: 100%;
  max-width: 365px;

  &.transparent__item {
    &:nth-child(2n) {
      margin: auto;
    }
  }
`

export const Item = styled.div``
