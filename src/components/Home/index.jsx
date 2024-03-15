import React from 'react'
import Hero from './Hero'
import ContactComponent from '../ContactComponent'

const HomePage = () => {
  return (
    <div className='w-full'>
        <Hero />
        <ContactComponent bgImage={"/contact/ContactImage1.jpeg"} />
    </div>
  )
}

export default HomePage