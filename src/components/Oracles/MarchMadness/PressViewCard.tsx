import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import { PressJsonprops } from '@/data/MarchMadnessPressData'

const MarchMadnessPressViewCard = ({
  image,
  title,
  text,
  link,
}: PressJsonprops) => {
  console.log(title, text, link)
  return (
    <Flex
      direction="column"
      border="1px solid"
      minH="350px"
      justifyContent="space-between"
      borderColor="oraclesPressViewCardBorder"
    >
      <Box>
        <Image
          src={image}
          display="block"
          w="full"
          h="220px"
          objectFit="cover"
          bgColor="#FAFAFA"
        />
      </Box>
    </Flex>
  )
}

export default MarchMadnessPressViewCard
