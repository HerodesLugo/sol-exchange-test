// /* eslint-disable max-len */
// 'use client'
// import React, { useEffect, useState, useRef } from 'react'
// import Image from 'next/image'
// import Lottie from 'react-lottie'
// import Animation from '@/src/lottie/TriangleLanding.json'
// import { ScrollParallax } from 'react-just-parallax'

// const HowItWorks = () => {
//   const articles = [
//     {
//       title: 'Trader',
//       text: 'Swap any Token on Blast with low fees and trade perpetuals on EON.',
//       image: '/static/images/landing/articles/blast-2.svg',
//       imageHover: '/static/images/landing/articles/Group.svg',
//       planets: [
//         {
//           image: '/static/images/landing/howitworks/card-ellipse.svg',
//           class: 'top-0  lg:left-[400px] max-lg:left-[200px] ',
//         },
//       ],
//       points: [
//         {
//           image: '/static/images/landing/howitworks/point.svg',
//           class: 'top-[20px] lg:left-[170px] max-lg:left-[110px]',
//         },
//         {
//           image: '/static/images/landing/howitworks/point.svg',
//           class: 'bottom-[20px] lg:right-[180px] max-lg:right-[110px]',
//         },
//       ],
//     },
//     {
//       title: 'Liquidity Providers',
//       text: 'Deposit tokens on Fenix to receive FNX emissions as rewards.',
//       image: '/static/images/landing/articles/Coins.svg',
//       imageHover: '/static/images/landing/articles/CoinsActivated.svg',
//       planets: [
//         {
//           image: '/static/images/landing/howitworks/card-ellipse.svg',
//           class: 'bottom-0 lg:left-[200px] max-lg:left-[100px] rotate-180 w-[150px]',
//         },
//       ],
//       points: [
//         {
//           image: '/static/images/landing/howitworks/point.svg',
//           class: 'bottom-[20px] lg:left-[300px] max-lg:left-[250px]',
//         },
//         {
//           image: '/static/images/landing/howitworks/point.svg',
//           class: 'top-[20px] lg:left-[400px] max-lg:left-[200px]',
//         },
//       ],
//     },
//     {
//       title: 'veFNX Voters',
//       text: 'Vote to decide which pools get FNX emissions and receive swap fees and bribes from that pool.',
//       image: '/static/images/landing/articles/FenixBlack.svg',
//       imageHover: '/static/images/landing/articles/FenixActivated.svg',
//       planets: [
//         {
//           image: '/static/images/landing/howitworks/card-ellipse.svg',
//           class: 'top-0 lg:left-[300px] max-lg:left-[200px] w-[150px]',
//         },
//       ],
//       points: [
//         {
//           image: '/static/images/landing/howitworks/point.svg',
//           class: 'lg:top-[20px] max-lg:top-[10px] lg:left-[180px] max-lg:left-[110px]',
//         },
//         {
//           image: '/static/images/landing/howitworks/point.svg',
//           class: 'top-[20px] lg:right-[130px] max-lg:right-[70px]',
//         },
//       ],
//     },
//     {
//       title: 'Protocols',
//       text: 'Deploy liquidity and deposit bribes to attract FNX emissions and build  liquidity at low cost.',
//       image: '/static/images/landing/articles/Protocol.svg',
//       imageHover: '/static/images/landing/articles/ProtocolActivated.svg',
//       planets: [
//         {
//           image: '/static/images/landing/howitworks/card-ellipse.svg',
//           class: 'top-0 lg:right-[120px] max-lg:right-[60px] w-[150px]',
//         },
//       ],
//       points: [
//         {
//           image: '/static/images/landing/howitworks/point.svg',
//           class: 'bottom-[20px] lg:right-[320px] max-lg:right-[200px]',
//         },
//         {
//           image: '/static/images/landing/howitworks/point.svg',
//           class: 'top-[20px] lg:left-[220px] max-lg:right-[100px]',
//         },
//       ],
//     },
//   ]
//   useEffect(() => {
//     const handleMouseMove = (ev: MouseEvent) => {
//       const allCards = document.querySelectorAll('.card')

//       allCards.forEach((card) => {
//         const blob = card.querySelector('.blob') as HTMLElement
//         const fblob = card.querySelector('.fakeblob') as HTMLElement
//         const rec = fblob.getBoundingClientRect()

//         blob.style.opacity = '1'

//         blob.animate(
//           [
//             {
//               transform: `translate(${ev.clientX - rec.left - rec.width / 2}px, ${
//                 ev.clientY - rec.top - rec.height / 2
//               }px)`,
//             },
//           ],
//           {
//             duration: 300,
//             fill: 'forwards',
//           }
//         )
//       })
//     }

//     window.addEventListener('mousemove', handleMouseMove)

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove)
//     }
//   }, [])

//   const defaultOptions = {
//     loop: true,
//     animationData: Animation,
//   }

//   const [isAnimationPaused, setIsAnimationPaused] = useState<boolean>(false)

//   const handleAnimationClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (isAnimationPaused) {
//       e.stopPropagation()
//       setIsAnimationPaused(false)
//     } else {
//       setIsAnimationPaused(true)
//     }
//   }
//   const elementRef = useRef(null)
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         } else {
//           setIsVisible(false)
//         }
//       })
//     })

//     if (elementRef.current) {
//       observer.observe(elementRef.current)
//     }

//     // Cleanup function
//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current)
//       }
//     }
//   }, [])

//   return (
//     <div className="relative xl:pt-32">
//       <div className="absolute -z-10  h-[1800px] left-0 right-0 overflow-hidden">
//         <div className="min-w-full min-h-full mx-auto relative">
//           <Image
//             src="/static/images/landing/howitworks/orange-ellipse.svg"
//             width={900}
//             height={900}
//             className="absolute h-[650px] w-[650px]  right-0 z-10 max-lg:hidden"
//             alt="orange-ellipse"
//           />
//           <ScrollParallax isAbsolutelyPositioned>
//             <Image
//               src="/static/images/landing/main/planet.svg"
//               width={60}
//               height={60}
//               className="absolute top-[300px] right-[25rem] z-10 max-lg:hidden"
//               alt="planet"
//             />
//             <Image
//               src="/static/images/landing/main/planet.svg"
//               width={50}
//               height={50}
//               className="absolute top-[1000px] right-[50px] z-10 sm:hidden"
//               alt="planet"
//             />
//           </ScrollParallax>

//           <Image
//             src="/static/images/landing/main/start.svg"
//             width={80}
//             height={80}
//             className="absolute top-[1000px] left-0 z-10 sm:hidden"
//             alt="start"
//           />
//         </div>
//       </div>
//       <div className="container 2xl:mt-[200px] max-2xl:mt-[400px] max-xl:mt-[500px] mx-auto w-[100%]">
//         <h2 className="text-shark-100 text-xl md:text-lg md:mb-2 text-center font-normal">How it Works</h2>
//         <h4 className="text-gradient3 text-[40px] max-md:text-2xl font-normal leading-relaxed text-center">
//           Fenix Finance
//         </h4>
//         <div className="w-[100%] flex items-center flex-col xl:flex-row  justify-center ">
//           <div className="w-full xl:w-1/2 flex items-center flex-col justify-center text-white  my-3">
//             {articles.map((item, index) => (
//               <div key={index} className="card !my-2 w-full max-sm:max-w-[350px] sm:w-[70%] xl:max-w-[613px] group">
//                 <div
//                   className="relative inner h-36 md:h-28 py-5 px-10 max-sm:py-3 max-sm:px-5
//                  flex items-center justify-between w-[100%]"
//                 >
//                   <div className="flex flex-col w-[80%] max-sm:w-[70%]">
//                     <h3 className="text-gradient4 text-xl max-md:text-lg font-normal leading-relaxed">
//                       {item.title}
//                     </h3>
//                     <p className="text-white opacity-70 text-xs max-md:text-xs font-normal max-sm:w-[100%] w-[90%]">
//                       {item.text}
//                     </p>
//                   </div>
//                   <div className="relative w-[20%] max-sm:w-[30%] my-auto">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       width={item.title !== 'Trader' ? 130 : 130}
//                       height={item.title !== 'Trader' ? 90 : 90}
//                       className="relative inset-0 z-50 group-hover:opacity-0
//                       ms-5 md:ms-0
//                       transition-opacity ease-[ease-in-out] h-[80px] w-[80px] md:w-[130px]"
//                     />
//                     <Image
//                       src={item.imageHover}
//                       alt={item.title}
//                       width={item.title !== 'Trader' ? 130 : 130}
//                       height={item.title !== 'Trader' ? 90 : 90}
//                       className={`absolute inset-0 z-50 group-hover:opacity-100 opacity-0
//                       ms-5 md:ms-0
//                       transition-opacity ease-[ease-in-out] h-[80px] w-[80px]  md:w-[130px]`}
//                     />
//                   </div>
//                   <div className="absolute h-[100%] w-[100%] top-0 left-0 right-0 bottom-0 overflow-hidden">
//                     {item.planets.map((item, index) => (
//                       <Image
//                         key={index}
//                         src={item.image}
//                         alt={'planet'}
//                         width={80}
//                         height={80}
//                         className={`absolute z-50 ${item.class}`}
//                       />
//                     ))}
//                     {item.points.map((item, index) => (
//                       <Image
//                         key={index}
//                         src={item.image}
//                         alt={'point'}
//                         width={5}
//                         height={5}
//                         className={`absolute z-50 ${item.class}`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <div className="blob"></div>
//                 <div className="fakeblob"></div>
//               </div>
//             ))}
//           </div>
//           <div
//             className="relative xl:-top-16
//             xl:-left-10 overflow-hidden
//             2xl:[&>div]:!h-[640px]
//             2xl:[&>div]:!w-[640px] xl:h-[550px]
//             xl:[&>div]:!h-[620px]
//             xl:[&>div]:!w-[620px]
//             sm:[&>div]:!h-[450px]
//             sm:[&>div]:!w-[450px]
//             flex justify-center max-w-[100vw]
//             object-cover [&>div]:flex-shrink-0 md:[&>div]:!h-[700px] md:[&>div]:!w-[700px]"
//             ref={elementRef}
//             onClick={handleAnimationClick}
//           >
//             <Lottie options={defaultOptions} isPaused={!isVisible} />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HowItWorks
import Image from 'next/image'
import Decorator from '@/src/components/Common/Layout/BackgroundLanding'
import { ScrollParallax } from 'react-just-parallax'

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center justify-center  overflow-hidden">
      <Decorator />
      <h1 className="text-3xl font-normal text-white py-20">How it works</h1>
      <div className="grid lg:grid-cols-2 gap-4 relative z-50 max-md:w-full px-6">
        <div className="relative bg-shark-400 w-full md:min-w-[46.875rem] min-h-[12.5rem] px-10 py-12 bg-opacity-40 ">
          <h1 className="text-xl md:text-[1.75rem] md:leading-10  text-chartreuse-yellow-500 font-bold">Traders</h1>
          <p className="text-shark-100 text-sm md:text-base font-normal md:max-w-[23.4375rem] max-sm:max-w-[9.875rem] w-[20rem]">
            Swap any Token on MODE with low fees and trade perpetuals on EON.
          </p>
          <Image
            className="absolute -right-20 md:right-20 top-5 md:top-0 md:bottom-1 max-sm:[clip-path:inset(0%_38%_15%_0%)] [clip-path:inset(0%_37%_17%_0%)] md:[clip-path:inset(5%_0%_10%_0%)] md:h-[13.625rem] md:w-[13.625rem]"
            src={'/static/images/solexchange/HowItWorks/traders.svg'}
            alt="background"
            height={218}
            width={218}
          />
        </div>
        <div className="relative bg-shark-400 w-full md:min-w-[46.875rem] min-h-[12.5rem] px-10 py-12 bg-opacity-40">
          <h1 className="text-xl md:text-[1.75rem] md:leading-10  text-chartreuse-yellow-500 font-bold">Liquidity Providers</h1>
          <p className="text-shark-100 text-sm md:text-base font-normal md:max-w-[23.4375rem] max-sm:max-w-[9.875rem] w-[20rem]  ">
            Deposit tokens on SolExchange to receive SOL emissions as rewards.
          </p>
          <Image
            className="absolute -right-20 [clip-path:inset(0%_32%_18%_0%)] -bottom-12 h-[16rem] w-[16rem] md:h-[15.625rem] md:w-[26.25rem] md:[clip-path:inset(0%_0%_18%_0%)]"
            src={'/static/images/solexchange/HowItWorks/LiquidityProviders.svg'}
            alt="background"
            height={250}
            width={420}
          />
        </div>
        <div className="relative bg-shark-400 w-full md:min-w-[46.875rem] min-h-[12.5rem] px-10 py-12 bg-opacity-40">
          <h1 className="text-xl md:text-[1.75rem] md:leading-10  text-chartreuse-yellow-500 font-bold">Voters</h1>
          <p className="text-shark-100 text-sm md:text-base font-normal md:max-w-[23.4375rem] max-sm:max-w-[9.875rem] w-[20rem]  ">
            Vote to decide which pools get SOL emissions and receive swap fees and bribes from that pool.
          </p>
          <Image
            className="absolute h-[19rem] w-[19rem] md:h-[25rem] md:w-[25rem] -right-20 md:-right-5 -bottom-32 md:-bottom-44 [clip-path:inset(0%_28%_42%_0%)]  md:[clip-path:inset(0%_0%_45%_0%)]"
            src={'/static/images/solexchange/HowItWorks/voters.svg'}
            alt="background"
            height={400}
            width={400}
          />
        </div>
        <div className="relative bg-shark-400 w-full md:min-w-[46.875rem] min-h-[12.5rem] px-10 py-12 bg-opacity-40">
          <h1 className="text-xl md:text-[1.75rem] md:leading-10  text-chartreuse-yellow-500 font-bold">Protocols</h1>
          <p className="text-shark-100 text-sm md:text-base font-normal md:max-w-[23.4375rem] max-sm:max-w-[9.875rem] w-[20rem]  ">
            Deploy liquidity and deposit bribes to attract SOL emissions and build liquidity at low cost.
          </p>
          <Image
            className="absolute md:h-[17rem] md:w-[17rem] -right-20 bottom-0 md:right-20 md:-top-32 [clip-path:inset(0%_37%_0%_0%)] md:[clip-path:inset(48%_0%_0%_0%)]"
            src={'/static/images/solexchange/HowItWorks/protocols.svg'}
            alt="background"
            height={218}
            width={218}
          />
        </div>
      </div>
      <div className="py-32 w-full flex justify-start container relative">
        <ScrollParallax isAbsolutelyPositioned>
          <div className="absolute -left-32 top-0 ">
            <Image
              src="/static/images/landing/main/planet.svg"
              width={120}
              height={120}
              className="h-[7.5rem] w-[7.5rem]"
              alt="planet"
            />
          </div>
          <div className="absolute -left-8 bottom-4 ">
            <Image
              src="/static/images/landing/main/planet.svg"
              width={80}
              height={80}
              className="h-[5rem] w-[5rem]"
              alt="planet"
            />
          </div>
        </ScrollParallax>
        <div className="flex justify-center w-full">
          <Image
            className="h-[38.25rem] w-[48.0625rem]"
            src={'/static/images/solexchange/HowItWorks/emissions.svg'}
            alt="background"
            height={612}
            width={769}
          />
          <div className="h-[38.25rem] w-[48.0625rem] ">
            <Image
              className="w-[75rem] h-[75rem] absolute -top-40 z-10 "
              src={'/static/images/solexchange/HowItWorks/solPlanet.png'}
              alt="background"
              height={1912}
              width={1885}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
