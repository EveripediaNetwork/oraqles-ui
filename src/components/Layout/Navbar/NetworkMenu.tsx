import React, { useState } from 'react'
import {
  Box,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from '@chakra-ui/react'
import { NETWORK_DATA } from '@/data/NetworkData'
import { FaChevronDown } from 'react-icons/fa'
import { NetworkType } from '@/types/NetworkType'

const NetworkMenu = () => {
  const [currentNetwork, setCurrentNetwork] = useState<NetworkType>(
    NETWORK_DATA[0],
  )
  const handleNetworkSwitch = (newNetwork: NetworkType) => {
    setCurrentNetwork(newNetwork)
  }
  return (
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
  )
}

export default NetworkMenu
