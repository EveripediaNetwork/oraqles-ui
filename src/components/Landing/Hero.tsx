import React from 'react'
import {
  Box,
  Flex,
  Heading,
  VStack,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <Box
      as="section"
      bgGradient="linear(105deg, heroBackground 50%, transparent 50%, heroBackground 50.1%)"
    >
      <Flex
        px={{ base: 3, lg: 10 }}
        w={{ base: 'full', lg: '90vw', xl: '1375px' }}
        mx="auto"
      >
        <SimpleGrid w="full" templateColumns="1fr 1fr">
          <VStack
            py={{ base: '4', md: '8', lg: '16' }}
            alignItems="start"
            justifyContent="center"
          >
            <Heading
              color="white"
              fontSize={{ base: '20', md: '32', lg: '54' }}
            >{`${t('heroHeading')}`}</Heading>
            <Text
              w={{ base: '100%', lg: '80%' }}
              mt={{ base: '4', lg: '2' }}
              lineHeight={{ base: '24px', lg: '32px' }}
              fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
              color="white"
            >{`${t('heroParagraph')}`}</Text>
          </VStack>
          <VStack alignItems="flex-end" pb={{ base: '4', md: '8', lg: '0' }}>
            <Image
              src="/images/hero-image.png"
              w={{ md: '162px', xl: '420px' }}
              h={{ md: '132px', xl: '320px' }}
            />
          </VStack>
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default Hero
