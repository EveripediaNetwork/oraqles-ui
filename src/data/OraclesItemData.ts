export type OraclesItemType = {
  id: string
  title: string
  summary: string
  image: string
  updatedAt?: string
  createdAt?: string
}

export const ORAQLES_ITEMS: OraclesItemType[] = [
  {
    id: 'march-madness',
    title: 'March madness 2021',
    summary:
      'Associated Press and BrainDAO partner to bring March Madness 2021 Results on-chain!',
    image: '/images/oracles--1.png',
  },
  {
    id: 'superbowl-lv',
    title: 'February 7th, 2021 Super Bowl LV',
    summary:
      'Associated Press and BrainDAO partner to bring March Madness 2021 Results on-chain!',
    image: '/images/oracles--2.png',
  },
  {
    id: 'us-senate-runoff',
    title: 'January 5th, 2021 Senate Runoff',
    summary:
      'Associated Press and BrainDAO partner to bring March Madness 2021 Results on-chain!',
    image: '/images/oracles--3.png',
  },
  {
    id: 'election',
    title: 'November 3rd, 2021 Election',
    summary:
      'Associated Press and BrainDAO partner to bring March Madness 2021 Results on-chain!',
    image: '/images/oracles--4.png',
  },
]
