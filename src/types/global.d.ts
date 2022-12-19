export {}

export type GTagParams = {
  event_category: string
  event_label: string
  value: number
}

export type GTagViewParams = {
  page_title: string
  page_path: URL | string
}

declare global {
  interface Window {
    gtag: (a: string, b: string, c: GTagParams | GTagViewParams) => void
  }
}
