import React, { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import ReactJson from 'react-json-view'
import { useMarchMadness } from '@/hooks/useMarchMadness'

const JsonViewer = () => {
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
      <ReactJson
        collapsed={3}
        enableClipboard={false}
        src={jsonData}
        // theme={{"ocean"}}
      />
    </Box>
  )
}

export default JsonViewer
