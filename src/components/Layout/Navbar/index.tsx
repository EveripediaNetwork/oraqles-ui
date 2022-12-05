import React from 'react'
import {
  Flex,
  Box,
  Image,
  Link as ChakraLink,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import NavMenu from '@/components/Layout/Navbar/NavMenu'

const Navbar = () => {
  const logoSrc = useColorModeValue(
    'braindao-logo-light.svg',
    'braindao-logo-dark.svg',
  )

  return (
    <Box w="full">
      <Flex
        w="full"
        h="70px"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 5, md: 3, lg: 8 }}
      >
        <ChakraLink href="/">
          <Image src={`/images/${logoSrc}`} />
        </ChakraLink>

        <Flex display={{ base: 'none', md: 'flex' }}>
          <NavMenu />
        </Flex>
        <IconButton
          display={{ base: 'inline-block', md: 'none' }}
          icon={<HamburgerIcon boxSize={{ base: 6, lg: 7 }} />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />
      </Flex>
    </Box>
  )
}

export default Navbar
