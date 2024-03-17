import React from 'react'
import { Link } from 'react-router-dom'

const OpeningHours = () => {
  return (
    <div className='w-full flex flex-col bg-[#F4EDE6]'>
        <div className='h-fit left-0 top-0'>
            <img src="/top-left.png" alt="" className='object-cover' />
        </div>
        <div className="w-[70%] mx-auto flex md:flex-row flex-col items-center justify-center">
            <div className="w-full md:w-[50%] md:border-r-2 md:pb-0 pb-10 md:border-b-transparent border-b-2 flex flex-col gap-y-4 items-center border-black">
                <p className='text-[20px] font-[600] leading-6 tracking-[3px] uppercase'>welcome</p>
                <h3 className='cormorant text-left text-[42px] lg:text-[54px] font-[700] leading-[66px]'>
                    Opening Hours
                </h3>
                <Link to={"#"} className='w-fit px-4 py-2 mt-2 uppercase text-white bg-[#070F12] text-[16px] font-[600] leading-9 tracking-[3px]'>
                    Book Now
                </Link>
            </div>
            <div className="w-full md:w-[50%] md:pt-0 pt-10 flex flex-col gap-y-4 md:pl-10">
                <p className='text-[18px] md:text-[20px] lg:text-[22px] text-[#070F12] font-[600] leading-9 tracking-[3px] text-left'>Monday to Friday / 08:00 - 20:00</p>
                <p className='text-[18px] md:text-[20px] lg:text-[22px] text-[#070F12] font-[600] leading-9 tracking-[3px] text-left'>Saturday / 10:00 - 18:00</p>
                <p className='text-[18px] md:text-[20px] lg:text-[22px] text-[#070F12] font-[600] leading-9 tracking-[3px] text-left'>Sunday / 10:00 - 18:00</p>
            </div>
        </div>
        <div className='w-full h-fit relative flex justify-end'>
            <img src="/bottom-right.png" alt="" className='object-cover' />
        </div>
    </div>
  )
}

export default OpeningHours