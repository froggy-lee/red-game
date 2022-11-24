import React from 'react'
import { Col } from 'react-bootstrap'
import * as S from './styles'
import Image from 'next/image'

function GetStartedSection() {
  return (
    <S.Wrapper>
      <S.Section>
        <Col>
          <S.TitleTop>Treasura Hunt</S.TitleTop>
          <S.MainTitle>Red Beryl</S.MainTitle>
          <S.Des>Rewarding games that provide value to players</S.Des>
          <S.ListButton>
            <S.ButtonStart>Get Started</S.ButtonStart>
            <S.ButtonDoc>Documentation</S.ButtonDoc>
          </S.ListButton>
        </Col>
        <S.Image>
          <Image
            src="/images/get-started/get-started.png"
            width={350}
            height={550}
            alt="picture"
          />
        </S.Image>
      </S.Section>
    </S.Wrapper>
  )
}

export default GetStartedSection
