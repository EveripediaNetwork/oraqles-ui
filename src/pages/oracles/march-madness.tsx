import React from 'react'
import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Link from 'next/link'
import shortenAccount from '@/utils/shortenAccount'
import config from '@/config'

const Oracles = () => {
  const backgroundImage = useColorModeValue(
    'oracles-background-light.png',
    'oracles-background-dark.png',
  )
  return (
    <Box
      bgColor="oraclesBackground"
      minH="300px"
      bgImage={`/images/${backgroundImage}`}
      py={20}
    >
      <Flex justifyContent="center" direction="column" mx="auto" maxW="1090px">
        <Heading textAlign="center" color="oraclesHeadingColor">
          March Madness Oraqle Dashboard
        </Heading>
        <Text mt="4" color="oraclesTextColor" textAlign="center">
          This data is read directly from the mainnet Ethereum blockchain.
        </Text>
        <Text textAlign="center" mt="4" color="oraclesTextColor">
          Pulled from{' '}
          <Box as="span" color="oraclesHeadingColor">
            <Link
              href={`https://etherscan.io/address/${config.marchMadnessContractAddress}`}
              passHref
              target="_blank"
            >
              <ChakraLink
                textDecoration="none"
                _hover={{ textDecoration: 'underline' }}
              >
                {shortenAccount(config.marchMadnessContractAddress)}
              </ChakraLink>
            </Link>
          </Box>
        </Text>
      </Flex>
    </Box>
  )
}

export default Oracles
