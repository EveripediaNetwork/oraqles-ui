import React from 'react'
import {
  Flex,
  Box,
  Image,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import NavMenu from './NavMenu'

const Navbar = () => {
  const logoSrc = useColorModeValue(
    'braindao-logo-light.svg',
    'braindao-logo-dark.svg',
  )

  return (
    <Box position="fixed" zIndex="banner" w="full">
      <Flex
        w="full"
        h="70px"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 8 }}
      >
        <Link href="/">
          <ChakraLink>
            <Image src={`/images/${logoSrc}`} />
          </ChakraLink>
        </Link>
        <Flex>
          <NavMenu />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
