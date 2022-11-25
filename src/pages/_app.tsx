import type { AppProps } from 'next/app'
import React, { StrictMode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '@/theme/Fonts'
import Layout from '@/components/Layout/Layout/Layout'
import chakraTheme from '../theme'

type OraqleAppProp = Omit<AppProps, 'Component'> & {
  Component: AppProps['Component'] & { noFooter?: boolean }
}

const App = (props: OraqleAppProp) => {
  const { Component, pageProps } = props

  return (
    <StrictMode>
      <ChakraProvider resetCSS theme={chakraTheme}>
        <Fonts />
        <Layout noFooter={Component.noFooter}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </StrictMode>
  )
}

export default App
