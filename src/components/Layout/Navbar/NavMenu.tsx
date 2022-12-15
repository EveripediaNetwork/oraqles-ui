import React from 'react'
import { Flex } from '@chakra-ui/react'
import { NavItemType, NAV_ITEMS } from '@/data/NavItemData'
import NavLink from '@/components/Layout/Navbar/NavLink'
import { useTranslation } from 'react-i18next'
import ColorToggleButton from '@/components/Layout/ColorModeToggle'
import NetworkMenu from './NetworkMenu'

const NavMenu = () => {
  const { t } = useTranslation()

  return (
    <Flex gap={6} alignItems="center">
      <Flex gap={{ md: 8, lg: 10 }}>
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
      <Flex alignItems="center" gap={{ md: '2', xl: '3' }}>
        <NetworkMenu />
        <ColorToggleButton display={{ base: 'none', md: 'inherit' }} />
      </Flex>
    </Flex>
  )
}

export default NavMenu
