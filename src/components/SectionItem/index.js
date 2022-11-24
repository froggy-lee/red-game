import React from 'react'
import * as S from './styles'

const SectionItem = ({ icon, title, children, className, ...props }) => {
  return (
    <S.Item className={className} {...props}>
      {icon && <S.Icon>{icon}</S.Icon>}
      <S.Title>{title}</S.Title>
      <S.Content>{children}</S.Content>
    </S.Item>
  )
}

export default SectionItem
