import React from 'react'
import {
  Box,
  Container,
  GridItem,
  SimpleGrid,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react'
import Newsletter from '@/components/Layout/Footer/Newsletter'

const Footer = () => {
  const spacing = useBreakpointValue({ base: 8, lg: 24 })

  return (
    <Box background="brandBackground">
      <Container
        as={Stack}
        maxW={{ base: '7xl', xl: '7xl', '2xl': '80%' }}
        py={5}
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={spacing} py={10}>
          <GridItem>
            <Newsletter />
          </GridItem>
          <GridItem>&nbsp;</GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer
