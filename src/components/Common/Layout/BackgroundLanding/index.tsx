import Image from 'next/image'
import { ScrollParallax } from 'react-just-parallax'

const Background = () => {
  return (
    <div className="absolute -z-10  h-[1900px] top-0 left-0 right-0 bottom-0 overflow-hidden">
      <div className="max-w-[1920px] min-w-full min-h-full mx-auto relative">
      
        <ScrollParallax isAbsolutelyPositioned>
          {/* <Image
            src="/static/images/landing/main/planet.svg"
            width={80}
            height={80}
            className="absolute top-[300px] max-lg:top-[200px] right-16 z-10 planet"
            alt="planet"
          />
          <Image
            src="/static/images/landing/main/planet.svg"
            width={80}
            height={80}
            className="absolute top-[57rem] left-[33rem] z-10 max-lg:hidden planet"
            alt="planet"
          /> */}
          <Image
            src="/static/images/landing/main/planet.svg"
            width={50}
            height={50}
            className="absolute top-[15rem] left-[15rem] z-10 max-lg:hidden planet"
            alt="planet"
          />
          <Image
            src="/static/images/landing/main/planet.svg"
            width={30}
            height={30}
            className="absolute top-[55rem] right-[35rem] z-10 max-lg:hidden planet"
            alt="planet"
          />
        </ScrollParallax>
        
      </div>
    </div>
  )
}

export default Background
