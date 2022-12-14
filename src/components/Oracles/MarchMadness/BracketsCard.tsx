import React from 'react'
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { RiTrophyFill } from 'react-icons/ri'

const MarchMadnessBracketsCard = () => {
  return (
    <Flex
      border="1px solid"
      borderColor="bracketsCardBorder"
      borderRadius="6px"
      direction="column"
    >
      <Flex
        direction="column"
        justifyContent="space-between"
        w="full"
        bgColor="bracketsCardTopBg"
        h="80px"
        p="2.5"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center" gap="1">
            <Text fontSize="xs" fontWeight={500} color="green.500">
              TXSO (16)
            </Text>
            <Icon as={RiTrophyFill} fill="yellow.500" />
          </Flex>
          <Box>
            <Text fontSize="xs" fontWeight={500} color="green.500">
              60
            </Text>
          </Box>
        </Flex>
        <Flex justifyContent="space-between">
          <Flex alignItems="center" gap="1">
            <Text fontSize="xs" fontWeight={500} color="bracketsCardLoserText">
              MSM (16)
            </Text>
          </Flex>
          <Box>
            <Text fontSize="xs" fontWeight={500} color="bracketsCardLoserText">
              52
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex
        w="full"
        justifyContent="space-between"
        bgColor="bracketsCardBottomBg"
        p="2.5"
      >
        <Text color="bracketsFooterText" fontSize="10px" fontWeight={500}>
          Thu Mar 18, 2021
        </Text>
        <Text color="bracketsFooterText" fontSize="10px" fontWeight={500}>
          10:10:00PM
        </Text>
      </Flex>
    </Flex>
  )
}

export default MarchMadnessBracketsCard
