import React from 'react'
import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  Text,
  Link as ChakraLink,
  Stack,
  chakra,
} from '@chakra-ui/react'
import Link from 'next/link'
import config from '@/config'
import shortenAccount from '@/utils/shortenAccount'
import OraclesResultCard from '@/components/Oracles/OraclesResultCard'
import { allStates } from '@/data/ApElectionStatesData'
import { useApElection } from '@/hooks/useApElection'

const Oracles = () => {
  const backgroundImage = useColorModeValue(
    'oracles-background-light.png',
    'oracles-background-dark.png',
  )

  const GetWinner = (item: string) => {
    const { ApElectionWinner } = useApElection(item)
    return ApElectionWinner
  }

  const allData = allStates.map(item => {
    const ApElectionWinner = GetWinner(item)
    const winner: string = ApElectionWinner as string
    const winnerString = winner?.toString()
    const winnerArray = winnerString?.split(',')
    if (winnerArray) {
      const jsonTemplate = `
      "${item}": {
        "winner": "${winnerArray[0]}",
        "resultNow": "${winnerArray[1]}", 
        "resultBlock": "${winnerArray[2]}"
      }`
      const cover = ''
      const data = cover.concat(jsonTemplate)
      return data
    }
    return ''
  })
  return (
    <Stack w="full" mb={{ base: '6', md: '8', lg: '10' }} direction="column">
      <Box
        bgColor="oraclesBackground"
        minH="300px"
        bgImage={`/images/${backgroundImage}`}
        py={20}
      >
        <Flex
          justifyContent="center"
          direction="column"
          mx="auto"
          px={{ base: '4', lg: '0' }}
          maxW="1090px"
        >
          <Heading
            size={{ base: 'lg', lg: 'xl' }}
            textAlign="center"
            color="oraclesHeadingColor"
          >
            Welcome to AP Election Mission Control
          </Heading>
          <Text
            mt="4"
            fontSize={{ base: 'sm', lg: 'md' }}
            color="oraclesTextColor"
            textAlign="center"
          >
            This data is read directly from the mainnet Ethereum blockchain.
          </Text>
          <Text
            textAlign="center"
            mt="4"
            fontSize={{ base: 'sm', lg: 'md' }}
            color="oraclesTextColor"
          >
            Pulled from{' '}
            <Box as="span" color="oraclesHeadingColor">
              <Link
                href={`https://etherscan.io/address/${config.apElectionsContractAddress}`}
                passHref
                target="_blank"
              >
                <ChakraLink
                  textDecoration="none"
                  _hover={{ textDecoration: 'underline' }}
                >
                  {shortenAccount(config.apElectionsContractAddress)}
                </ChakraLink>
              </Link>
            </Box>
          </Text>
        </Flex>
      </Box>
      <Box w="full" p="5">
        <Text textAlign="center" fontSize="xl" w="full">
          Associated press had called{' '}
          <chakra.span fontWeight="bold"> 52 </chakra.span>out of 52 states. (50
          states + D.C. + US)
        </Text>
        <Text textAlign="center" fontSize="xl" w="full">
          <chakra.span color="red.500">25 states called for Trump </chakra.span>
          ,{' '}
          <chakra.span color="blue.500">
            27 states called for Biden.
          </chakra.span>
        </Text>

        <Box
          my="10"
          overflow="auto"
          overflowY="scroll"
          py="5"
          px="5"
          h="400px"
          mx="auto"
          borderWidth="1px"
          borderRadius="lg"
          w={{ base: 'full', md: '768px' }}
        >
          <pre>{`{${allData}}`}</pre>
        </Box>

        <Flex
          direction="column"
          mt="3"
          textAlign="center"
          py="7"
          gap="10"
          px={{ base: 3, lg: 10 }}
          w={{ base: 'full', md: '768px' }}
          mx="auto"
        >
          <Heading> Developer Docs</Heading>
          <OraclesResultCard
            title="Fetch election calls with solidity"
            text="For Ethereum developers using the Solidity smart-contract
                language"
            link="https://docs.everipedia.org/eth/fetch-election-calls-with-solidity"
          />
          <OraclesResultCard
            title="Fetch election calls with web3"
            text="For Ethereum developers using Javascript (like this web app)"
            link="https://docs.everipedia.org/eth/fetch-election-calls-with-web3"
          />
          <OraclesResultCard
            title="EOS Contract Documentation"
            text="For EOS developers"
            link="https://docs.everipedia.org/eosio/mainnet"
          />
        </Flex>
      </Box>
    </Stack>
  )
}

export default Oracles
