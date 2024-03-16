import React from 'react'
import { Link } from 'react-router-dom'

const BridalGlam = () => {
  return (
    <div className='w-full flex bg-[#080D10] max-h-[640px]'>
        <div className="w-[60%] flex flex-col justify-between">
            <div className="w-full flex flex-col gap-y-7 flex-1 justify-center px-14 pt-16">
                <h3 className='cormorant text-white text-left text-[54px] font-[700] leading-[66px]'>
                    Tailored Bridal Glam
                </h3>
                <p className='text-[20px] w-[95%] leading-9 text-[#C0C0C0]'>
                    Crafting your signature bridal look with meticulous care, LGC intertwines tradition and trend to unveil a portrait of grace on your wedding day. Discover the alchemy of bespoke hair and makeup that resonates with your bridal vision.
                </p>
                <Link to={"#"} className='w-fit px-4 py-2 uppercase text-white border border-white text-[16px] font-[600] leading-9 tracking-[3px]'>
                    View More
                </Link>
            </div>
            <div className="w-full left-0 bottom-0">
                <img src="/bottom-left-white.png" alt="" className='object-cover' />
            </div>
        </div>
        <div className="w-[40%] h-full">
            <img src="/bridal-hair-makeup/Bridal.png" alt="" className='w-[100%] max-h-[640px] object-cover' />
        </div>
    </div>
  )
}

export default BridalGlam