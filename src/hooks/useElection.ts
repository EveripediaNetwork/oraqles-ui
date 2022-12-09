import { electionAbi } from '@/abis/election.abi'
import config from '@/config'
import { useContractRead } from 'wagmi'

const readContract = {
  address: config.usElectionContractAddress,
  abi: electionAbi,
}

export const useUSElection = (position: string) => {
  const { data: winner, error } = useContractRead({
    ...readContract,
    functionName: 'winners',
    args: [position],
  })

  console.log(winner, error)

  const getUSElectionWinner = () => {
    return winner
  }

  return {
    USElectionWinner: getUSElectionWinner(),
  }
}
