import React from 'react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { NavItemType } from '@/data/NavItemData'

const NavLink = (navLinkProps: NavItemType) => {
  const { link, target, label } = navLinkProps

  return (
    <ChakraLink
      href={link}
      target={target}
      color="navLinkColor"
      fontSize={{ base: 'sm', lg: '16px' }}
      fontWeight={500}
      _hover={{ textDecoration: 'none' }}
    >
      {label}
    </ChakraLink>
  )
}

export default NavLink
