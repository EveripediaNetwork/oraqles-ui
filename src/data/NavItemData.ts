export type NavItemType = {
  id: number
  label: string
  link: string
  target?: string
}

export const NAV_ITEMS: NavItemType[] = [
  {
    id: 1,
    label: 'IQ.WIKI',
    link: 'https://iq.wiki/',
    target: '_blank',
  },
  {
    id: 2,
    label: 'IQ Dashboard',
    link: 'https://iq.braindao.org/',
    target: '_blank',
  },
  {
    id: 3,
    label: 'Learn',
    link: 'https://iq.wiki/wiki/iq-oraqles',
    target: '_blank',
  },
  {
    id: 4,
    label: 'Blog',
    link: 'https://iq.wiki/blog',
    target: '_blank',
  },
]
