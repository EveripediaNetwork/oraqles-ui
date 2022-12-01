import React from 'react'
import { Flex } from '@chakra-ui/react'
import { NavItemType, NAV_ITEMS } from '@/data/NavItemData'
import NavLink from '@/components/Layout/Navbar/NavLink'
import { useTranslation } from 'react-i18next'
import ColorToggleButton from '@/components/Layout/ColorModeToggle'

const NavMenu = () => {
  const { t } = useTranslation()

  return (
    <Flex gap={5} alignItems="center">
      <Flex gap={8}>
        {NAV_ITEMS.map((navItem: NavItemType) => (
          <NavLink
            id={navItem.id}
            key={navItem.id}
            label={t(navItem.label)}
            link={navItem.link}
            target={navItem.target}
          />
        ))}
      </Flex>
      <ColorToggleButton display={{ base: 'none', md: 'inherit' }} />
    </Flex>
  )
}

export default NavMenu
