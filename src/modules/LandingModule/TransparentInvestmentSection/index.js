import React from 'react'
import * as S from './styles'
import { TRANSPARENTS } from './data'

function TransparentInvesmentSection() {
  return (
    <S.Section
      title="Transparent investment"
      description="Blockchain technology can verify all records pertaining to investments and organizations"
      id="transparent__investment"
    >
      <S.Wrapper>
        {TRANSPARENTS.map(transparent => (
          <S.ItemWrapper
            key={transparent.id}
            icon={transparent.icon}
            title={transparent.title}
            className="transparent__item"
          >
            <S.Item>{transparent.content}</S.Item>
          </S.ItemWrapper>
        ))}
      </S.Wrapper>
    </S.Section>
  )
}

export default TransparentInvesmentSection
