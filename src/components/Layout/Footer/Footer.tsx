import React from 'react'
import { Box, Divider, Link, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <>
      <Divider orientation="horizontal" />
      <Box py="8">
        <Text color="oraclesTextColor" textAlign="center" fontWeight={600}>
          {t('footerHeading')}{' '}
          <Link href="https://braindao.org/" target="_blank">
            BrainDAO
          </Link>
        </Text>
        <Text color="oraclesTextColor" textAlign="center" mt="5">
          {t('copyRight')}
        </Text>
      </Box>
    </>
  )
}

export default Footer
