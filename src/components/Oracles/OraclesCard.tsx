import React from 'react'
import {
  Stack,
  VStack,
  Box,
  Image,
  LinkOverlay,
  Heading,
  Text,
} from '@chakra-ui/react'
import { OraclesItemType } from '@/data/OraclesItemData'
import { useTranslation } from 'react-i18next'

const OraclesCard = ({ id, image, title, summary }: OraclesItemType) => {
  const { t } = useTranslation()

  return (
    <Stack
      direction="row"
      gap={{ base: '4', md: '8', lg: '16' }}
      pos="relative"
      borderRadius="10px"
      border="1px solid"
      borderColor="oraclesCardBorder"
      boxShadow="base"
      p="4"
      bgColor="oraclesCardBg"
    >
      <LinkOverlay
        pos="absolute"
        top="0"
        left="0"
        w="full"
        h="full"
        href={`oracles/${id}`}
      />
      <Box m="0 !important" flexShrink="0">
        <Image
          src={image}
          borderRadius="6px"
          w={{ base: '100px', md: '137px', lg: '280px' }}
          h={{ base: '100px', md: '106px', lg: '200px' }}
          objectFit="cover"
        />
      </Box>
      <VStack
        mx={{ base: '0' }}
        alignItems="start"
        justifyContent="center"
        flexGrow="1"
        py={{ base: '0', md: '3', lg: '6' }}
      >
        <Heading
          w="full"
          color="oraclesHeadingColor"
          fontSize={{ base: 'xs', md: 'lg', lg: 'xl' }}
        >
          {t(title)}
        </Heading>
        <Text
          w="full"
          mt={{ base: '3', md: '4', lg: '7' }}
          color="oraclesTextColor"
          fontSize={{ base: '10px', md: 'md', lg: '2xl' }}
        >
          {t(summary)}
        </Text>
      </VStack>
    </Stack>
  )
}

export default OraclesCard
