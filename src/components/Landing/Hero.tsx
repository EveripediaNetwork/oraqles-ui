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
          <VStack py="16" alignItems="start">
            <Heading
              color="white"
              fontSize={{ base: '20', md: '32', lg: '54' }}
            >{`${t('heroHeading')}`}</Heading>
            <Text
              w="75%"
              mt={2}
              fontSize={{ base: 'sm', lg: 'lg' }}
              color="white"
            >{`${t('heroParagraph')}`}</Text>
          </VStack>
          <VStack alignItems="flex-end">
            <Image src="/images/hero-image.png" />
          </VStack>
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default Hero
