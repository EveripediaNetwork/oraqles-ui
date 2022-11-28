import React from 'react'
import { GridItem, SimpleGrid } from '@chakra-ui/react'

const MenuFooter = () => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 12 }} py={10} spacing={12}>
      <GridItem>&nbsp;</GridItem>
      <GridItem>&nbsp;</GridItem>
    </SimpleGrid>
  )
}

export default MenuFooter
