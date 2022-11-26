import React from 'react'
import Link from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'
import { NavItemType } from '@/data/NavItemData'

const NavLink = (navLinkProps: NavItemType) => {
  const { link, target, label } = navLinkProps

  return (
    <Link href={link} passHref>
      <ChakraLink
        color="navLinkColor"
        fontSize={{ base: 'sm', lg: 'md' }}
        fontWeight={600}
        target={target}
        _hover={{ textDecoration: 'none' }}
      >
        {label}
      </ChakraLink>
    </Link>
  )
}

export default NavLink
