const config = {
  blockExplorerUrl:
    process.env.NEXT_PUBLIC_BLOCK_EXPLORER_BASE_URL ||
    'https://goerli.etherscan.io/',
  infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
  alchemyApiKey: String(process.env.NEXT_PUBLIC_ALCHEMY_API_KEY),
  alchemyChain: process.env.NEXT_PUBLIC_ALCHEMY_CHAIN || 'goerli',
  chainId: process.env.NEXT_PUBLIC_CHAIN_ID || '5',
  chainName: process.env.NEXT_PUBLIC_CHAIN_NAME || 'goerli',
  ensRPC: String(process.env.NEXT_PUBLIC_ENS_RPC),
  publicDomain: String(process.env.NEXT_PUBLIC_DOMAIN),
}

export default config
