import React from 'react'
import NextApp from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps, router }) => {
  const componentDidMount = () => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }

  return (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
