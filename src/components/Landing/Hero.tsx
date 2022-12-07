import React from 'react'
import {
  Box,
  Flex,
  Heading,
  VStack,
  Image,
  HStack,
  Text,
  chakra,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <Box as="section" bg="heroBackground">
      <Flex px={{ base: 3, lg: 10 }} w="full">
        <HStack w="full" gap="6" justifyContent="space-between" px="12">
          <Flex gap="4">
            <VStack
              py={{ base: '6', md: '12', lg: '16' }}
              alignItems="start"
              justifyContent="center"
            >
              <Heading
                color="white"
                fontSize={{ base: '18', md: '32', lg: '54' }}
              >{`${t('heroHeading')}`}</Heading>
              <Text
                w={{ base: '100%', lg: '80%' }}
                mt={{ base: '4', lg: '2' }}
                lineHeight={{ base: '16px', md: '21px', lg: '32px' }}
                fontSize={{ base: '12px', md: 'md', lg: 'lg' }}
                color="white"
              >{`${t('heroParagraph')}`}</Text>
            </VStack>
            <chakra.div
              mt="-24"
              w="3px"
              bg="white"
              _dark={{ bg: 'gray.800' }}
              h="450px"
              position="absolute"
              translateX="640px"
              transform="auto"
              rotate="-140"
            />
          </Flex>

          <VStack
            alignItems="flex-end"
            justifyContent={{ base: 'center', md: 'initial' }}
            pb={{ base: '4', md: '8', lg: '0' }}
          >
            <Image
              src="/images/hero-image.png"
              w={{ base: '117px', md: '162px', xl: '420px' }}
              h={{ base: '96px', md: '132px', xl: '320px' }}
            />
          </VStack>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Hero
