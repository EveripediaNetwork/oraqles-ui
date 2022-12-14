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
  Spinner,
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
import { MarchMadnessData, MarchMadnessFullData } from '@/types/MarchMadness'
import TeamStatsViewer from '@/components/Oracles/MarchMadness/TeamStatsViewer'
import { Statistics, StatisticsData } from '@/types/Statistics'

const Oracles = () => {
  const [isLoading, setIsLoading] = useState(true)
  const backgroundImage = useColorModeValue(
    'oracles-background-light.png',
    'oracles-background-dark.png',
  )
  const { marchMadnessIpfsHash } = useMarchMadness()
  const [marchMadnessData, setMarchMadnessData] =
    useState<MarchMadnessFullData>()

  useEffect(() => {
    const fetchMarchMadnessIpfsData = async () => {
      try {
        const response = await fetch(
          `https://gateway.pinata.cloud/ipfs/${marchMadnessIpfsHash}`,
        )
        const data = (await response.json()) as MarchMadnessData

        const statisticsRes = await fetch(
          `https://gateway.pinata.cloud/ipfs/${data.statistics_hash}`,
        )

        const statisticsData = (await statisticsRes.json()) as Statistics
        const statistics = Object.values(statisticsData) as StatisticsData[]
        setMarchMadnessData(prevData => {
          return {
            ...prevData,
            tournament: data.tournament,
            statistics,
          }
        })
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err)
      }
    }
    setIsLoading(true)
    fetchMarchMadnessIpfsData()
    setIsLoading(false)
  }, [marchMadnessIpfsHash])

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
      {!isLoading && (
        <Tabs
          display="flex"
          alignItems="stretch"
          maxW="1280px"
          px={{ base: '5', md: '8', xl: '0' }}
          pl={{ base: '5', md: 0 }}
          mx="auto"
          variant="unstyled"
          orientation="vertical"
          defaultIndex={0}
          flexDirection={{ base: 'column', lg: 'row' }}
          isLazy
        >
          <Box
            pt="8"
            px={{ md: '8', lg: 4 }}
            w={{ lg: '250px', xl: '300px' }}
            flexShrink="0"
            pr="5"
          >
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
          <Box minH="100vh" display={{ base: 'none', lg: 'block' }}>
            <Divider orientation="vertical" />
          </Box>
          <Box
            flexGrow="1"
            py="8"
            pl={{ base: '0', md: '8' }}
            overflowX="scroll"
          >
            <TabPanels>
              <TabPanel p="0">
                <MarchMadnessInfoView />
              </TabPanel>
              <TabPanel p="0">
                {marchMadnessData?.tournament && (
                  <MarchMadnessBracketsView
                    tournament={marchMadnessData?.tournament}
                  />
                )}
              </TabPanel>
              <TabPanel p="0">
                {marchMadnessData?.statistics && (
                  <TeamStatsViewer statistics={marchMadnessData?.statistics} />
                )}
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
      )}
      {isLoading && (
        <Flex alignItems="center" justifyContent="center" h="50vh">
          <Spinner emptyColor="gray.200" color="blue.500" size="xl" />
        </Flex>
      )}
    </>
  )
}

export default Oracles
