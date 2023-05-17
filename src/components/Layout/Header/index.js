import React, { useState, useEffect } from 'react'
import * as S from './styles'
import Image from 'next/image'
import { RedGameButton } from '@components'
import Navbar from '../Navbar'
import { useToggle } from '@hooks/useToggle'

const HeaderDesktop = () => {
  const [activeId, setActiveId] = useState()
  // const [open, setOpen] = useState(false)
  const { state, toggle } = useToggle(false)

  useEffect(() => {
    if (state) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [state])

  const scrollIntoView = id => {
    setActiveId(id)
    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })

    setTimeout(() => {
      toggle()
    }, 50)
  }

  return (
    <S.Header id="menu">
      <S.Logo>
        <Image width={108} height={32} src="/logo.png" alt="logo" />
      </S.Logo>

      <S.HambugerIcon onClick={toggle} open={state}>
        <div></div>
      </S.HambugerIcon>

      <Navbar
        activeId={activeId}
        scrollIntoView={scrollIntoView}
        open={state}
      />

      <RedGameButton>Connect</RedGameButton>
    </S.Header>
  )
}

export default HeaderDesktop
