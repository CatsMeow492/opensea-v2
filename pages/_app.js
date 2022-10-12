import '../styles/globals.css'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

/**
 * Wrap the app with the ThirdwebWeb3Provider
 * This will provide the app with the web3 context
 * and allow you to use the useWeb3 hook
 * The chain ID 4 represents the Goerli testnet
 * The 'injected' connector is a web3 connection method used by Metamask
 */
const supportedChainIds = [5]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
