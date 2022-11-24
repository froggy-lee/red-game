import styled from 'styled-components'
import SectionLayout from '@components/Layout/SectionLayout'
import { SectionItem } from '@components'

export const Section = styled(SectionLayout)`
  background: ${({ theme }) => theme.secondBg};

  .section__description {
    font-size: clamp(12px, 2vw, 14px);
  }
`

export const Wrapper = styled.div`
  padding-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`

export const Item = styled(SectionItem)`
  width: 100%;
  max-width: 365px;

  &.roadmap__item {
    &:nth-child(2n) {
      margin: auto;
    }
  }
`

export const RoadmapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
`

export const RoadmapItem = styled.div`
  position: relative;
  padding: 0 2rem;
  max-width: 425px;
`

export const Status = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: ${({ theme }) => theme.blackColor};
  border-radius: 50%;

  left: 0;
  transform: translateY(50%);

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 75%;
    height: 75%;
    border-radius: inherit;
    background: ${({ theme }) => theme.blueColor};
    opacity: ${props => (props.status ? '1' : '0')};
  }
`

export const RoadmapContent = styled.div`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.whiteColor};
`
