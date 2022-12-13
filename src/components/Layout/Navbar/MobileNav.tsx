import { NAV_ITEMS } from '@/data/NavItemData'
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  IconButton,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import React from 'react'
import MobileNavLink from '@/components/Layout/Navbar/MobileNavLink'
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTelegramFill,
  RiTwitterFill,
  RiSunFill,
  RiMoonFill,
} from 'react-icons/ri'

type MobileNavType = {
  setHamburger: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNav = ({ setHamburger }: MobileNavType) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const ColorModeIcon = colorMode === 'light' ? RiMoonFill : RiSunFill
  const iconSize = 20

  return (
    <Flex
      direction="column"
      display={{ base: 'flex', md: 'none' }}
      h={{ base: 'calc(100vh - 70px)' }}
      justifyContent="space-between"
      backgroundColor="subMenuBg"
    >
      <Box w="full">
        <Divider />
        <Box px={{ base: '5' }} pt="6">
          {NAV_ITEMS.map(navlink => (
            <MobileNavLink
              setHamburger={setHamburger}
              id={navlink.id}
              link={navlink.link}
              target={navlink.target}
              label={navlink.label}
            />
          ))}
          <Button
            w="full"
            display="flex"
            variant="unstyled"
            justifyContent="space-between"
            onClick={toggleColorMode}
            px="4 !important"
            py="6 !important"
          >
            <Text fontWeight={400}>
              {colorMode === 'light' ? 'Dark mode' : 'Light Mode'}
            </Text>
            <IconButton
              aria-label="Color mode"
              icon={<ColorModeIcon />}
              variant="unstyled"
              display="flex"
              alignItems="center"
              justifyContent="center"
              size="md"
            />
          </Button>
        </Box>
      </Box>
      <Center
        bg="subMenuBg"
        h="80px"
        borderTopWidth="thin"
        borderTopColor="borderColor"
        color="homeDescriptionColor"
      >
        <Flex gap={8}>
          <RiInstagramFill size={iconSize} />
          <RiLinkedinFill size={iconSize} />
          <RiFacebookFill size={iconSize} />
          <RiTelegramFill size={iconSize} />
          <RiTwitterFill size={iconSize} />
        </Flex>
      </Center>
    </Flex>
  )
}

export default MobileNav
