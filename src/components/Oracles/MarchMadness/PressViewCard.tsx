import React, { useState } from 'react'
import { Box, Flex, Text, chakra, Image, VStack } from '@chakra-ui/react'
import { PressJsonprops } from '@/data/MarchMadnessPressData'
import Link from 'next/link'

const BROKEN_IMAGE = '/images/broken.png'

const MarchMadnessPressViewCard = ({
  image,
  title,
  text,
  link,
}: PressJsonprops) => {
  const [src, setSrc] = useState(image || BROKEN_IMAGE)

  return (
    <Flex
      direction="column"
      border="1px solid"
      minH="350px"
      justifyContent="space-between"
      borderColor="oraclesPressViewCardBorder"
      cursor="pointer"
      rounded="lg"
    >
      <Box>
        <Image
          src={src}
          onError={() => setSrc(BROKEN_IMAGE)}
          display="block"
          w="full"
          h="220px"
          objectFit="cover"
          bgColor="#FAFAFA"
          borderRadius="none"
          roundedTop="lg"
        />
      </Box>
      <VStack pt="4" w="full">
        <chakra.div w="full" px="3">
          <Link href={link} passHref target="_blank">
            <Text fontWeight="bold">VIEW</Text>
          </Link>
        </chakra.div>

        <chakra.div px="3" fontWeight="light">
          {text}
        </chakra.div>
        <chakra.div
          borderRadius="none"
          roundedBottom="lg"
          py="2"
          px="2"
          fontWeight="light"
          bg="gray.50"
          w="full"
          position="relative"
          bottom="0"
          color="heroBackground"
        >
          {title}
        </chakra.div>
      </VStack>
    </Flex>
  )
}

export default MarchMadnessPressViewCard
