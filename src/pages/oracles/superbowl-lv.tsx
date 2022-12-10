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

const Oracles = () => {
  const backgroundImage = useColorModeValue(
    'oracles-background-light.png',
    'oracles-background-dark.png',
  )
  const { superbowlWinner } = useSuperbowl()
  console.log(superbowlWinner)
  return (
    <VStack w="full" mb={{ base: '12', md: '16', lg: '20' }}>
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
      <Box py="4" px={{ base: 3, lg: 10 }} w="full" mx="auto">
        <Stack direction="column" py="10" w="full" px="5" gap="15">
          <VStack
            cursor="pointer"
            px="3"
            borderRadius="10px"
            border="1px solid"
            borderColor="oraclesCardBorder"
            boxShadow="base"
            alignItems="start"
            justifyContent="center"
            flexGrow="1"
            py={{ base: '3', lg: '6' }}
          >
            <Heading
              fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
              py="5"
              px="3"
            >
              Winner
            </Heading>
          </VStack>
          <Link href="/" passHref>
            <Box
              cursor="pointer"
              px="3"
              textAlign="center"
              py={{ base: '3', lg: '6' }}
              borderRadius="10px"
              border="1px solid"
              borderColor="oraclesCardBorder"
              boxShadow="base"
            >
              <Text fontSize={{ base: '29px', lg: '25px' }} fontWeight="bold">
                View on Ethereum Mainnet
              </Text>
              <Text
                w="full"
                mt={{ base: '3', md: '4', lg: '7' }}
                color="oraclesTextColor"
                fontSize={{ base: 'md', lg: 'lg' }}
              >
                View what this dashbaord might look like after race calls
                arrive.
              </Text>
            </Box>
          </Link>
        </Stack>
      </Box>
    </VStack>
  )
}

export default Oracles
