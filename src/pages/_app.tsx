import type { AppProps } from 'next/app'
import React, { StrictMode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import chakraTheme from '../theme'


const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <StrictMode>
      <ChakraProvider resetCSS theme={chakraTheme}>
        <Component {...pageProps} /> 
      </ChakraProvider>
    </StrictMode>
  )
}

export default App
