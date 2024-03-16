import React from 'react'
import BridalHairMakeupHero from './BridalHairMakeupHero'
import ContactComponent from '../ContactComponent'
import InstagramComponent from '../InstagramComponent'

const displayImages = [
  "/instagram/image_5.png",
  "/instagram/image_6.png",
  "/instagram/image_8.png",
  "/instagram/image_7.png",
]  

const BridalHairMakeupPage = () => {
  return (
    <div className='w-full'>
        <BridalHairMakeupHero />
        <InstagramComponent displayImages={displayImages} />
        <ContactComponent bgImage={"/contact/ContactImage2.jpeg"} />
    </div>
  )
}

export default BridalHairMakeupPage