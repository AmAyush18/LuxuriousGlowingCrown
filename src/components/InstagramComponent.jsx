import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const InstagramComponent = ({displayImages}) => {
  return (
    <div className='w-full py-10'>
        <div className="w-[90%] mx-auto max-w-[1400px] flex gap-x-3 mb-3">
            <img src={displayImages[0]} alt="" className='w-[32%] max-h-[480px] object-cover' />
            <img src={displayImages[1]} alt="" className='w-[32%] max-h-[480px] object-cover' />
            <img src={displayImages[2]} alt="" className='w-[32%] max-h-[480px] object-cover' />
        </div>
        <div className="w-[90%] mx-auto max-w-[1400px] flex gap-x-3 mb-3">
            <div className="w-[32%] bg-[#08080A] flex flex-col gap-y-4 items-center justify-center">
                <h1 className='cormorant font-[600] text-[60px] text-white leading-[48px] px-3'>Follow Us</h1>
                <Link to={"#"} className='w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center'>
                    <FaInstagram className='w-[17px] h-[17px]' />
                </Link>
            </div>
            <img src={displayImages[3]} alt="" className='w-[65%] max-h-[480px] object-cover' />
        </div>
    </div>
  )
}

export default InstagramComponent