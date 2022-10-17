import Header from '../components/Header'
import Hero from '../components/Hero'
import { useEffect } from 'react'
import { useWeb3 } from '@3rdweb/hooks'

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42]`,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

export default function Home() {
  // use web3 hook
  const { address, connectWallet } = useWeb3()
  return (
    <div className={style.wrapper}>
      // Only render hero and header of the address exists
      {address ? (
      <>
        <Header />
        <Hero />
      </>
      ) : (
      // Otherwise render the wallet connect button
      <div className={style.walletConnectWrapper}>
        <button
          className={style.button}
          onClick={() => connectWallet('injected')}
        >
          Connect Wallet
        </button>
        <div className={style.details}>
          You need Chrome to be installed
          <br /> able to run this app.
        </div>
      </div>
        )}
    </div>
  )
}
