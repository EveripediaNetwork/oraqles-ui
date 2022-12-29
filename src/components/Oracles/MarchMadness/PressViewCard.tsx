import React, { useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Text,
  chakra,
  Image,
  VStack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import { PressJsonprops } from '@/data/MarchMadnessPressData'

type PressViewCardProps = PressJsonprops & {
  isGrid: boolean
}

const MarchMadnessPressViewCard = (props: PressViewCardProps) => {
  const { image, link, text, title, isGrid } = props

  console.log(isGrid)

  const [error, setError] = useState<boolean>(false)

  const brokenImageSrc = useColorModeValue(
    'broken-image-light.png',
    'broken-image-dark.png',
  )

  const [src, setSrc] = useState(image || brokenImageSrc)

  useEffect(() => {
    if (error) setSrc(`/images/${brokenImageSrc}`)
  }, [error, brokenImageSrc])

  return (
    <Flex
      mb="6"
      direction="column"
      border="1px solid"
      minH={isGrid ? '390px' : '350px'}
      justifyContent="space-between"
      borderColor="oraclesPressViewCardBorder"
      cursor="pointer"
      rounded="lg"
    >
      <Box>
        <Image
          src={src}
          onError={() => {
            setError(true)
          }}
          display="block"
          w="full"
          h="200px"
          objectFit="cover"
          borderRadius="none"
          roundedTop="lg"
        />
      </Box>
      <VStack pt="4" w="full">
        <chakra.div w="full" px="3">
          <Link href={link} target="_blank">
            <Text fontWeight="bold" color="oraclesTextColor">
              VIEW
            </Text>
          </Link>
        </chakra.div>

        <chakra.div
          px="3"
          fontWeight={500}
          fontSize="sm"
          color="oraclesTextColor"
        >
          {text}
        </chakra.div>
        <Link
          href={`https://${title}`}
          target="_blank"
          fontSize="xs"
          borderRadius="none"
          roundedBottom="lg"
          py="2"
          px="2"
          fontWeight={500}
          bg="pressViewCardFooter"
          w="full"
          position="relative"
          bottom="0"
          borderTop="1px solid"
          borderColor="oraclesPressViewCardBorder"
          color="heroBackground"
        >
          {title}
        </Link>
      </VStack>
    </Flex>
  )
}

export default MarchMadnessPressViewCard
