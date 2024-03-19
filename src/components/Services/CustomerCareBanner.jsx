import React from 'react'

const CustomerCareBanner = () => {
    const bgImage = `/services/customer-care.png`
  return (
    <div 
        className='w-full max-w-[1300px] mx-auto min-h-[600px] flex flex-col justify-center'
        style={{ backgroundImage: `url('${bgImage}')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', objectFit: 'cover'}}  
    >
      <div className="bg-[#000]/50 max-w-[100%] md:max-w-[75%] w-fit text-left md:ml-20 py-10 px-6 md:px-10 lg:px-12 text-white">
          <h1 className='cormorant font-[700] text-[42px] md:text-[48px] lg:text-[60px] leading-[64px] md:leading-[72px]'>
            Custom Care Consultations
          </h1>
          <div className='mt-3 lg:block hidden text-left'>
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