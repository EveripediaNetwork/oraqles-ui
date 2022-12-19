import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Stack, Box } from '@chakra-ui/react'
import Navbar from '../Navbar'
import GoogleAnalyticsScripts from './GoogleAnalyticsScript'

const Footer = dynamic(() => import('@/components/Layout/Footer/Footer'), {
  suspense: true,
})

const Layout = ({
  children,
  noFooter,
}: {
  children: React.ReactNode
  noFooter?: boolean
}) => {
  return (
    <>
      <GoogleAnalyticsScripts />
      <Stack minH="100vh" spacing={0} overflowX="hidden">
        <Navbar />
        <Box as="main">{children}</Box>
        <Suspense>{!noFooter && <Footer />}</Suspense>
      </Stack>
    </>
  )
}

export default Layout
