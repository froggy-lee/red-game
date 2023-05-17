import styled from 'styled-components'

export const Navbar = styled.nav`
  position: fixed;
  z-index: -1;
  top: 55px;
  right: 100%;
  bottom: 0;
  left: 0;

  opacity: 0;
  background: ${({ theme }) => theme.mainBg};
  transition: all 0.75s;

  &.show {
    z-index: 9;
    right: 0;
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    position: relative;
    z-index: 9;
    opacity: 1;
    top: 0;
  }
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  flex-direction: column;

  position: absolute;
  top: 50px;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    position: relative;
    top: 0;
  }
`

export const MenuItem = styled.li`
  position: relative;
`

export const MenuLink = styled.a`
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;

  display: flex;
  padding: 1.5rem 2.5rem;
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;

  font-size: 14px;

  &:hover {
    color: ${({ theme }) => theme.textColor};
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: ${({ theme }) => theme.gradient.menuActive};
    display: none;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;

    width: 100%;
    height: 3px;
    border-radius: 10px;
    opacity: 0;
    background: ${({ theme }) => theme.menu.inActive};

    @media screen and (min-width: 768px) {
      opacity: 1;
    }
  }

  &.active {
    &:before {
      display: block;
    }

    &:after {
      background: ${({ theme }) => theme.menu.active};
    }
  }
`
