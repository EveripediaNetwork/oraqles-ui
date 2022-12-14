import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import MarchMadnessBracketsCard from './BracketsCard'

interface MarchMadnessBracketsViewProps {
  //   tournament: {
  //     id: string
  //     league: {
  //       id: string
  //       alias: string
  //       name: string
  //     }
  //     location: string
  //     name: string
  //     rounds: {
  //       id: string
  //       name: string
  //       sequence: number
  //       game: []
  //       bracketed: {
  //         bracket: {
  //           id: string
  //           location: string
  //           name: string
  //         }
  //         games: {
  //           id: string
  //           status: string
  //         }[]
  //       }[]
  //     }[]
  //   }
  tournament: any
}

const FirstRound = () => {
  return (
    <Box w="320px">
      <Text color="bracketsHeading" textAlign="center" mb="6">
        First Four
      </Text>
      <MarchMadnessBracketsCard />
    </Box>
  )
}

const MarchMadnessBracketsView = ({
  tournament,
}: MarchMadnessBracketsViewProps) => {
  console.log(tournament.rounds)
  return (
    <Flex overflowX="scroll">
      <FirstRound />
    </Flex>
  )
}

export default MarchMadnessBracketsView
