export type OraclesItemType = {
  id: number
  title: string
  summary: string
  image: string
  updatedAt?: string
  createdAt?: string
}

export const ORAQLES_ITEMS: OraclesItemType[] = [
  {
    id: 1,
    title: 'March madness 2021',
    summary:
      'Associated Press and BrainDAO partner to bring March Madness 2021 Results on-chain!',
    image: '/images/oracle--1.png',
  },
]
