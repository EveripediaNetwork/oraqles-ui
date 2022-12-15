import { marchMadnessAbi } from '@/abis/march-madness.abi'
import config from '@/config'
import { useContractRead } from 'wagmi'

const abi = [...marchMadnessAbi] as const

export const useMarchMadness = () => {
  const { data: marchMadness } = useContractRead<typeof abi, string, string>({
    functionName: 'ipfsFullData',
    abi,
    address: config.marchMadnessContractAddress,
  })

  const getMarchMadnessIpfsHash = () => {
    return marchMadness
  }

  return {
    marchMadnessIpfsHash: getMarchMadnessIpfsHash(),
  }
}
