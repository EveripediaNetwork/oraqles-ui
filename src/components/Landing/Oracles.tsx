import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { OraclesItemType, ORAQLES_ITEMS } from '@/data/OraclesItemData'
import OraclesCard from '../Oracles/OraclesCard'

const Oracles = () => {
  return (
    <Box
      as="section"
      mt="20"
      px={{ base: 3, lg: 10 }}
      w={{ base: 'full', lg: '90vw', xl: '1375px' }}
      mx="auto"
      mb="20"
    >
      <SimpleGrid rowGap="15">
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