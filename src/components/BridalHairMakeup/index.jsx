import React from 'react'
import BridalHairMakeupHero from './BridalHairMakeupHero'
import ContactComponent from '../ContactComponent'

const BridalHairMakeupPage = () => {
  return (
    <div className='w-full'>
        <BridalHairMakeupHero />
        <ContactComponent bgImage={"/contact/ContactImage2.jpeg"} />
    </div>
  )
}

export default BridalHairMakeupPage