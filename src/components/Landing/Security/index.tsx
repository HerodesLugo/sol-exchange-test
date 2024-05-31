/* eslint-disable max-len */
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ScrollParallax } from 'react-just-parallax'
import { BRANDS } from './data'

const Security = () => {
  const [brands, setBrands] = useState(BRANDS)
  const [hover, setHover] = useState(false)

  const handlerHover = (index: any , disabled? : boolean) => {
    const updateBrands = brands.map((brand) =>
      brand.index === index ? { ...brand, isHover:  disabled ? false: true } : { ...brand, isHover: false }
    )
    setBrands(updateBrands)
  }

  return (
    <div className="container mx-auto 2xl:max-w-[1300px] w-full relative z-50 pb-40">
      <div className="max-lg:flex-col items-start lg:flex lg:justify-center xl:justify-between gap-4">
        <div className="flex-col items-start">
          <p className="w-full text-white text-xl font-normal py-4 max-lg:text-center">Validated by Industry Leaders</p>
          <div className="flex flex-wrap xl:flex-nowrap gap-4 lg:flex-row z-50">
            {brands.map((item, index) => (
              <Link href={item.link} target="_blank" key={index} className="mx-auto">
                <div
                  onMouseOut={() => handlerHover(index, true)}
                  onMouseOver={() => handlerHover(index)}
                  className={`relative box-landing-solexchange`}
                >
                  <div className="flex items-center justify-between  h-full">
                    <Image src={item.image} alt={item.title} width={200} height={50} className={`mx-auto z-20 transition-all ${item.isHover ? 'opacity-100' : 'opacity-60'}`} />
                  </div>
                  <div className={`box-landing-solexchange-hover transition-all ${item.isHover ?  'opacity-100' : 'opacity-0'} absolute top-0 left-0 bottom-0 right-0 w-full h-full z-10`}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="w-full text-white text-xl font-normal py-4 max-lg:text-center">Assured by</p>
          <Link
            href={
              'https://app.hats.finance/audit-competitions/fenix-finance-0x83dbe5aa378f3ce160ed084daf85f621289fb92f/scope'
            }
            target="_blank"
            className="mx-auto"
          >
            <div
              onMouseOut={() => setHover(false)}
              onMouseOver={() => setHover(true)}
              className={`relative box-landing-solexchange`}
            >
              <div className="flex items-center justify-between h-full">
                <Image
                  src={'/static/images/landing/security/HatsFinance.svg'}
                  alt={''}
                  width={200}
                  height={50}
                  className={`mx-auto z-20 transition-all ${hover ? 'opacity-100' : 'opacity-60'}`}
                />
              </div>
              <div className={`box-landing-solexchange-hover transition-all ${hover ?  'opacity-100' : 'opacity-0'} absolute top-0 left-0 bottom-0 right-0 w-full h-full z-10`}></div>
            </div>
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -z-10  h-[31.25rem] top-[-50rem] left-0 right-0 overflow-hidden">
          <div className="min-w-full min-h-full mx-auto relative">
            <ScrollParallax isAbsolutelyPositioned>
              <Image
                src="/static/images/landing/main/planet.svg"
                width={60}
                height={60}
                className="absolute top-[21.875rem] left-[35rem] z-10 max-lg:hidden"
                alt="planet"
              />
              <Image
                src="/static/images/landing/main/planet.svg"
                width={60}
                height={60}
                className="absolute top-[50rem] right-[12.5rem] z-10 lg:hidden"
                alt="planet"
              />
              <Image
                src="/static/images/landing/main/planet.svg"
                width={60}
                height={60}
                className="absolute top-[6.25rem] left-0 z-10 lg:hidden"
                alt="planet"
              />
            </ScrollParallax>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Security
