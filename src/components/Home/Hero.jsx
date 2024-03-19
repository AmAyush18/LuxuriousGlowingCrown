import React from 'react'
import Navbar from '../Navbar'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import Header from '../Header';
import MobileNavbar from '../MobileNavbar';

const Hero = () => {
    const bgImage = `/home/HomeHero.jpeg`
  return (
    <div className='w-full max-w-[1300px] mx-auto min-h-screen flex' style={{ backgroundImage: `url('${bgImage}')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', objectFit: 'cover'}}>
        <div className="hidden md:block w-[55%] h-full">
            <Header />
        </div>
        <div className="w-[45%] min-h-screen hidden md:flex flex-col gap-y-2 bg-[#0B1518]/65 backdrop-blur-md">
            <Navbar />

            <div className="w-full min-h-[90vh] flex flex-col justify-center text-white md:pl-10 lg:pl-20 pr-10">
                
                <h1 className='cormorant font-[700] text-[64px] uppercase'>The</h1>
                <h1 className='cormorant font-[700] text-[64px] uppercase leading-[64px]'>Perfect Cut</h1>
                
                <p className='text-[18px] text-[#ccc] font-[600] mt-8'>
                    We see “YOU” and we create the look that
                </p>
                <p className='text-[18px] text-[#ccc] font-[600]'>
                    matches best on your personality
                </p>

                <div className='border-b-[3px] border-b-white mt-10 w-[30%]' />

                <h3 className='mt-16 uppercase font-[700] text-[#ccc] tracking-[3.5px] flex items-center'>
                    LUXURIOUS GLOWING CROWN <span> <LuDot className='w-[24px] h-[24px]' /> </span>
                </h3>

                <div className="flex gap-x-3 mt-8">
                    <div className="w-[48px] h-[48px] bg-[#A5836A]/80 flex justify-center items-center"> 
                        <FaAngleLeft className='text-[22px]' /> 
                    </div>
                    <div className="w-[48px] h-[48px] bg-[#A5836A]/80 flex justify-center items-center"> 
                        <FaAngleRight className='text-[22px]' /> 
                    </div>
                </div>
            </div>
        </div>
        <div className="md:hidden w-full bg-[#0B1518]/65">
            <MobileNavbar />

            <div className="w-full min-h-[90vh] flex flex-col justify-center text-white px-10">
                
                <h1 className='cormorant font-[700] text-[42px] uppercase'>The</h1>
                <h1 className='cormorant font-[700] text-[42px] uppercase leading-[64px]'>Perfect Cut</h1>
                
                <p className='text-[16px] text-[#ccc] font-[600] mt-8'>
                    We see “YOU” and we create the look that
                    matches best on your personality.
                </p>

                <div className='border-b-[3px] border-b-white mt-10 w-[30%]' />

                <h3 className='mt-16 text-[14px] uppercase font-[600] text-[#ccc] tracking-[3px] flex items-center'>
                    LUXURIOUS GLOWING CROWN <span> <LuDot className='w-[24px] h-[24px]' /> </span>
                </h3>

                <div className="flex gap-x-3 mt-8">
                    <div className="w-[36px] h-[36px] bg-[#A5836A]/80 flex justify-center items-center"> 
                        <FaAngleLeft className='text-[19px]' /> 
                    </div>
                    <div className="w-[36px] h-[36px] bg-[#A5836A]/80 flex justify-center items-center"> 
                        <FaAngleRight className='text-[19px]' /> 
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero