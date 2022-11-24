import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;

  font-family: 'Arial';
  font-style: normal;
`

export const Icon = styled.div``

export const Title = styled.h2`
  font-weight: 700;
  font-size: clamp(14px, 4vw, 20px);
  color: ${({ theme }) => theme.textColor};
`

export const Content = styled.div`
  font-weight: 400;
  font-size: clamp(10px, 2vw, 14px);
  color: ${({ theme }) => theme.whiteColor};
`
