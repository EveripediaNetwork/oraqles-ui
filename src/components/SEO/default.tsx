import React from 'react'
import { DefaultSeo } from 'next-seo'
import { NextRouter } from 'next/router'

interface SEOHeaderProps {
  router: NextRouter
}

const SEOHeader = ({ router }: SEOHeaderProps) => {
  return (
    <DefaultSeo
      title="IQ Oraqles"
      titleTemplate="%s | IQ Oraqles"
      description="IQ OraQles is a service managed by BrainDAO that allows verified first parties to bring real-world information on-chain."
      canonical={`https://${router.asPath || ''}`}
    />
  )
}

export default SEOHeader
