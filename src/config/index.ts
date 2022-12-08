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
  usElectionContractAddress: process.env.NEXT_PUBLIC_US_ELECTION_ADDRESS || '0x3E961f9A77146F6230709D767d60025f1Ed3Bfef',
  superbowlContractAddress: process.env.NEXT_PUBLIC_SUPERBOWL_ADDRESS || '0x21bBaf61250342865487D96322140738414142B2',
  marchMadnessContractAddress: process.env.NEXT_PUBLIC_MARCH_MADNESS_ADDRESS || '0x17BaF6781EE3b0BBcDffD1e2A78D8C0b40c9A77D',
}

export default config
