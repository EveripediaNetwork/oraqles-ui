import React from 'react'
import { Box } from '@chakra-ui/layout'
import Hero from '@/components/Landing/Hero'
import Oracles from '@/components/Landing/Oracles'

const Homepage = () => {
  return (
    <Box>
      <Hero />
      <Oracles />
    </Box>
  )
}

export default Homepage
