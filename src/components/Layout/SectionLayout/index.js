import React from 'react'
import * as S from './styles'

const SectionLayout = ({ title, description, children, ...props }) => {
  return (
    <S.Layout {...props}>
      <S.Container>
        <S.Header className="section__header">
          <S.Title className="section__title">{title}</S.Title>
          <S.Description className="section__description">
            {description}
          </S.Description>
        </S.Header>

        <S.Content className="section__content">{children}</S.Content>
      </S.Container>
    </S.Layout>
  )
}

export default SectionLayout
