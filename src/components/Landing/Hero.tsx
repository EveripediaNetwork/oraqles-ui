import React from 'react'
import { Box } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Box
      bgSize="cover"
      bgRepeat="no-repeat"
      bgImage={{
        base: './images/banner-desktop.png',
      }}
      bgPos="center"
      h={{ base: '200px', md: '300px' }}
    >
      &nbsp;
    </Box>
  )
}

export default Hero
