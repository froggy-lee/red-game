import styled from 'styled-components'

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  height: 55px;
`

export const Logo = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const HambugerIcon = styled.div`
  width: 100%;
  max-width: 25px;
  display: flex;
  align-items: center;

  position: relative;
  z-index: 10;

  cursor: pointer;
  transition: all 0.5s;

  &:before,
  &:after {
    content: '';
    position: absolute;
    right: 0;
    left: 0;

    width: 100%;
    background: ${({ theme }) => theme.whiteColor};
    height: 2px;
    transition: all 0.5s;
  }

  &:before {
    top: 0;

    ${props =>
      props.open &&
      `
        transform: translate(50%, 0);
      `}
  }

  &:after {
    bottom: 0;
    opacity: ${props => (props.open ? '0' : '1')};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }

  div {
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.whiteColor};
    margin: 0.7rem 0;
    transition: all 0.5s;
  }
`
