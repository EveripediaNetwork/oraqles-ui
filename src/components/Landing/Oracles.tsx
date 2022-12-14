import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { OraclesItemType, ORAQLES_ITEMS } from '@/data/OraclesItemData'
import OraclesCard from '../Oracles/OraclesCard'

const Oracles = () => {
  return (
    <Box
      as="section"
      px={{ base: 3, lg: 20 }}
      w="full"
      mx="auto"
      my={{ base: '12', md: '13', lg: '18' }}
    >
      <SimpleGrid rowGap={{ base: '8', md: '10', lg: '15' }}>
        {ORAQLES_ITEMS.map((oraqle: OraclesItemType) => (
          <OraclesCard
            id={oraqle.id}
            key={oraqle.id}
            image={oraqle.image}
            title={oraqle.title}
            summary={oraqle.summary}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Oracles
