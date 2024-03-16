import React from 'react'
import ContactHero from './ContactHero'
import ContactComponent from '../ContactComponent'
import InstagramComponent from '../InstagramComponent'

const displayImages = [
  "/instagram/image_1.png",
  "/instagram/image_2.png",
  "/instagram/image_4.png",
  "/instagram/image_3.png",
]  

const ContactPage = () => {
  return (
    <div className='w-full'>
        <ContactHero />
        <InstagramComponent displayImages={displayImages} />
        <ContactComponent bgImage={"/contact/ContactImage1.jpeg"} />
    </div>
  )
}

export default ContactPage