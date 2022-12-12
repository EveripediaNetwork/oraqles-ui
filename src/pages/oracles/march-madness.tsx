import React, { useEffect } from 'react'
import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  Text,
  Link as ChakraLink,
  Tabs,
  TabList,
  Tab,
} from '@chakra-ui/react'
import Link from 'next/link'
import shortenAccount from '@/utils/shortenAccount'
import config from '@/config'
import { useMarchMadness } from '@/hooks/useMarchMadness'
import { MarchMadnessTabData } from '@/data/MarchMadnessTabData'

const Oracles = () => {
  const backgroundImage = useColorModeValue(
    'oracles-background-light.png',
    'oracles-background-dark.png',
  )
  const { marchMadnessIpfsHash } = useMarchMadness()

  useEffect(() => {
    const fetchMarchMadnessIpfsData = async () => {
      const response = await fetch(
        `https://gateway.pinata.cloud/ipfs/${marchMadnessIpfsHash}`,
      )

      const data = await response.json()

      console.log(data)
    }

    fetchMarchMadnessIpfsData()
  })

  return (
    <>
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
          maxW="1090px"
        >
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
      <Flex alignItems="stretch" maxW="1280px" mx="auto" minH="500px">
        <Box
          w="290px"
          pr="3"
          borderRight="1px solid"
          borderColor="oraclesPageBorder"
        >
          <Tabs variant="unstyled" orientation="vertical" pt="10">
            <TabList w="full">
              {MarchMadnessTabData.map(tab => (
                <Tab
                  fontSize="sm"
                  w="full"
                  borderRadius="8px"
                  _selected={{ color: 'white', bg: 'heroBackground' }}
                  justifyContent="flex-start"
                  key={tab.id}
                  mb="3"
                >
                  {tab.label}
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </Box>
        <Box flexGrow="1">&nbsp;</Box>
      </Flex>
    </>
  )
}

export default Oracles
