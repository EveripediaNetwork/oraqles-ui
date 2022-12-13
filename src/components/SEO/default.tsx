import React from 'react'
import { DefaultSeo } from 'next-seo'
import { NextRouter } from 'next/router'

interface SEOHeaderProps {
  router: NextRouter
}

const SEOHeader = ({ router }: SEOHeaderProps) => {
  return (
    <DefaultSeo
      title="IQ OraQles"
      description="BrainDAO brings real-world information onto the blockchain with our innovative OraQle product. Try it on Ethereum today."
      canonical={`https://oraqles-ui.vercel.app/${router.asPath || ''}`}
      openGraph={{
        title: 'IQ Oraqles',
        description:
          'BrainDAO brings real-world information onto the blockchain with our innovative OraQle product. Try it on Ethereum today.',
        type: 'website',
        site_name: 'IQ OraQles',
        images: [
          {
            url: 'https://oraqles-ui.vercel.app/images/og-image-default.png',
            width: 1200,
            height: 630,
            alt: 'IQ OraQles',
          },
        ],
      }}
    />
  )
}

export default SEOHeader
