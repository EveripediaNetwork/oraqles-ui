import React, { useState, useEffect } from 'react'
import { Box, useColorMode } from '@chakra-ui/react'
import { useMarchMadness } from '@/hooks/useMarchMadness'
import dynamic from 'next/dynamic'

const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false })

const JsonViewer = () => {
  const { colorMode } = useColorMode()
  const [jsonData, setJsonData] = useState({})
  const { marchMadnessIpfsHash } = useMarchMadness()
  const fetchMarchMadnessIpfsData = async () => {
    const response = await fetch(
      `https://gateway.pinata.cloud/ipfs/${marchMadnessIpfsHash}`,
    )
    const data = await response.json()
    setJsonData(data)
  }
  useEffect(() => {
    fetchMarchMadnessIpfsData()
  })
  return (
    <Box
      mt="1"
      overflow="auto"
      overflowY="scroll"
      py="5"
      px="5"
      h="600px"
      borderWidth="1px"
      borderRadius="lg"
    >
      <DynamicReactJson
        collapsed={3}
        enableClipboard={false}
        src={jsonData}
        theme={colorMode === 'dark' ? 'codeschool' : 'bright:inverted'}
      />
    </Box>
  )
}

export default JsonViewer
