import Image from 'next/image'
import Link from 'next/link'
import { NAVIGATION } from './data'
import { Button } from '@/src/components/UI'
import { Chakra_Petch } from 'next/font/google'
import { useState } from 'react'

const CHAKRA_PETCH = Chakra_Petch({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const handlerToggle = ()=> setToggle(!toggle)
  function getMobile() {
    return (
      <header className="absolute top-0  w-full items-center z-50 lg:hidden bg-shark-900 bg-opacity-40 p-10 border-b-2 backdrop-blur-md border-solid border-b-chartreuse-yellow-500">
        <div className="flex justify-between  py-2">
          <div className="flex gap-2 items-center cursor-pointer">
            <Image src={'/static/images/solexchange/logo.svg'} alt="logo" width={29} height={29} />
            <h1 className={`${CHAKRA_PETCH.className} text-white font-normal text-2xl`}>
              <span className="text-chartreuse-yellow-500">SOL</span>
              EXCHANGE
            </h1>
          </div>
          <div className="cursor-pointer" onClick={handlerToggle}>
            <Image src={'/static/images/solexchange/header/hamburguer.svg'} alt="logo" width={29} height={29} />
          </div>
        </div>
        {toggle && (
          <div className="mt-2 w-full">
            <span className="border-t-2 border-solid border-t-chartreuse-yellow-500 w-full absolute left-0 mb-6" />
            <nav className="w-full mx-auto py-2">
              <ul className="text-white hover:text-chartreuse-yellow-500 transition-colors flex flex-col items-end gap-4 text-sm">
                {NAVIGATION.map(({ label, path }, index) => {
                  return (
                    <Link key={index} href={path}>
                      {label}
                    </Link>
                  )
                })}
              </ul>
            </nav>
          </div>
        )}
      </header>
    )
  }

  function getDesktop() {
    return (
      <header className="relative lg:flex justify-between items-center container mx-auto z-50 hidden">
        <div className="flex gap-2 items-center cursor-pointer absolute left-0">
          <Image src={'/static/images/solexchange/logo.svg'} alt="logo" width={29} height={29} />
          <h1 className={`${CHAKRA_PETCH.className} text-white font-normal text-2xl`}>
            <span className="text-chartreuse-yellow-500">SOL</span>
            EXCHANGE
          </h1>
        </div>
        <nav className="w-1/2 mx-auto">
          <ul className=" flex justify-between text-sm bg-shark-800 px-8 py-5 rounded-lg">
            {NAVIGATION.map(({ label, path }, index) => {
              return (
                <Link key={index} href={path}>
                  <span className="text-white hover:text-chartreuse-yellow-500 transition-colors">{label}</span>
                </Link>
              )
            })}
          </ul>
        </nav>
        <div className=" flex justify-end absolute right-0">
          <Button variant="primary" className="flex !text-sm items-center gap-2 !py-3">
            <span className="icon-wallet" />
            Connect your Wallet
          </Button>
        </div>
      </header>
    )
  }

  return (
    <>
      {getDesktop()}
      {getMobile()}
    </>
  )
}

export default Header
