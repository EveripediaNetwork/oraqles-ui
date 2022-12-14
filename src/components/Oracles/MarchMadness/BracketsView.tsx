import React from 'react'
import { Box } from '@chakra-ui/react'

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

const MarchMadnessBracketsView = ({
  tournament,
}: MarchMadnessBracketsViewProps) => {
  console.log(tournament)
  return <Box>&nbsp;</Box>
}

export default MarchMadnessBracketsView
