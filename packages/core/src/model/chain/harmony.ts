import { Chain } from '../../constants'

export const Harmony: Chain = {
  chainId: 1666600000,
  chainName: 'Harmony',
  isTestChain: false,
  isLocalChain: false,
  multicallAddress: '0xFE4980f62D708c2A84D3929859Ea226340759320',
  getExplorerAddressLink: (address: string) => `https://explorer.harmony.one/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) => `https://explorer.harmony.one/tx/${transactionHash}`,
}

export const HarmonyTestnet: Chain = {
  chainId: 1666700000,
  chainName: 'HarmonyTestnet',
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0xED12068c6ece0b6fA982Df3771c9731bB4b19bb3',
  getExplorerAddressLink: (address: string) => `https://explorer.pops.one/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) => `https://explorer.pops.one/tx/${transactionHash}`,
}

export default { Harmony, HarmonyTestnet }
