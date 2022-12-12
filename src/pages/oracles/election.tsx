import React, { useEffect, useState } from 'react'
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
import { ethers } from 'ethers'

const Oracles = () => {
  const backgroundImage = useColorModeValue(
    'oracles-background-light.png',
    'oracles-background-dark.png',
  )
  // const [jsonResult, setJsonResult] = useState('')
  // allStates.map((item, i) => {
  //   const { ApElectionWinner } = useApElection(item)
  //   const winner: string = ApElectionWinner as string
  //   let data = `"${item}": {"winner": "${
  //     winner[0]
  //   }","resultNow": "${ethers.utils.formatUnits(
  //     winner[1],
  //   )}","resultBlock: "${ethers.utils.formatUnits(winner[2])}",},`
  //   let datas = jsonResult.concat(data)
  //   setJsonResult(datas)
  //   console.log(i, winner, typeof winner, data)
  // })

  // useEffect(() => {}, [])

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
        <Text alignSelf="flex-start" fontSize="xl">
          Associated press had called{' '}
          <chakra.span fontWeight="bold"> 52 </chakra.span>out of 52 states. (50
          states + D.C. + US)
        </Text>
        <Text alignSelf="flex-start" fontSize="xl">
          25 states called for Trump, 27 states called for Biden.
        </Text>
        <Box>{/* <Text></Text> */}</Box>
        <Flex direction="column" mt="3" textAlign="center" py="7" gap="10">
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
