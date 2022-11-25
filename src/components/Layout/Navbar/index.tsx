import { Flex, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <Flex justifyContent="space-between">
      <Link href="/">
        <ChakraLink></ChakraLink>
      </Link>
    </Flex>
  )
}

export default Navbar
