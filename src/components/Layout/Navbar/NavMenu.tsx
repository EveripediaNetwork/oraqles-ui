import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { NavItemType, NAV_ITEMS } from '@/data/NavItemData'
import NavLink from '@/components/Layout/Navbar/NavLink'
import { useTranslation } from 'react-i18next'

const NavMenu = () => {
  const { t } = useTranslation()

  return (
    <Box>
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
    </Box>
  )
}

export default NavMenu
