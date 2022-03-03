import { ethers } from 'ethers'

const ALCHEMY_PROJECT_ID = `TODO`
const ENDPOINT = `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_PROJECT_ID}`

const PROVIDER = new ethers.providers.JsonRpcProvider(ENDPOINT)

async function onBlock(...args: Array<any>) {
    const p = (await PROVIDER.getFeeData()).gasPrice
    console.log(`Block #${args}, gas price: ${p} wei`)
}

async function main() {
    PROVIDER.on('block', onBlock)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
