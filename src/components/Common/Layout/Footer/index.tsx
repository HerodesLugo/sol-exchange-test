import Link from 'next/link'
import { NAVIGATION, SOCIAL_MEDIA } from './data'
import { Chakra_Petch } from 'next/font/google'
import Image from 'next/image'

const CHAKRA_PETCH = Chakra_Petch({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

const Footer = () => {
  function getDesktop() {
    return (
      <div className="container lg:flex gap-2 flex-col mx-auto relative z-50 py-20 hidden">
        <div className="flex items-start flex-col lg:absolute left-0 gap-4">
          <div>
            <h2 className="text-chartreuse-yellow-500 text-xs font-bold">Navigation</h2>
            <div>
              <ul className="flex gap-4">
                {NAVIGATION.map(({ label, path }, index) => {
                  return (
                    <Link className="text-sm text-white" href={path} key={index}>
                      {label}
                    </Link>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="text-xs text-shark-100 flex  gap-10">
              <p>2024 © Solexchange</p>
              <p className="flex gap-2 items-center">
                <span className="icon-document" />
                Legal Disclaimer
              </p>
            </div>
          </div>
        </div>
        {/* Firths section */}
        <div className="flex justify-center items-center gap-2 w-full">
          <Image
            src={'/static/images/solexchange/logo.svg'}
            className="h-[2.25rem] w-[2.25rem]"
            alt="logo"
            width={36}
            height={36}
          />
          <h1 className={`${CHAKRA_PETCH.className} text-white font-normal text-4xl`}>
            <span className="text-chartreuse-yellow-500">SOL</span>
            EXCHANGE
          </h1>
        </div>
        {/* second section */}
        <div className="lg:absolute right-0 flex flex-col  gap-2 z-50">
          <div className="text-sm text-shark-100 flex items-center gap-2">
            <p>The Unified Trading and Liquidity Marketplace for on</p>
            {/* <p className="text-chartreuse-yellow-500 font-bold">MODE</p> */}
            <Image
              src={'/static/images/solexchange/Mode.svg'}
              className="h-[2.9375rem] w-[2.9375rem]"
              alt="planet"
              height={47}
              width={47}
            />
          </div>
          <div className="flex items-center gap-3 justify-end">
            {SOCIAL_MEDIA.map(({ icon, label }, index) => {
              return (
                <Link href={label} key={index}>
                  <div className="bg-mine-shaft-950 border-2 border-solid border-mine-shaft-500 h-9 w-9 flex items-center justify-center rounded-[.625rem]">
                    <span className={`${icon} text-chartreuse-yellow-500 text-sm`} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  function getMobile() {
    return (
      <div className="container flex gap-6 flex-col mx-auto relative z-50 py-20 lg:hidden">
        <div className="flex justify-center items-center gap-2 w-full">
          <Image
            src={'/static/images/solexchange/logo.svg'}
            className="h-[2.25rem] w-[2.25rem]"
            alt="logo"
            width={36}
            height={36}
          />
          <h1 className={`${CHAKRA_PETCH.className} text-white font-normal text-4xl`}>
            <span className="text-chartreuse-yellow-500">SOL</span>
            EXCHANGE
          </h1>
        </div>
        <div className="flex items-center justify-center flex-col  gap-4">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-chartreuse-yellow-500 text-base font-bold text-center">Navigation</h2>
            <ul className="grid max-sm:grid-cols-3 grid-cols-6 mx-auto gap-4">
              {NAVIGATION.map(({ label, path }, index) => {
                return (
                  <Link className="text-sm text-white mx-auto " href={path} key={index}>
                    {label}
                  </Link>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="text-xs md:text-sm text-shark-100 flex justify-center items-center  gap-2">
          <p >The Unified Trading and Liquidity Marketplace for on</p>
          {/* <p className="text-chartreuse-yellow-500 font-bold">MODE</p> */}
          <Image
            src={'/static/images/solexchange/Mode.svg'}
            className="h-[2.9375rem] w-[2.9375rem]"
            alt="planet"
            height={47}
            width={47}
          />
        </div>
        <div className="flex items-center gap-3 justify-center">
          {SOCIAL_MEDIA.map(({ icon, label }, index) => {
            return (
              <Link href={label} key={index}>
                <div className="bg-mine-shaft-950 border-2 border-solid border-mine-shaft-500 h-9 w-9 flex items-center justify-center rounded-[.625rem]">
                  <span className={`${icon} text-chartreuse-yellow-500 text-sm`} />
                </div>
              </Link>
            )
          })}
        </div>
        <div className="text-xs text-shark-100 flex justify-evenly  gap-10">
          <p>2024 © Solexchange</p>
          <p className="flex gap-2 items-center">
            <span className="icon-document" />
            Legal Disclaimer
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      {getDesktop()}
      {getMobile()}
    </>
  )
}

export default Footer
