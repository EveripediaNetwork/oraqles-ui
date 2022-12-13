import React from 'react'
import { Box, Link, Text } from '@chakra-ui/react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'

import { MarchMadnessCode } from '@/data/MarchMadnessSetupData'

const MarchMadnessInfoView = () => {
  return (
    <Box mt="0">
      <Text color="marchMadnessInfoHeading" fontSize="xl" fontWeight={600}>
        How to access the on-chain data
      </Text>
      <Text mt="3" color="marchMadnessInfoText" fontWeight={500}>
        This will get you started with retrieving the latest data from the smart
        contract on the ethereum &#34;mainnet&#34; You will need an Infura API
        Key, get one here:{' '}
        <Link
          color="heroBackground"
          href="https://infura.io/register"
          target="_blank"
        >
          https://infura.io/register
        </Link>
      </Text>
      <Box mt="8">
        <Text>
          Block Explorer:{' '}
          <Link
            color="heroBackground"
            target="_blank"
            href="https://etherscan.io/address/0x17BaF6781EE3b0BBcDffD1e2A78D8C0b40c9A77D"
          >
            0x17BaF6781EE3b0BBcDffD1e2A78D8C0b40c9A77D
          </Link>
        </Text>
        <Text mt="3">
          IPFS Data:
          <Link
            color="heroBackground"
            target="_blank"
            href="https://gateway.pinata.cloud/ipfs/QmcJ9AQPjqDbJJ8KDMiaAF8KXRGwAJx7eWf3WNGsEijKBQ"
          >
            {' '}
            QmcJ9AQPjqDbJJ8KDMiaAF8KXRGwAJx7eWf3WNGsEijKBQ
          </Link>
        </Text>
      </Box>
      <Box
        mt="8"
        overflow="auto"
        overflowY="scroll"
        h="500px"
        borderWidth="1px"
        borderRadius="lg"
      >
        <Highlight
          {...defaultProps}
          code={MarchMadnessCode.trim()}
          theme={theme}
          language="jsx"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Box as="pre" className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </Box>
          )}
        </Highlight>
      </Box>

      {/* <Box mt="4">
        <Box
          as="pre"
          mt="6"
          p="6"
          border="1px solid"
          borderColor="codeBorder"
          borderRadius="12px"
          bgColor="codeBackground"
        >
          <Box as="span" color="codeTextColor">
            const
          </Box>{' '}
          ethers ={' '}
          <Box as="span" color="codeTextColor2">
            require
          </Box>
          (
          <Box as="span" color="green.500">
            &quot;ethers&quot;
          </Box>
          );
          <br />
          <Box as="span" color="codeTextColor">
            const
          </Box>{' '}
          abi = [&#65371;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;
          <Box as="span" color="green.500">
            input
          </Box>
          &quot;: []
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;&quot;
          <Box as="span" color="green.500">
            name
          </Box>
          &quot;: &quot;
          <Box as="span" color="green.500">
            ipfsFullData
          </Box>
          &quot;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;
          <Box as="span" color="green.500">
            outputs
          </Box>
          &quot;: [
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
          <br /> &#125;]
        </Box>
      </Box> */}
    </Box>
  )
}

export default MarchMadnessInfoView
