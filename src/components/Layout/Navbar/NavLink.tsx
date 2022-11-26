import React from 'react'
import Link from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'
import { NavItemType } from '@/data/NavItemData'

const NavLink = (navLinkProps: NavItemType) => {
  const { link, target, label } = navLinkProps

  return (
    <Link href={link} passHref>
      <ChakraLink target={target}>{label}</ChakraLink>
    </Link>
  )
}

export default NavLink
