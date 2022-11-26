import type { AppProps } from 'next/app'
import React, { StrictMode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/components/Layout/Layout/Layout'
import { Montserrat } from '@next/font/google'
import chakraTheme from '../theme'

type OraqleAppProp = Omit<AppProps, 'Component'> & {
  Component: AppProps['Component'] & { noFooter?: boolean }
}

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
})

const App = (props: OraqleAppProp) => {
  const { Component, pageProps } = props

  return (
    <StrictMode>
      <style jsx global>{`
        :root {
          --montserrat-font: ${montserrat.style.fontFamily};
        }
      `}</style>
      <ChakraProvider resetCSS theme={chakraTheme}>
        <Layout noFooter={Component.noFooter}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </StrictMode>
  )
}

export default App
