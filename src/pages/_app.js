import '@styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, lightTheme } from '@styles/theme.config'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import { Provider } from 'react-redux'
// import { store } from '/src/store'
import LandingLayout from '@components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Provider store={store}> */}
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Head>
          <title>Red Game</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <LandingLayout>
          <Component {...pageProps} />
        </LandingLayout>
      </ThemeProvider>
      {/* </Provider> */}
    </>
  )
}

export default MyApp
