'use client'
/* eslint-disable react/no-multi-comp */
import { Button } from '@/src/components/UI'
import Image from 'next/image'

const Box = ({ text, value }: { text: string; value: string }) => {
  return (
    <div className="flex min-w-[23.125rem] max-w-[23.125rem] min-h-[8.75rem] flex-col items-center  justify-center  box-landing-short-solexchange">
      <div className='relative z-50'>
        <h1 className="text-chartreuse-yellow-500 font-bold text-lg text-center">
          {/* {value} */}
          COMING SOON
        </h1>
        <p className="text-shark-100 text-base text-center">Total Value Locked</p>
      </div>
    </div>
  )
}
const Main = () => {
  return (
    <div className="overflow-hidden">
      <span className=" w-full [background:linear-gradient(0deg,rgba(0,0,0,1)_8.2%,rgba(10,12,14,0)_92.36%)] absolute h-[100vh] top-0  z-20 overflow-hidden " />

      <Image
        src={'/static/images/solexchange/HowItWorks/planet.svg'}
        className="absolute w-full flex-shrink-0  top-0 object-cover z-10 h-[100vh]"
        alt="planet"
        height={1242}
        width={4127}
      />
      <div className="font-medium text-2xl md:text-5xl text-white text-center relative flex flex-col items-center justify-center h-[100vh] z-50">
        <div className="py-16">
          <Image
            src={'/static/images/solexchange/logo.svg'}
            className="h-[2.9375rem] w-[2.9375rem]"
            alt="planet"
            height={47}
            width={47}
          />
        </div>
        <h1 className="-mb-5 md:-mb-10">The Unified Trading &</h1>
        <h2 className="flex gap-2 items-center">
          Liquidity Layer for
          <Image
            src={'/static/images/solexchange/Mode.svg'}
            className="
            
            h-[5rem] w-[5rem]
            md:h-[10rem] md:w-[10rem]"
            alt="planet"
            height={47}
            width={47}
          />
        </h2>
        <div className="pt-10">
          <Button variant="tertiary">Coming Soon</Button>
        </div>
        <span className="cursor-pointer icon-chevron text-chartreuse-yellow-500 text-4xl absolute bottom-24 lg:bottom-36 animate-bounce" />
      </div>
      <div className="flex justify-center flex-wrap gap-2  relative">
        <span className="bg-shark-800 bg-opacity-20 backdrop-blur-md w-full h-24 absolute -top-9 z-10" />
        <Box text="Total Value Locked" value={''} />
        <Box text="Total Value Locked" value={''} />
        <Box text="Total Value Locked" value={''} />
        <Box text="Total Value Locked" value={''} />
      </div>
      {/* <Decorator /> */}
    </div>
  )
}

export default Main