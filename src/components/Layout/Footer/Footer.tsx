import React, { useEffect, useState } from 'react'
import {
  Box,
  Container,
  GridItem,
  SimpleGrid,
  Stack,
  useBreakpointValue,
  Divider,
  Text,
  HStack,
  Menu,
  MenuButton,
  Icon,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
} from '@chakra-ui/react'
import { isString } from '@chakra-ui/utils'
import { RiGlobalLine } from 'react-icons/ri'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Newsletter from '@/components/Layout/Footer/Newsletter'
import SocialsFooter from '@/components/Layout/Footer/SocialsFooter'
import MenuFooter from '@/components/Layout/Footer/MenuFooter'
import { useTranslation } from 'react-i18next'
import { languageData } from '@/data/LanguageData'

const Footer = () => {
  const { t, i18n } = useTranslation()
  const spacing = useBreakpointValue({ base: 8, lg: 24 })

  const [lang, setLang] = useState<string>(languageData[0].value)

  const handleLangChange = (userLang: string | string[]) => {
    if (isString(userLang)) {
      setLang(userLang)
      i18n.changeLanguage(userLang)
    }
  }

  const storedLang =
    typeof window !== 'undefined' &&
    JSON.stringify(window.localStorage.storeLang)
  useEffect(() => {
    if (storedLang) setLang(storedLang)
  }, [storedLang])

  return (
    <Box background="brandBackground" color="default">
      <Container
        as={Stack}
        px={{ base: 3, lg: 10 }}
        maxW={{ base: 'full', xl: '1375px', '2xl': '80%' }}
        py={5}
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={spacing} py={10}>
          <GridItem>
            <Newsletter />
          </GridItem>
          <GridItem>
            <SocialsFooter />
          </GridItem>
        </SimpleGrid>
        <Divider orientation="horizontal" />
        <MenuFooter />
        <Divider orientation="horizontal" />
        <SimpleGrid fontSize="xs" columns={{ base: 1, lg: 2 }}>
          <Stack align={{ base: 'center', lg: 'flex-start' }} flex="1">
            <Text fontSize="sm" py={3}>
              {`${t('copyRight')}`}
            </Text>
          </Stack>
          <Stack mt={[4, 0]} align={{ base: 'center', lg: 'flex-end' }}>
            <HStack py={3}>
              <Icon
                cursor="pointer"
                fontSize={25}
                fontWeight={600}
                as={RiGlobalLine}
              />
              <Box>
                <Menu>
                  <MenuButton fontSize="sm">
                    {lang.toUpperCase()} <ChevronDownIcon />
                  </MenuButton>
                  <MenuList color="linkColor">
                    <MenuOptionGroup type="radio" onChange={handleLangChange}>
                      {languageData.map(langObj => (
                        <MenuItemOption
                          key={langObj.id}
                          fontSize="md"
                          value={langObj.value}
                        >
                          {langObj.language}
                        </MenuItemOption>
                      ))}
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              </Box>
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer
