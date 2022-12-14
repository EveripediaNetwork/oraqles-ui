import { chain, configureChains } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import config from './index'

const chainArray =
  // config.alchemyChain === 'goerli' ? [chain.goerli] : [chain.mainnet]
  [chain.mainnet]
export const { provider, webSocketProvider } = configureChains(chainArray, [
  alchemyProvider({ apiKey: config.alchemyApiKey, weight: 1 }),
])
