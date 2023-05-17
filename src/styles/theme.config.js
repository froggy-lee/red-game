import { createGlobalStyle } from 'styled-components'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

export const lightTheme = {
  // background
  mainBg: 'rgba(12,15,20,1)', // #0C0F14
  secondBg: 'rgba(13,20,31,1)', // #0D141F
  // color
  textColor: 'rgba(241, 242, 244, 1)', // #f1f2f4
  whiteColor: 'rgba(255,255,255,1)', // #ffffff
  blackColor: 'rgba(0,0,0,1)', // #000000
  grayColor: {
    main: 'rgba(229,229,229,1)', // #e5e5e5
    sub: 'rgba(80, 109, 144, 1)' // #506D90
  },
  blueColor: 'rgba(56, 154, 252, 1)', // #389AFC
  menu: {
    active: 'rgba(48, 151, 255, 1)', // #3097FF
    inActive: 'rgba(23, 28, 38, 1)' // #171C26
  },
  gradient: {
    menuActive:
      'linear-gradient(360deg, rgba(28, 47, 72, 1) 0%, rgba(28, 47, 72, 0) 100%);'
  }
}

export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    margin: 0;
    padding: 0 !important;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 14px;
    font-style: normal;
    font-weight: 400;
    font-family: "Arial", Times, serif;
    font-size: 14px;
    line-height: 137.99%;
    background: ${({ theme }) => theme.mainBg};
    color: ${({ theme }) => theme.textColor};
    @media (max-width: 992px) {
      font-size: 12px;
    line-height: 14px;
    }
    @media (max-width: 768px) {
      font-size: 10px;
    line-height: 12px;
    }
  }
  
  input, textarea, button {font-family: inherit}

  button { 
    outline: none;
    border: none;
  }

  ol,ul{
    list-style:none;
    padding: 0;
    margin: 0;
  }
  caption,th{
    text-align:left;
  }
  /* h1,h2,h3,h4,h5,h6{
    font-size:100%; 
    font-weight:400;
  } */
  q:before,q:after{
    content:'';
  }
  abbr,acronym{
    border:0;
  }
  a:active,a:focus{
    outline:none;
  } 

  input:focus-visible, 
  input:active,
  input:focus,
  textarea:focus-visible, 
  textarea:active,
  textarea:focus,
  select:focus-visible, 
  select:active,
  select:focus {
    outline: none;
    border: none; 
    box-shadow: none;
    appearance: none;
  }

  table {
    border-collapse: inherit;
    width: 100%;
    border: 1px solid #eaeaea;
    border-radius: 1rem;

    thead {
      tr th {
        font-weight: bold;
        font-size: 1.6rem;
        line-height: 2.4rem;
        padding: 1rem;
      }
    }

    tbody {
      tr td {
        font-size: 1.6rem;
        line-height: 2.4rem;
        padding: 1rem;
      }
    }
  }

   /* Variables */
  :root{
    font-size: 10px;
  }
`
export const TitleSection = styled.div`
  font-family: 'Arial Black';
  font-style: normal;
  font-weight: 900;
  font-size: 41px;
  line-height: 58px;
  @media (max-width: 992px) {
    font-size: 30px;
    line-height: 40px;
  }
  @media (max-width: 768px) {
    font-size: 25px;
    line-height: 25px;
  }
`
export const ContainerSection = styled(Container)`
  padding: 8rem 5rem;
  @media (max-width: 1200px) {
    padding: 5rem 0;
  }
  @media (max-width: 768px) {
    padding: 5rem 1rem;
  }
`
