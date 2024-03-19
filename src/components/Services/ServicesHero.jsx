import React from 'react'
import ServicesNavbar from './ServicesNavbar'

const ServicesHero = () => {

  const bgImage = `/services/ServicesHero.png`
  return (
    <div className='w-full max-w-[1300px] mx-auto min-h-screen bg-[#000]'>
        <div 
          className="w-full md:bg-center min-h-[92vh]"
          style={{ backgroundImage: `url('${bgImage}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', objectFit: 'cover'}}
        >
            <ServicesNavbar />
            <div className="w-full flex min-h-[80vh] flex-col items-center justify-center">
               <div className="w-fit px-10 py-8 bg-[#070F12]/70">
                <div className="md:block hidden">
                  <h1 className='text-[48px] md:text-[52px] lg:text-[60px] font-[700] text-center cormorant text-white leading-[72px]'>
                    Louis' Artistry: Cuts &
                  </h1>
                  <h1 className='text-[48px] md:text-[52px] lg:text-[60px] font-[700] text-center cormorant text-white leading-[72px]'>
                    Colors Redefined
                  </h1>
                </div>
                <div className="md:hidden">
                  <h1 className='text-[48px] font-[700] text-center cormorant text-white leading-[72px]'>
                    Louis' Artistry: Cuts &
                    Colors Redefined
                  </h1>
                </div>
                <div className="md:block hidden">
                  <p className='text-[20px] font-[600] leading-9 text-white text-center'>
                    Unleash your hair's potential with Louis' touch. From 
                  </p>
                  <p className='text-[20px] font-[600] leading-9 text-white text-center'>
                    modern cuts to stunning hues, experience tailor-
                  </p>
                  <p className='text-[20px] font-[600] leading-9 text-white text-center'>
                    made hair excellence.
                  </p>
                </div>
                <div className="md:hidden">
                  <p className='text-[18px] font-[600] leading-9 text-white text-center'>
                    Unleash your hair's potential with Louis' touch. From 
                    modern cuts to stunning hues, experience tailor-
                    made hair excellence.
                  </p>
                </div>

               </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesHero