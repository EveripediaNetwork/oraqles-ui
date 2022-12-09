import { superbowlAbi } from '@/abis/superbowl.abi'
import config from '@/config'
import { useContractRead } from 'wagmi'

const readContract = {
  address: config.superbowlContractAddress,
  abi: superbowlAbi,
}

export const useSuperbowlTV = () => {
  const { data: winner } = useContractRead({
    ...readContract,
    functionName: 'winner',
  })

  const getSuperbowlTV = () => {
    return winner
  }

  return {
    winner: getSuperbowlTV(),
  }
}
