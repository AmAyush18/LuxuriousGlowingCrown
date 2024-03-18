import React from 'react'

const CustomerCareBanner = () => {
    const bgImage = `/services/customer-care.png`
  return (
    <div 
        className='w-full min-h-[600px] flex flex-col items-center justify-center'
        style={{ backgroundImage: `url('${bgImage}')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', objectFit: 'cover'}}  
    >
      <div className="bg-[#000]/50  py-10 px-9 text-white text-center">
          <h1 className='cormorant font-[700] text-[42px] md:text-[48px] lg:text-[60px] leading-[72px] uppercase'>
            Custom Care Consultations
          </h1>
          <div className='mt-3 lg:block hidden'>
            <p className="text-white text-[20px] leading-9">
            For those seeking a tailored touch, LGC's consultation-only 
            </p>
            <p className="text-white text-[20px] leading-9">
            services cater to your unique needs. Whether it's for bridal 
            </p>
            <p className="text-white text-[20px] leading-9">
              elegance, keratin sophistication, or voluminous extensions, Louis 
            </p>
            <p className="text-white text-[20px] leading-9">
              provides bespoke solutions.
            </p>
          </div>
          <div className='mt-3 lg:hidden'>
            <p className="text-white text-[20px] leading-9">
            For those seeking a tailored touch, LGC's consultation-only services cater to your unique needs. Whether it's for bridal elegance, keratin sophistication, or voluminous extensions, Louis provides bespoke solutions.
            </p>
          </div>
      </div> 
    </div>
  )
}

export default CustomerCareBanner