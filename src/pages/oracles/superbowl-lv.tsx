import React from 'react'
import {
  Stack,
  VStack,
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
import { useSuperbowl } from '@/hooks/useSuperbowl'
import OraclesResultCard from '@/components/Oracles/OraclesResultCard'

const Oracles = () => {
  const backgroundImage = useColorModeValue(
    'oracles-background-light.png',
    'oracles-background-dark.png',
  )
  const { superbowlWinner } = useSuperbowl()
  const winner: string = superbowlWinner as string
  return (
    <VStack w="full" mb={{ base: '6', md: '8', lg: '10' }}>
      <Box
        bgColor="oraclesBackground"
        minH="300px"
        bgImage={`/images/${backgroundImage}`}
        py={20}
        w="full"
      >
        <Flex
          justifyContent="center"
          direction="column"
          mx="auto"
          maxW="1090px"
        >
          <Heading textAlign="center" color="oraclesHeadingColor">
            February 7th Super Bowl LV
          </Heading>
          <Text mt="4" color="oraclesTextColor" textAlign="center">
            This data is read directly from the mainnet Ethereum blockchain.
          </Text>
          <Text textAlign="center" mt="4" color="oraclesTextColor">
            Pulled from{' '}
            <Box as="span" color="oraclesHeadingColor">
              <Link
                href={`https://etherscan.io/address/${config.superbowlContractAddress}`}
                passHref
                target="_blank"
              >
                <ChakraLink
                  textDecoration="none"
                  _hover={{ textDecoration: 'underline' }}
                >
                  {shortenAccount(config.superbowlContractAddress)}
                </ChakraLink>
              </Link>
            </Box>
          </Text>
        </Flex>
      </Box>
      <Box px={{ base: 3, lg: 10 }} w={{ base: 'full', md: '768px' }} mx="auto">
        <Stack direction="column" py="10" w="full" px="5" gap="15">
          <VStack
            cursor="pointer"
            px="3"
            borderRadius="10px"
            border="1px solid"
            borderColor="oraclesCardBorder"
            boxShadow="sm"
            alignItems="start"
            justifyContent="center"
            flexGrow="1"
            py={{ base: '3', lg: '6' }}
          >
            <Heading
              w="full"
              textAlign="center"
              fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
              py="5"
              px="3"
            >
              {winner}
            </Heading>
          </VStack>
          <OraclesResultCard
            title="View on Ethereum Mainnet"
            text=" View what this dashbaord might look like after race calls
            arrive."
            link={`https://etherscan.io/address/${config.superbowlContractAddress}`}
          />
        </Stack>
      </Box>
    </VStack>
  )
}

export default Oracles
