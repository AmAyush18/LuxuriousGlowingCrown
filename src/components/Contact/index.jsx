import React from 'react'
import ContactHero from './ContactHero'
import ContactComponent from '../ContactComponent'

const ContactPage = () => {
  return (
    <div className='w-full'>
        <ContactHero />
        <ContactComponent bgImage={"/contact/ContactImage1.jpeg"} />
    </div>
  )
}

export default ContactPage