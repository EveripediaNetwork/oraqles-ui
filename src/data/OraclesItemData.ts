export type OraclesItemType = {
  id: string
  title: string
  summary: string
  image: string
  updatedAt?: string
  createdAt?: string
}

export type OraclesResultCardprops = {
  title: string
  text: string
  link: string
}

export const ORAQLES_ITEMS: OraclesItemType[] = [
  {
    id: 'march-madness',
    title: 'March madness 2021',
    summary:
      'The Associated Press used IQ OraQles to publish March Madness scores on Ethereum for the first time!',
    image: '/images/oracles--1.png',
  },
  {
    id: 'superbowl-lv',
    title: 'Super Bowl LV',
    summary:
      'The Associated Press used IQ OraQles to publish the winner of Super Bowl LV on Ethereum for the first time!',
    image: '/images/oracles--2.png',
  },
  {
    id: 'us-senate-runoff',
    title: 'January 5th Senate Runoff',
    summary:
      'The Associated Press used IQ OraQles to publish their election race calls from the January 5th Senate Runoff races on Ethereum!',
    image: '/images/oracles--3.png',
  },
  {
    id: 'election',
    title: '2020 US Presidential Election',
    summary:
      'The Associated Press teamed up with IQ.wiki formerly Everipedia to publish election race calls on the blockchain. This was the first time a US Presidential Election had been recorded on-chain.',
    image: '/images/oracles--4.png',
  },
]
