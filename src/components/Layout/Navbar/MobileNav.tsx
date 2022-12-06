import { NAV_ITEMS } from '@/data/NavItemData'
import { Box, Divider, VStack } from '@chakra-ui/react'
import React from 'react'
import MobileNavLink from '@/components/Layout/Navbar/MobileNavLink'

type MobileNavType = {
  setHamburger: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNav = ({ setHamburger }: MobileNavType) => {
  return (
    <VStack
      h={{ base: 'calc(100vh - 70px)' }}
      justifyContent="space-between"
      backgroundColor="subMenuBg"
    >
      <Box w="full" pt="6">
        <Divider />
        <Box px={{ base: '5' }}>
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
    </VStack>
  )
}

export default MobileNav
