import React from 'react'
import { Box, Divider, Flex, Icon, Link, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiRedditFill,
  RiTelegramFill,
  RiTwitterFill,
} from 'react-icons/ri'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <>
      <Divider orientation="horizontal" />
      <Box py="8">
        <Text
          color="oraclesTextColor"
          fontSize={{ base: 'xs', md: 'sm' }}
          textAlign="center"
          fontWeight={600}
        >
          {t('footerHeading')}{' '}
          <Link href="https://braindao.org/" target="_blank">
            BrainDAO
          </Link>
        </Text>
        <Flex mt="5" justifyContent="center" gap="3" alignItems="center">
          <Link href="https://twitter.com/IQWIKI" target="_blank">
            <Icon as={RiTwitterFill} w={6} h={6} />
          </Link>
          <Link href="https://github.com/EveripediaNetwork" target="_blank">
            <Icon as={RiGithubFill} w={6} h={6} />
          </Link>
          <Link href="https://instagram.com/everipedia" target="_blank">
            <Icon as={RiInstagramFill} w={6} h={6} />
          </Link>
          <Link
            href="https://web.facebook.com/everipedia?_rdc=1&_rdr"
            target="_blank"
          >
            <Icon as={RiFacebookFill} w={6} h={6} />
          </Link>
          <Link href="https://www.reddit.com/r/Everipedia/" target="_blank">
            <Icon as={RiRedditFill} w={6} h={6} />
          </Link>
          <Link href="https://t.me/everipedia" target="_blank">
            <Icon as={RiTelegramFill} w={6} h={6} />
          </Link>
        </Flex>
        <Text
          color="oraclesTextColor"
          fontSize={{ base: 'xs', md: 'sm' }}
          textAlign="center"
          mt="5"
        >
          {t('copyRight')}
        </Text>
      </Box>
    </>
  )
}

export default Footer
