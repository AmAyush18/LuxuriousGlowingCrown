import React from 'react'

const WhyChooseUs = () => {
    const bgImage = `/services/ServicesHero.png`
  return (
    <div className='w-full'>
        <div 
          className="w-full min-h-[640px]"
          style={{ backgroundImage: `url('${bgImage}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', objectFit: 'cover'}}
        >
            <div className="w-full flex min-h-[640px] flex-col items-center justify-center">
               <div className="w-fit px-10 py-8 bg-[#070F12]/70">
                <h1 className='text-[60px] font-[700] text-center cormorant text-white leading-[72px]'>
                    Why Choose Us
                </h1>
                <p className='text-[20px] mt-14 font-[600] leading-9 text-white text-center'>
                At LGC, we unveil your true self with styles that 
                </p>
                <p className='text-[20px] font-[600] leading-9 text-white text-center'>
                speak volumes. Where every cut is a promise 
                </p>
                <p className='text-[20px] font-[600] leading-9 text-white text-center'>
                  - to turn heads, to empower.
                </p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs