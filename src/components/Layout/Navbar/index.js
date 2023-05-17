import React from 'react'
import * as S from './styles'
import { LIST_MENU } from './data'

const Navbar = ({ activeId, scrollIntoView, open, ...props }) => {
  return (
    <S.Navbar className={open ? 'show' : ''} {...props}>
      <S.Menu>
        {LIST_MENU.map(menu => (
          <S.MenuItem key={menu.title}>
            <S.MenuLink
              className={menu.gotoView === activeId ? 'active' : ''}
              onClick={() => scrollIntoView(menu.gotoView)}
            >
              {menu.title}
            </S.MenuLink>
          </S.MenuItem>
        ))}
      </S.Menu>
    </S.Navbar>
  )
}

export default Navbar
