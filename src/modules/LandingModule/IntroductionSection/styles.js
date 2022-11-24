import styled from 'styled-components'
import { TitleSection, ContainerSection } from '@styles/theme.config'
import { Container } from 'react-bootstrap'

export const Wrapper = styled(Container)`
  background: #0d141f;
  padding: 0;
`
export const Section = styled(ContainerSection)`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  .slick-arrow {
    top: 100%;
    margin-top: 5rem;
    @media (max-width: 768px) {
      margin-top: 1rem;
    }
  }
  .slick-next:before,
  .slick-prev:before {
    display: none;
  }
  .slick-next {
    right: 3rem;
    @media (max-width: 768px) {
      right: 3rem;
    }
  }
  .slick-prev {
    left: 80%;
    @media (max-width: 1440px) {
      left: 75%;
    }
    @media (max-width: 992px) {
      left: 65%;
    }
    @media (max-width: 768px) {
      left: 40%;
    }
  }
`
export const Title = styled(TitleSection)`
  text-align: right;
  margin-bottom: 1rem;
`
export const Slide = styled.div`
  p {
    text-align: right;
    width: 80%;
    margin-left: auto;
    margin-top: 2.5rem;
    @media (max-width: 768px) {
      width: 90%;
      margin-top: 1.5rem;
    }
  }
`
