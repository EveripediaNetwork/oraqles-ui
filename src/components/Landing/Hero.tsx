import React from 'react'
import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <Box
      bgSize="cover"
      bgRepeat="no-repeat"
      bgImage={{
        base: './images/background.png',
      }}
      bgPos="center"
      h={{ base: '200px', md: '300px', lg: '400px' }}
    >
      <SimpleGrid
        px={{ base: 3, lg: 10 }}
        w={{ base: 'full', lg: '90vw', xl: '1375px' }}
        mx="auto"
        templateColumns="1.5fr 1fr"
        h="full"
      >
        <Flex h="full" direction="column" justifyContent="center">
          <Heading
            color="white"
            fontSize={{ base: '18', md: '32', lg: '50' }}
          >{`${t('heroHeading')}`}</Heading>
          <Text
            w={{ base: '100%', lg: '80%' }}
            mt={{ base: '4', lg: '2' }}
            lineHeight={{ base: '16px', md: '21px', lg: '32px' }}
            fontSize={{ base: '12px', md: 'md', lg: 'lg' }}
            color="white"
          >{`${t('heroParagraph')}`}</Text>
        </Flex>
        <Box>
          <Image
            w="full"
            h="full"
            objectFit="cover"
            display="block"
            src="./images/ape.png"
            alt="Welcome to IQ OraQles"
          />
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default Hero
