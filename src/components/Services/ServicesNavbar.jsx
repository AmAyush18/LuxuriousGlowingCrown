import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'

const ServicesNavbar = () => {
  return (
    <div className='w-full flex bg-transparent'>
        <div className="w-[60%] h-full">
            <Header />
        </div>
        <div className="w-[40%]">
            <Navbar />
        </div>
    </div>
  )
}

export default ServicesNavbar