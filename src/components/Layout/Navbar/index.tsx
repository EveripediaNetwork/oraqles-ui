import React from 'react'
import { Flex, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <Flex justifyContent="space-between">
      <Link href="/">
        <ChakraLink />
      </Link>
    </Flex>
  )
}

export default Navbar
