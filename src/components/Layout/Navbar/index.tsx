import React, { useState } from 'react'
import {
  Flex,
  Box,
  Image,
  Link as ChakraLink,
  useColorModeValue,
  IconButton,
  Collapse,
} from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import NavMenu from '@/components/Layout/Navbar/NavMenu'
import MobileNav from './MobileNav'

const Navbar = () => {
  const [isHamburgerOpen, setHamburger] = useState<boolean>(false)

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
          onClick={() => {
            setHamburger(!isHamburgerOpen)
          }}
          display={{ base: 'inline-block', md: 'none' }}
          icon={
            isHamburgerOpen ? (
              <CloseIcon w={4} h={4} />
            ) : (
              <HamburgerIcon boxSize={{ base: 6, lg: 7 }} />
            )
          }
          variant="ghost"
          aria-label="Toggle Navigation"
        />
      </Flex>
      <Collapse
        in={isHamburgerOpen}
        animateOpacity
        style={{
          zIndex: 10,
          position: 'absolute',
          width: '100vw',
          height: '100vh !important',
        }}
      >
        <MobileNav setHamburger={setHamburger} />
      </Collapse>
    </Box>
  )
}

export default Navbar
