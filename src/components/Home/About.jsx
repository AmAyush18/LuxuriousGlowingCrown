import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='w-full flex md:flex-row flex-col-reverse bg-[#080D10] min-h-[640px]'>
        <div className="w-full md:w-[55%] flex flex-col justify-between">
            <div className="w-full flex flex-col gap-y-7 flex-1 justify-center px-14 pt-16">
                <p className='text-[18px] lg:text-[20px] text-[#C19A5D] font-[600] leading-6 tracking-[3px] uppercase'>about</p>
                <h3 className='cormorant text-white text-left text-[42px] md:text-[48px] lg:text-[54px] font-[700] leading-[66px]'>
                    We tell amazing stories with hair
                </h3>
                <p className='text-[18px] lg:text-[20px] leading-9 text-[#C0C0C0]'>
                    You dream about sleek, healthy looking hair that looks picture perfect, ready to rock on any occasion? We will make your dreams come true.
                </p>
                <Link to={"#"} className='w-fit px-4 py-2 uppercase text-white border border-white text-[16px] font-[600] leading-9 tracking-[3px]'>
                    View More
                </Link>
            </div>
            <div className="w-full left-0 bottom-0">
                <img src="/bottom-left-white.png" alt="" className='object-cover' />
            </div>
        </div>
        <div className="w-full md:w-[45%] h-full">
            <img src="/home/about.png" alt="" className='w-[100%] max-w-[640px] md:min-h-[640px] object-cover' />
        </div>
    </div>
  )
}

export default About