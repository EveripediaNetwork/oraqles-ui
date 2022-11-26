import React from 'react'
import { Box, Flex, Heading, Stack, VStack } from '@chakra-ui/react'
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
        py="16"
      >
        <Stack direction="row">
          <VStack>
            <Heading
              color="white"
              fontSize={{ base: '20', md: '32', lg: '54' }}
            >{`${t('heroHeading')}`}</Heading>
          </VStack>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Hero
