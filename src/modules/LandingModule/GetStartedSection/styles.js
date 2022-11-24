import styled from 'styled-components'
import { TitleSection } from '@styles/theme.config'
import { Row, Col } from 'react-bootstrap'
import { ContainerSection } from '@styles/theme.config'

export const Wrapper = styled(ContainerSection)``
export const Section = styled(Row)`
  align-items: center;
`
export const Image = styled(Col)`
  display: flex;
  justify-content: flex-end;
`
export const TitleTop = styled(TitleSection)`
  font-size: 28px;
  line-height: 39px;
  @media (max-width: 992px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }
`
export const MainTitle = styled(TitleSection)`
  font-size: 85px;
  line-height: 120px;
  @media (max-width: 992px) {
    font-size: 55px;
    line-height: 90px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 60px;
  }
`
export const Des = styled.div`
  font-size: 20px;
  line-height: 23px;
  @media (max-width: 992px) {
    font-size: 16px;
    line-height: 18px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
  }
`
export const ListButton = styled.div`
  margin-top: 3rem;
`
export const ButtonStart = styled.button`
  background: #389afc;
  box-shadow: 0px 4px 0px #224e7b;
  border-radius: 5.6338px;
  font-weight: 700;
  color: #fff;
  padding: 0.5rem 2rem;
  @media (max-width: 768px) {
    padding: 0.5rem 0.7rem;
  }
`
export const ButtonDoc = styled(ButtonStart)`
  background: #506d90;
  box-shadow: 0px 4px 0px #1f2c3b;
  margin-left: 2rem;
  @media (max-width: 768px) {
    margin-left: 0.5rem;
  }
`
