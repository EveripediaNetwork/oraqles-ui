import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Stack, Box } from '@chakra-ui/react'
import Navbar from '../Navbar'

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
    <Stack justify="space-between" minH="100vh" spacing={0}>
      <Navbar />
      <Box as="main" pt="70px">
        {children}
      </Box>
      <Suspense>{!noFooter && <Footer />}</Suspense>
    </Stack>
  )
}

export default Layout
