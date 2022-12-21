import { StatisticsData } from '@/types/Statistics'
import { Box } from '@chakra-ui/react'
import React from 'react'

const TeamStatsViewer = ({ statistics }: Record<string, StatisticsData>) => {
  console.log(statistics)
  return <Box>&nbsp;</Box>
}

export default TeamStatsViewer
