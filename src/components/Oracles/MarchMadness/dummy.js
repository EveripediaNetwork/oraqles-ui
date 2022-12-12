const ethers = require('ethers')
const abi = [
  {
    inputs: [],
    name: 'ipfsFullData',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
const contractAddress = '0x17BaF6781EE3b0BBcDffD1e2A78D8C0b40c9A77D'
const provider = new ethers.providers.JsonRpcProvider(
  'https://mainnet.infura.io/v3/d9115ae7cb07489699c738f2915aea84',
)
let contract = new ethers.Contract(contractAddress, abi, provider)
const ipfsHash = await contract.ipfsFullData()
const data = await ethers.utils.fetchJson(
  `https://gateway.pinata.cloud/ipfs/${ipfsHash}`,
)
const statistics = await ethers.utils.fetchJson(
  `https://gateway.pinata.cloud/ipfs/${data.statistics_hash}`,
)
const allData = { tournament: data.tournament, statistics: statistics }
