import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/react'
import { OraclesResultCardprops } from '@/data/OraclesItemData'
import Link from 'next/link'

const OraclesResultCard = ({ title, text, link }: OraclesResultCardprops) => {
  return (
    <Link href={link} passHref>
      <Box
        cursor="pointer"
        px="3"
        mx="5"
        textAlign="center"
        py={{ base: '6', lg: '10' }}
        borderRadius="10px"
        border="1px solid"
        borderColor="oraclesCardBorder"
        boxShadow="base"
      >
        <Heading color="oraclesTextColor" fontSize={{ base: '2xl', md: '3xl' }}>
          {title}
        </Heading>
        <Text
          w="full"
          mt={{ base: '3', md: '4', lg: '7' }}
          color="oraclesTextColor"
          fontSize={{ base: 'xl', md: '2xl' }}
        >
          {text}
        </Text>
      </Box>
    </Link>
  )
}

export default OraclesResultCard
