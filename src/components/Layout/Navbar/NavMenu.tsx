import React from 'react'
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Image,
} from '@chakra-ui/react'
import { NavItemType, NAV_ITEMS } from '@/data/NavItemData'
import NavLink from '@/components/Layout/Navbar/NavLink'
import { useTranslation } from 'react-i18next'
import ColorToggleButton from '@/components/Layout/ColorModeToggle'
import { ChevronDownIcon } from '@chakra-ui/icons'

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
      <Menu>
        <MenuButton
          px={3}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
        >
          <Flex alignItems="center" justifyContent="center">
            <Image
              objectFit="contain"
              boxSize="23px"
              src="/images/ethereum.svg"
            />
            <Text display={{ md: 'none', xl: 'unset' }}>Ethereum</Text>
            <ChevronDownIcon />
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem>Connect</MenuItem>
          <MenuItem>Wallet</MenuItem>
        </MenuList>
      </Menu>
      <ColorToggleButton display={{ base: 'none', md: 'inherit' }} />
    </Flex>
  )
}

export default NavMenu
