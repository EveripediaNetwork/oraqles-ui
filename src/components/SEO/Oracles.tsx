import React from 'react'
import { NextSeo } from 'next-seo'

export const MarchMadnessSEO = () => {
  return (
    <NextSeo
      title="March Madness 2021 OraQle"
      titleTemplate="%s | IQ OraQles"
      description="BrainDAO brings real-world information onto the blockchain with our innovative OraQle product. Try it on Ethereum today."
      canonical="https://oraqles-ui.vercel.app/oracles/march-madness"
      openGraph={{
        title: 'March Madness 2021 OraQle',
        description:
          'BrainDAO brings real-world information onto the blockchain with our innovative OraQle product. Try it on Ethereum today.',
        images: [
          {
            url: 'https://gateway.pinata.cloud/ipfs/QmSYvzgmBQAaX1q3oyV2uVZzcmRn7JDgepFMTzAbemQZnF',
            alt: 'March Madness 2021 OraQle',
          },
        ],
      }}
    />
  )
}
