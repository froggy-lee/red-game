import React from 'react'
import * as S from './styles'
import { TRANSPARENTS } from './data'

function TransparentGameDataSection(props) {
  return (
    <S.Section
      title="Transparent game data"
      description="All game data is presently verifiable by the player through Blockchain"
      id="transparent__game-data"
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

export default TransparentGameDataSection
