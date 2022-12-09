import { marchMadnessAbi } from '@/abis/march-madness.abi'
import config from '@/config'
import { useContractRead } from 'wagmi'

const readContract = {
  address: config.marchMadnessContractAddress,
  abi: marchMadnessAbi,
}

export const useMarchMadness = () => {
  const { data: marchMadness } = useContractRead({
    ...readContract,
    functionName: 'ipfsFullData',
  })

  const getMarchMadnessIpfsHash = () => {
    return marchMadness
  }

  return {
    marchMadnessIpfsHash: getMarchMadnessIpfsHash(),
  }
}
