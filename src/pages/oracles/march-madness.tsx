import React, { useEffect, useState } from 'react'
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
  TabPanels,
  TabPanel,
  Divider,
} from '@chakra-ui/react'
import Link from 'next/link'
import shortenAccount from '@/utils/shortenAccount'
import config from '@/config'
import { useMarchMadness } from '@/hooks/useMarchMadness'
import { MarchMadnessTabData } from '@/data/MarchMadnessTabData'
import MarchMadnessPressView from '@/components/Oracles/MarchMadness/PressView'
import MarchMadnessInfoView from '@/components/Oracles/MarchMadness/InfoView'
import { MarchMadnessSEO } from '@/components/SEO/Oracles'
import MarchMadnessJsonViewer from '@/components/Oracles/MarchMadness/JsonViewer'
import MarchMadnessBracketsView from '@/components/Oracles/MarchMadness/BracketsView'

const Oracles = () => {
  const backgroundImage = useColorModeValue(
    'oracles-background-light.png',
    'oracles-background-dark.png',
  )
  const { marchMadnessIpfsHash } = useMarchMadness()
  const [marchMadnessData, setMarchMadnessData] = useState({
    tournament: {},
    statistics: {},
  })

  useEffect(() => {
    const fetchMarchMadnessIpfsData = async () => {
      const response = await fetch(
        `https://gateway.pinata.cloud/ipfs/${marchMadnessIpfsHash}`,
      )

      const data = await response.json()

      setMarchMadnessData(prevData => {
        return {
          ...prevData,
          tournament: data.tournament,
          statistics: data.statistics,
        }
      })
    }

    fetchMarchMadnessIpfsData()
  }, [])

  return (
    <>
      <MarchMadnessSEO />
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
      <Tabs
        display="flex"
        alignItems="stretch"
        maxW="1280px"
        px={{ base: '5', md: '8', xl: '0' }}
        mx="auto"
        variant="unstyled"
        orientation="vertical"
        defaultIndex={1}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box pt="8" w={{ md: '250px', xl: '300px' }} flexShrink="0" pr="5">
          <TabList w="full">
            {MarchMadnessTabData.map(tab => (
              <Tab
                h={{ base: '30px', md: '50px' }}
                fontSize="sm"
                w="full"
                borderRadius="8px"
                _selected={{ color: 'white', bg: 'heroBackground' }}
                justifyContent="space-between"
                key={tab.id}
                mb="3"
              >
                <Box as="span" fontSize={{ base: 'xs', lg: 'sm' }}>
                  {tab.label}
                </Box>
                {tab.id === 'json' && (
                  <Box
                    bgColor="oraclesViewerButton"
                    p="2"
                    borderRadius="20px"
                    as="span"
                    color="oraclesTextColor"
                    fontSize={{ base: '6px', lg: '12px' }}
                  >
                    viewer
                  </Box>
                )}
              </Tab>
            ))}
          </TabList>
        </Box>
        <Box minH="100vh" display={{ base: 'none', md: 'block' }}>
          <Divider orientation="vertical" />
        </Box>

        <Box flexGrow="1" py="8" pl={{ base: '0', md: '8' }}>
          <TabPanels>
            <TabPanel p="0">
              <MarchMadnessInfoView />
            </TabPanel>
            <TabPanel p="0" overflowX="hidden" maxW="full">
              <MarchMadnessBracketsView
                tournament={marchMadnessData?.tournament}
              />
            </TabPanel>
            <TabPanel p="0">
              <p>Team Stats</p>
            </TabPanel>
            <TabPanel p="0">
              <MarchMadnessJsonViewer />
            </TabPanel>
            <TabPanel p="0">
              <MarchMadnessPressView />
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </>
  )
}

export default Oracles
