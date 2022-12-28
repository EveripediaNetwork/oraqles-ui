import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { PRESS_JSON } from '@/data/MarchMadnessPressData'
import MarchMadnessPressViewCard from './PressViewCard'

const chunkSize = 5

const MarchMadnessPressView = () => {
  const row = Math.round(PRESS_JSON.length / 5)

  const content = []

  for (let i = 0; i < row; i += 1) {
    content.push(
      <Box>
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
      </Box>,
    )
  }

  return (
    <SimpleGrid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        xl: 'repeat(3, 1fr)',
      }}
      gap="5"
    >
      {content}
    </SimpleGrid>
  )
}

export default MarchMadnessPressView
