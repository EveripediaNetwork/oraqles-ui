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
        h="90px"
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
        <Flex justifyContent="space-between">&nbsp;</Flex>
      </Flex>
      <Box w="full" bgColor="bracketsCardBottomBg" p="2.5">
        &nbsp;
      </Box>
    </Flex>
  )
}

export default MarchMadnessBracketsCard
