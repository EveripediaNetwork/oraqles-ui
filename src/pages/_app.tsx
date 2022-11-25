import type { AppProps } from 'next/app'
import React, { StrictMode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import chakraTheme from '../theme'
import Fonts from '@/theme/Fonts'


const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <StrictMode>
      <ChakraProvider resetCSS theme={chakraTheme}>
        <Fonts/>
        <Component {...pageProps} /> 
      </ChakraProvider>
    </StrictMode>
  )
}

export default App
