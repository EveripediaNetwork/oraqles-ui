import React from 'react'
import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  Text,
  Link as ChakraLink,
  VStack,
  Stack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useUSElection } from '@/hooks/useElection'
import config from '@/config'
import shortenAccount from '@/utils/shortenAccount'

const positions = ['U.S. Senate Class II', 'U.S. Senate Class III']

const Oracles = () => {
  const backgroundImage = useColorModeValue(
    'oracles-background-light.png',
    'oracles-background-dark.png',
  )

  const GetWinner = (i: number) => {
    const winner = useUSElection(positions[i])
    const result: string = winner.USElectionWinner as string
    return result || `winner${i}`
  }

  return (
    <VStack w="full" mb={{ base: '12', md: '16', lg: '20' }}>
      <Box
        bgColor="oraclesBackground"
        minH="300px"
        bgImage={`/images/${backgroundImage}`}
        pt={20}
        w="full"
      >
        <Flex
          justifyContent="center"
          direction="column"
          mx="auto"
          maxW="1090px"
        >
          <Heading textAlign="center" color="oraclesHeadingColor">
            January 5th Senate Runoff
          </Heading>
          <Text mt="4" color="oraclesTextColor" textAlign="center">
            This data is read directly from the mainnet Ethereum blockchain.
          </Text>
          <Text textAlign="center" mt="4" color="oraclesTextColor">
            Pulled from{' '}
            <Box as="span" color="oraclesHeadingColor">
              <Link
                href={`https://etherscan.io/address/${config.usElectionContractAddress}`}
                passHref
                target="_blank"
              >
                <ChakraLink
                  textDecoration="none"
                  _hover={{ textDecoration: 'underline' }}
                >
                  {shortenAccount(config.usElectionContractAddress)}
                </ChakraLink>
              </Link>
            </Box>
          </Text>
        </Flex>
      </Box>
      <Box px={{ base: 3, lg: 10 }} w={{ base: 'full', md: '768px' }} mx="auto">
        <Stack
          direction="column"
          py="10"
          w="full"
          px="5"
          spacing={{ base: '5', md: '10' }}
        >
          {positions.map((item, i) => (
            <VStack
              key={i}
              cursor="pointer"
              px="3"
              borderRadius="10px"
              border="1px solid"
              borderColor="oraclesCardBorder"
              boxShadow="sm"
              alignItems="start"
              justifyContent="center"
              flexGrow="1"
              py={{ base: '6', lg: '10' }}
            >
              <Heading
                w="full"
                textAlign="center"
                color="oraclesTextColor"
                fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
              >
                {item}
              </Heading>
              <Text
                textAlign="center"
                w="full"
                mt={{ base: '3', md: '4', lg: '7' }}
                color="oraclesTextColor"
              >
                {GetWinner(i)}
              </Text>
            </VStack>
          ))}
        </Stack>
        <Link
          href="https://docs.everipedia.org/current-oraqles-projects/jan-5-2021"
          passHref
        >
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
            <Heading
              color="oraclesTextColor"
              fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            >
              Developer Docs
            </Heading>
            <Text
              w="full"
              mt={{ base: '3', md: '4', lg: '7' }}
              color="oraclesTextColor"
            >
              January 5th, 2021 Senate Runoff
            </Text>
          </Box>
        </Link>
      </Box>
    </VStack>
  )
}

export default Oracles
