'use client'
import Image from 'next/image'

interface Items {
  label: string
  amount?: string | number
  description?: string
  icon: string
  textColor?: string
}

interface InfoBoxProps {
  data: Items
  setShowTooltip?: (show: boolean) => void
  hasTooltip?: boolean
  hasDecorator?: boolean
  textColor?: string
  fontSize?: string
  bgBox?: string
}

const InfoBox = ({ data, setShowTooltip, hasDecorator, hasTooltip = false, bgBox = '' }: InfoBoxProps) => {
  const handleShowTooltip = () => setShowTooltip && setShowTooltip(true)
  const handleHiddenTooltip = () => setShowTooltip && setShowTooltip(false)

  return (
    <div className="relative">
      <div className={`xl:h-[60px] flex  gap-2 items-center p-3 mb-3 relative ${bgBox === '' ? 'box' : bgBox}`}>
        <div className="">
          <span
            className={`inline-block text-lg text-transparent
            bg-gradient-to-r from-outrageous-orange-500 to-festival-500 bg-clip-text ${data.icon}`}
          ></span>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="xl:max-w-[280px] w-full">
            <h5 className="text-[11px] leading-4 2xl:text-xs text-shark-100">{data.label}</h5>
            <p className="text-[11px]  leading-4 font-normal text-white line-clamp-2">
              {data.amount || data.description}
            </p>
          </div>
        </div>
        {hasTooltip && (
          <span
            onMouseEnter={handleShowTooltip}
            onMouseLeave={handleHiddenTooltip}
            className="flex items-center justify-center w-5 h-5 text-xs 
            text-white rounded-full cursor-pointer icon-info bg-shark-200 hover:bg-outrageous-orange-500"
          ></span>
        )}
      </div>
      {hasDecorator && (
        <span className="absolute bottom-0 left-[10px] z-0">
          <Image src="/static/images/components/line.svg" alt="line" className="w-1 h-8" width={1} height={35} />
        </span>
      )}
    </div>
  )
}

export default InfoBox