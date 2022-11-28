import React from 'react'
import { GridItem, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Logo from '@/components/Elements/Logo/Logo'

const MenuFooter = () => {
  const { t } = useTranslation()

  return (
    <SimpleGrid columns={{ base: 1, lg: 12 }} py={10} spacing={12}>
      <GridItem colSpan={{ base: 8, lg: 4 }}>
        <Stack align={{ base: 'center', lg: 'flex-start' }} spacing="2">
          <Logo />
          <Text fontSize="xl" fontWeight="bold">
            {`${t('iqWiki')}`}
          </Text>
          <Text
            align={{ base: 'center', lg: 'start' }}
            fontWeight="medium"
            px={{ base: 3, lg: 0 }}
            fontSize="sm"
          >
            {`${t('visionFooterText')}`}
          </Text>
        </Stack>
      </GridItem>
      <GridItem>&nbsp;</GridItem>
    </SimpleGrid>
  )
}

export default MenuFooter
