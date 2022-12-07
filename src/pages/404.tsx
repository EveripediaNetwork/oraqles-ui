import { Button, Container, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

const Error = () => {
  const router = useRouter()

  return (
    <>
      <Divider />
      <Container maxW="6xl" py="6" pb="20" mx="auto">
        <Flex justifyContent="center" direction="column" alignItems="center">
          <Image src="./images/404.svg" alt="Robot" />
          <Text
            mt="4"
            color="errorPageText"
            fontSize={{ base: 'lg', md: 'xl' }}
            textAlign="center"
          >
            Looks like you’ve stumbled upon a broken link. Don’t worry, we’ll
            fix it soon.
          </Text>
          <Flex mt="6" justifyContent="center">
            <Button onClick={() => router.push('/')} variant="solid">
              Take me back Home
            </Button>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

export default Error
