import React from 'react'
import { Link } from 'react-router-dom'

const DisplayBanner = ({bgImage, reverse, title, subtitle, description}) => {

    const letterP = '/P.png'
  return (
    <div className={`w-full min-h-[80vh] bg-[#F4EDE6] flex ${reverse ? 'md:flex-row-reverse flex-col' : 'md:flex-row flex-col'}`}>
        <div 
            className="w-[100%] md:w-[50%] min-h-[80vh]"
            style={{ backgroundImage: `url('${bgImage}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', objectFit: 'cover'}}
        />
        <div 
            className="w-[100%] md:w-[50%]"  
        >
            <div className="w-[100%] mx-auto min-h-[80vh] flex flex-col items-center justify-center text-center gap-y-5">
                
                <h1 className='cormorant font-[600] text-[48px] uppercase leading-[48px] px-3'>{title}</h1>
                
                <p className='text-[16px] font-[600] uppercase tracking-[3.25px]'>{subtitle}</p>

                <p className='text-[19px] w-[80%] text-[#4D4D4D] font-[500] leading-9'>{description}</p>

                <Link 
                    to={"#contact"}
                    className='w-fit uppercase text-center bg-[#000508] text-white py-3 px-7 font-[600] text-[16px] tracking-[3px]'
                >
                    Book Appointment
                </Link>
            </div>
        </div>
    </div>
  )
}

export default DisplayBanner