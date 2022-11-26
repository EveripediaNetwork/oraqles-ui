import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Box
      as="section"
      minH="400px"
      bgGradient="linear(105deg, heroBackground 50%, transparent 50%, heroBackground 50.1%)"
    >
      <Flex
        px={{ base: 3, lg: 10 }}
        w={{ base: 'full', lg: '90vw', xl: '1375px' }}
        mx="auto"
      >
        <Box>&nbsp;</Box>
        <Box>&nbsp;</Box>
      </Flex>
    </Box>
  )
}

export default Hero
