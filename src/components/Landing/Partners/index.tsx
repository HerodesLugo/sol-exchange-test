import Image from 'next/image'
import Lottie from 'react-lottie'
import Animation from "@/src/assets/lottie/parnerts.json"


const Partners = () => {
  const defaultOptions = {
    loop: true,
    animationData: Animation,
  }
  return (
    <div className="flex flex-col items-center my-[25rem] relative ">
      <h1 className="text-white font-normal text-4xl absolute -top-96 z-50">Our Partners</h1>
      <Image
        src={'/static/images/solexchange/decorator.svg'}
        className="absolute -left-20 h-[19.6875rem] w-[34.375rem]"
        alt="decorator"
        height={315}
        width={550}
      />

      <div className="w-full relative  ">
        <div
        className="absolute  left-1/2 -translate-y-1/2 -translate-x-1/2 
        max-lg:[&>div]:!w-[70rem]
        max-lg:[&>div]:!h-[70rem]
        [&>div]:!w-[106.25rem]
        [&>div]:!h-[81.25rem] 
        [&>div]:!overflow-hidden z-50"
        >
          <Lottie isPaused={false} options={defaultOptions} />
        </div>
        <Image
          src={'/static/images/solexchange/effectStarts.svg'}
          className="absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 h-[80rem] w-[80rem] z-50 mix-blend-overlay"
          alt="decorator"
          height={1253}
          width={1293}
        />
      </div>
    </div>
  )
}

export default Partners
