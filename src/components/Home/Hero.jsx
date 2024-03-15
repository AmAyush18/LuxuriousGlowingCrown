import React from 'react'
import Navbar from '../Navbar'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Header from '../Header';

const Hero = () => {
    const bgImage = `/home/HomeHero.jpeg`
  return (
    <div className='w-full min-h-screen flex' style={{ backgroundImage: `url('${bgImage}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', objectFit: 'cover'}}>
        <div className="w-[60%] h-full">
            <Header />
        </div>
        <div className="w-[40%] min-h-screen flex flex-col gap-y-2 bg-[#0B1518]/65 backdrop-blur-md">
            <Navbar />

            <div className="w-full mt-20 text-white px-20">
                
                <h1 className='cormorant font-[700] text-[64px] uppercase'>The</h1>
                <h1 className='cormorant font-[700] text-[64px] uppercase leading-9'>Perfect Cut</h1>
                
                <p className='text-[18px] text-[#ccc] font-[600] mt-8'>
                    We see “YOU” and we create the look that
                </p>
                <p className='text-[18px] text-[#ccc] font-[600]'>
                    matches best on your personality
                </p>

                <div className='border-b-[3px] border-b-white mt-10 w-[30%]' />

                <h3 className='mt-16 uppercase font-[700] text-[#ccc]'>
                    LUXURIOUS GLOWING CROWN
                </h3>

                <div className="flex gap-x-3 mt-8">
                    <div className="w-[48px] h-[48px] bg-[#A5836A]/80 flex justify-center items-center"> <FaAngleLeft className='text-[22px]' /> </div>
                    <div className="w-[48px] h-[48px] bg-[#A5836A]/80 flex justify-center items-center"> <FaAngleRight className='text-[22px]' /> </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero