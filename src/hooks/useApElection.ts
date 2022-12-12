import { useContractRead } from 'wagmi'
import { apElectionAbi } from '@/abis/apElection.abi'
import config from '@/config'

const readContract = {
  address: config.apElectionsContractAddress,
  abi: apElectionAbi,
}

export const useApElection = (state: string) => {
  const { data: winner } = useContractRead({
    ...readContract,
    functionName: 'presidentialWinners',
    args: [state],
  })

  const getApElectionWinner = () => {
    return winner
  }

  return {
    ApElectionWinner: getApElectionWinner(),
  }
}
