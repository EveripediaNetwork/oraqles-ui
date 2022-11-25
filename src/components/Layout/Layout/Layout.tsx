import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Stack, Box } from '@chakra-ui/react'

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
      <Box as="main" pt={20}>
        {children}
      </Box>
      <Suspense>{!noFooter && <Footer />}</Suspense>
    </Stack>
  )
}

export default Layout
