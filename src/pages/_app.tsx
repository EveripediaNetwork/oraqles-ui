import type { AppProps } from 'next/app'
import React, { StrictMode } from 'react'

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <StrictMode>
      <Component {...pageProps} />
    </StrictMode>
  )
}

export default App
