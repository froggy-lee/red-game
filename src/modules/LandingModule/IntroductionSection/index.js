import React from 'react'
import Image from 'next/image'
import { NextButton, PrevButton } from 'public/svgs/carousel'
import { dataIntro } from './data'
import Slider from 'react-slick'
import * as S from './styles'

const PrevBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <PrevButton />
    </div>
  )
}

const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <NextButton />
    </div>
  )
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextBtn />,
  prevArrow: <PrevBtn />
}

function IntroductionSection() {
  return (
    <S.Wrapper fluid>
      <S.Section>
        <div>
          <div>
            <Image
              src="/images/introduction/introduction.png"
              width={378}
              height={591}
              alt="introduction"
            />
          </div>
        </div>
        <div>
          <S.Title>Introduction</S.Title>
          <Slider {...settings}>
            {dataIntro.map(data => (
              <S.Slide key={data.id}>{data.text}</S.Slide>
            ))}
          </Slider>
        </div>
      </S.Section>
    </S.Wrapper>
  )
}

export default IntroductionSection
