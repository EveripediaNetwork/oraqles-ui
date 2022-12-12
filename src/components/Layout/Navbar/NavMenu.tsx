import React, { useState } from 'react'
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  MenuGroup,
  Icon,
  Box,
  Spacer,
  Button,
} from '@chakra-ui/react'
import { NavItemType, NAV_ITEMS } from '@/data/NavItemData'
import NavLink from '@/components/Layout/Navbar/NavLink'
import { useTranslation } from 'react-i18next'
import ColorToggleButton from '@/components/Layout/ColorModeToggle'
import { FaChevronDown } from 'react-icons/fa'
import { NETWORK_DATA } from '@/data/NetworkData'
import { NetworkType } from '@/types/NetworkType'

const NavMenu = () => {
  const { t } = useTranslation()
  const [currentNetwork, setCurrentNetwork] = useState<NetworkType>(
    NETWORK_DATA[0],
  )
  const handleNetworkSwitch = (newNetwork: NetworkType) => {
    setCurrentNetwork(newNetwork)
  }
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
      <Menu offset={[110, 30]}>
        <MenuButton
          as={Button}
          size="sm"
          fontWeight="500"
          variant="outline"
          leftIcon={<Icon as={currentNetwork.icon} fontSize="md" />}
          rightIcon={<FaChevronDown />}
        >
          <Text
            display={{ base: 'none', md: 'block' }}
            fontSize="sm"
            fontWeight="medium"
          >
            {currentNetwork.name}{' '}
          </Text>
        </MenuButton>
        <MenuList borderRadius="lg" w={250} boxShadow="2xl">
          <MenuGroup fontSize="md" fontWeight="medium" title="Select Network">
            {NETWORK_DATA.map((network, index) => (
              <Box px={3} key={index}>
                <MenuItem
                  isDisabled={!network.isActive}
                  py={3}
                  my={3}
                  onClick={() => handleNetworkSwitch(network)}
                  rounded="lg"
                  border="solid 1px "
                  borderColor="divider"
                >
                  <Icon mr={3} as={network.icon} fontSize="2xl" />
                  <Spacer />
                  <Text fontSize="sm" fontWeight="medium">
                    {network.name}
                  </Text>
                </MenuItem>
              </Box>
            ))}
          </MenuGroup>
        </MenuList>
      </Menu>
      <ColorToggleButton display={{ base: 'none', md: 'inherit' }} />
    </Flex>
  )
}

export default NavMenu
