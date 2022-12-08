import { electionAbi } from '@/abis/election.abi'
import config from '@/config'
import { useContractRead } from 'wagmi'

const readContract = {
  address: config.usElectionContractAddress,
  abi: electionAbi,
}

export const useUSElection = (position: string) => {
  const { data: winner } = useContractRead({
    ...readContract,
    functionName: 'winners',
    args: [position],
  })

  const getUSElectionWinner = () => {
    return winner
  }

  return {
    USElectionWinner: getUSElectionWinner(),
  }
}
