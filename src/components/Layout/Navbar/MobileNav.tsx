import { NAV_ITEMS } from '@/data/NavItemData'
import { Box, Center, Divider, Flex } from '@chakra-ui/react'
import React from 'react'
import MobileNavLink from '@/components/Layout/Navbar/MobileNavLink'
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTelegramFill,
  RiTwitterFill,
} from 'react-icons/ri'

type MobileNavType = {
  setHamburger: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNav = ({ setHamburger }: MobileNavType) => {
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
