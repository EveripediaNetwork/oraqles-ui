import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { PRESS_JSON } from '@/data/MarchMadnessPressData'
import MarchMadnessPressViewCard from './PressViewCard'

const MarchMadnessPressView = () => {
  return (
    <SimpleGrid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        xl: 'repeat(3, 1fr)',
      }}
      gap="5"
    >
      {PRESS_JSON.map((press, i) => (
        <MarchMadnessPressViewCard
          key={i}
          id={i}
          image={press.image}
          link={press.link}
          title={press.title}
          text={press.text}
        />
      ))}
    </SimpleGrid>
  )
}

export default MarchMadnessPressView
