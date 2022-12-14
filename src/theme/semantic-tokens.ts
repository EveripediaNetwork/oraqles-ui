import { Pseudos, SemanticValue } from '@chakra-ui/react'

export type SemanticTokens = Partial<
  Record<string, Record<string, SemanticValue<keyof Pseudos>>>
>

export const semanticTokens: SemanticTokens = {
  colors: {
    bodyBg: {
      default: 'white',
      _dark: 'gray.800',
    },
    heroBackground: {
      default: 'brand.500',
      _dark: 'brand.800',
    },
    lightCard: {
      default: 'gray.50',
      _dark: 'gray.700',
    },
    brandBackground: {
      default: 'primary',
      _dark: 'brand.900',
    },
    dimColor: {
      default: '#0000002a',
    },
    linkColor: {
      default: 'gray.600',
      _dark: 'gray.200',
    },
    dimmedText: {
      _dark: 'whiteAlpha.700',
    },
    dimmedText2: {
      default: 'gray.600',
      _dark: 'whiteAlpha.600',
    },
    grayText: {
      default: 'gray.500',
      _dark: 'whiteAlpha.500',
    },
    grayText2: {
      default: 'gray.500',
      _dark: 'whiteAlpha.500',
    },
    grayText3: {
      default: 'gray.500',
      _dark: 'whiteAlpha.900',
    },
    grayText4: {
      default: 'gray.700',
      _dark: 'whiteAlpha.900',
    },
    textColor: {
      default: 'gray.900',
      _dark: 'grey.200',
    },
    linkHoverColor: {
      default: 'gray.800',
      _dark: 'gray.400',
    },
    subMenuBg: {
      default: 'white',
      _dark: 'gray.800',
    },
    pageBg: {
      default: 'gray.100',
      _dark: 'gray.800',
    },
    hoverBg: {
      default: 'gray.100',
      _dark: 'gray.600',
    },
    cardBg: {
      default: 'gray.50',
      _dark: 'gray.700',
    },
    cardBg2: {
      default: 'gray.50',
      _dark: 'gray.700',
    },
    pageBorderColor: {
      default: 'gray.300',
      _dark: 'gray.600',
    },
    borderColor: {
      default: 'gray.300',
      _dark: 'gray.600',
    },
    borderColorHover: {
      default: 'gray.400',
      _dark: 'gray.700',
    },
    socialIconColor: {
      default: 'gray.700',
      _dark: 'gray.100',
    },
    fadedText: {
      default: 'gray.600',
      _dark: 'whiteAlpha.700',
    },
    fadedText2: {
      default: 'gray.700',
      _dark: 'whiteAlpha.700',
    },
    fadedText3: {
      default: 'blackAlpha.500',
      _dark: 'whiteAlpha.900',
    },
    fadedText4: {
      default: 'gray.600',
      _dark: 'whiteAlpha.900',
    },
    fadedText5: {
      default: '#6D6D6D',
      _dark: 'whiteAlpha.500',
    },
    divider: {
      default: 'gray.200',
      _dark: 'whiteAlpha.200',
    },
    divider2: {
      default: 'gray.300',
      _dark: 'whiteAlpha.200',
    },
    btnBgColor: {
      default: 'white',
      _dark: 'gray.800',
    },
    brandText: {
      default: 'brand.500',
      _dark: 'brand.800',
    },
    tooltipBg: {
      default: 'whiteAlpha.900',
      _dark: 'gray.800',
    },
    tooltipColor: {
      default: 'gray.800',
      _dark: 'whiteAlpha.900',
    },
    navLinkColor: {
      default: 'gray.700',
      _dark: 'whiteAlpha.900',
    },
    oraclesCardBorder: {
      default: 'gray.200',
      _dark: 'gray.700',
    },
    oraclesHeadingColor: {
      default: 'brand.500',
      _dark: 'brand.800',
    },
    oraclesTextColor: {
      default: 'gray.800',
      _dark: 'whiteAlpha.900',
    },
    oraclesBackground: {
      default: 'gray.50',
      _dark: 'whiteAlpha.50',
    },
    oraclesCardBg: {
      default: 'white',
      _dark: 'gray.700',
    },
    errorPageText: {
      default: 'gray.800',
      _dark: 'white',
    },
    oraclesPageBorder: {
      default: 'gray.300',
      _dark: 'whiteAlpha.200',
    },
    oraclesViewerButton: {
      default: 'gray.50',
      _dark: 'gray.700',
    },
    oraclesPressViewCardBorder: {
      default: 'gray.200',
      _dark: 'whiteAlpha.100',
    },
    marchMadnessInfoHeading: {
      default: 'gray.600',
      _dark: 'whiteAlpha.600',
    },
    marchMadnessInfoText: {
      default: 'gray.700',
      _dark: 'whiteAlpha.800',
    },
    codeTextColor: {
      default: 'red.500',
      _dark: 'red.500',
    },
    codeTextColor2: {
      default: 'blue.500',
      _dark: 'blue.500',
    },
    codeBackground: {
      default: 'gray.50',
      _dark: 'gray.700',
    },
    codeBorder: {
      default: 'gray.300',
      _dark: 'transparent',
    },
    pressViewCardFooter: {
      default: 'gray.50',
      _dark: 'whiteAlpha.100',
    },
    bracketsHeading: {
      default: 'gray.600',
      _dark: 'whiteAlpha.600',
    },
    bracketsCardTopBg: {
      default: 'gray.100',
      _dark: 'gray.700',
    },
    bracketsCardBottomBg: {
      default: 'white',
      _dark: 'gray.800',
    },
    bracketsCardBorder: {
      default: 'gray.200',
      _dark: 'whiteAlpha.300',
    },
    bracketsCardLoserText: {
      default: 'gray.800',
      _dark: 'whiteAlpha.900',
    },
    bracketsFooterText: {
      default: 'gray.500',
      _dark: 'whiteAlpha.500',
    },
    accordionIconToggle: {
      default: 'brand.500',
      _dark: 'pink.500',
    },
    accordionButtonColor: {
      default: 'gray.50',
      _dark: 'gray.700',
    },
    accordionBorder: {
      default: 'gray.300',
      _dark: 'whiteAlpha.400',
    },
    tableBorderColor: {
      default: 'gray.300',
      _dark: 'whiteAlpha.200',
    },
    tableHeaderTextColor: {
      default: 'gray.900',
      _dark: 'whiteAlpha.900',
    },
    tableHeaderBackground: {
      default: 'gray.50',
      _dark: 'gray.700',
    },
  },
}
