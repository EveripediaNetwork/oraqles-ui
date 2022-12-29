import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { PRESS_JSON } from '@/data/MarchMadnessPressData'
import MarchMadnessPressViewCard from './PressViewCard'

const chunkSize = 5

const MarchMadnessPressView = () => {
  const content = []

  for (let i = 0; i < PRESS_JSON.length; i += chunkSize) {
    const chunk = (
      <Box
        key={i}
        display={content[1] && { md: 'grid', lg: 'block' }}
        gridTemplateColumns={content[1] && 'repeat(2,1fr)'}
        gridColumn={content[1] && { md: 'span 2', lg: 'initial' }}
        columnGap={content[1] && { md: '6', lg: '0' }}
      >
        {PRESS_JSON.slice(i, i + chunkSize).map((press, j) => (
          <MarchMadnessPressViewCard
            isGrid={i === 2}
            key={j}
            image={press.image}
            link={press.link}
            title={press.title}
            text={press.text}
          />
        ))}
      </Box>
    )
    content.push(chunk)
  }

  return (
    <SimpleGrid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        xl: 'repeat(3, 1fr)',
      }}
      gap={{ base: 0, md: '5' }}
      rowGap={{ md: '0', lg: '5' }}
    >
      {content}
    </SimpleGrid>
  )
}

export default MarchMadnessPressView
