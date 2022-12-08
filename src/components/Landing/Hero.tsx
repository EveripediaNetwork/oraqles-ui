import React from 'react'
import {
  Box,
  Flex,
  Heading,
  VStack,
  Image,
  Text,
  SimpleGrid,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <Box
      as="section"
      bgGradient={{
        base: 'linear(105deg, heroBackground 60%, transparent 60%, heroBackground 60.1%)',
        lg: 'linear(105deg, heroBackground 50%, transparent 50%, heroBackground 50.1%)',
      }}
    >
      <Flex
        px={{ base: 3, lg: 10 }}
        w={{ base: 'full', lg: '90vw', xl: '1375px' }}
        mx="auto"
      >
        <SimpleGrid
          w="full"
          templateColumns={{ base: '2fr 1fr', md: '1fr 1fr' }}
        >
          <VStack
            py={{ base: '6', md: '8', lg: '16' }}
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
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default Hero
