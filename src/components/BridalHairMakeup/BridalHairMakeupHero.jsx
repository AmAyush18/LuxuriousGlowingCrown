import React from 'react'
import Navbar from '../Navbar'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import Header from '../Header';

const BridalHairMakeupHero = () => {
    const bgImage = `/bridal-hair-makeup/BridalHero.png`
    return (
      <div className='w-full min-h-screen flex' style={{ backgroundImage: `url('${bgImage}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', objectFit: 'cover'}}>
          <div className="w-[55%] h-full">
              <Header />
          </div>
          <div className="w-[45%] min-h-screen flex flex-col gap-y-2 bg-[#0B1518]/65 backdrop-blur-md">
              <Navbar />
  
              <div className="w-full min-h-[90vh] flex flex-col justify-center text-white pl-20 pr-10">
                  
                  <h1 className='cormorant font-[700] text-[64px] uppercase'>The Bridal</h1>
                  <h1 className='cormorant font-[700] text-[64px] uppercase leading-[64px]'>Glam</h1>
                  
                  <p className='text-[18px] text-[#ccc] font-[600] mt-8'>
                    Crafting your dream wedding look with 
                  </p>
                  <p className='text-[18px] text-[#ccc] font-[600]'>
                    artistry and finesse, where every detail is 
                  </p>
                  <p className='text-[18px] text-[#ccc] font-[600]'>
                    tailored to highlight your unique radiance.
                  </p>
  
                  <div className='border-b-[3px] border-b-white mt-10 w-[30%]' />
  
                  <h3 className='mt-16 uppercase font-[700] text-[#ccc] tracking-[3.5px] flex items-center'>
                      LUXURIOUS GLOWING CROWN <span> <LuDot className='w-[24px] h-[24px]' /> </span>
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

export default BridalHairMakeupHero