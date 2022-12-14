import type { AppProps } from 'next/app'
import React, { StrictMode, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/components/Layout/Layout/Layout'
import { Montserrat } from '@next/font/google'
import { createClient, WagmiConfig } from 'wagmi'
import { provider } from '@/config/wagmi'
import SEOHeader from '@/components/SEO/default'
import { pageView } from '@/utils/googleAnalytics'
import GoogleAnalyticsScripts from '@/components/Layout/Layout/GoogleAnalyticsScript'
import chakraTheme from '../theme'
import '../utils/i18n'
import '../styles/globals.css'

type OraqleAppProp = Omit<AppProps, 'Component'> & {
  Component: AppProps['Component'] & { noFooter?: boolean }
}

const client = createClient({
  provider,
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
})

const App = (props: OraqleAppProp) => {
  const { Component, pageProps, router } = props

  useEffect(() => {
    const handleRouteChange = (url: URL) => pageView(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <StrictMode>
      <style jsx global>{`
        :root {
          --montserrat-font: ${montserrat.style.fontFamily};
        }
      `}</style>
      <ChakraProvider resetCSS theme={chakraTheme}>
        <WagmiConfig client={client}>
          <GoogleAnalyticsScripts />
          <SEOHeader router={router} />
          <Layout noFooter={Component.noFooter}>
            <Component {...pageProps} />
          </Layout>
        </WagmiConfig>
      </ChakraProvider>
    </StrictMode>
  )
}

export default App
