import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'

const ServicesNavbar = () => {
  return (
    <div className='w-full flex bg-transparent'>
        <div className="w-[55%] h-full">
            <Header />
        </div>
        <div className="w-[45%]">
            <Navbar />
        </div>
    </div>
  )
}

export default ServicesNavbar