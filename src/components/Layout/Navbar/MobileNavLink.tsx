import { NavItemType } from '@/data/NavItemData'
import { Link } from '@chakra-ui/react'
import React from 'react'

type MobileNavLinkType = NavItemType & {
  setHamburger: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNavLink = ({
  link,
  target,
  label,
  setHamburger,
}: MobileNavLinkType) => {
  return (
    <Link
      display="block"
      href={link}
      target={target}
      py="6"
      px="4"
      onClick={() => {
        setHamburger(false)
      }}
    >
      {label}
    </Link>
  )
}

export default MobileNavLink
