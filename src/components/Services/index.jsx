import React from 'react'
import ContactComponent from '../ContactComponent'
import DisplayBanner from '../DisplayBanner'
import InstagramComponent from '../InstagramComponent'
import CustomerCareBanner from './CustomerCareBanner'

const SERVICES_BANNERS_DETAILS = [
    {
      bgImage: `/services/ServicesBannerOne.png`,
      reverse: false,
      title: `Hair Styles`,
      subtitle: `Blow Dry Mastery`,
      description: `LGC elevates your look with finesse. Experience over 25 years of styling prowess, perfecting each blowout to highlight your features.`
    },
    {
      bgImage: `/services/ServicesBannerTwo.png`,
      reverse: true,
      title: `Bright Strokes`,
      subtitle: `Highlight Expert`,
      description: `Louis excels in creating highlights that accentuate your hair's natural beauty. With a quarter-century of expertise, LGC provides bespoke luminosity for every shade, ensuring your highlights embody personal elegance and style.`
    },
    {
      bgImage: `/services/ServicesBannerThree.png`,
      reverse: false,
      title: `Haircuts`,
      subtitle: `Sharp precision`,
      description: `Louis' scissors sculpt more than just hair; they shape confidence. Specializing in precision cuts, LGC tailors each snip to your individual style, ensuring you leave with a haircut that's not only trendy but also.`
    },
    {
      bgImage: `/services/ServicesBannerFour.png`,
      reverse: true,
      title: `Color`,
      subtitle: `color Mastery`,
      description: `LGC’s color services go beyond the spectrum, offering a palette of shades that bring out the best in you. From subtle tints to full transformations, Louis ensures your color reflects your vision and vibrancy.`
    },
    {
      bgImage: `/services/ServicesBannerFive.png`,
      reverse: false,
      title: `Shampoo`,
      subtitle: `Luxe Lather`,
      description: `Dive into the indulgence of LGC's shampoo services, where each wash is a sensory journey. Louis and his team blend technique with high-quality products, leaving your hair impeccably clean, refreshed, and nourished.`
    },
]


const displayImages = [
  "/instagram/image_1.png",
  "/instagram/image_2.png",
  "/instagram/image_4.png",
  "/instagram/image_3.png",
]  

const ServicesPage = () => {
  return (
    <div className='w-full'>
      {
        SERVICES_BANNERS_DETAILS.map((banner) => (
          <DisplayBanner 
            key={banner.title} 
            bgImage={banner.bgImage} 
            reverse={banner.reverse} 
            title={banner.title}  
            subtitle={banner.subtitle}
            description={banner.description}  
          />
        ))
      }

      <CustomerCareBanner />
      <InstagramComponent displayImages={displayImages} />
      <ContactComponent bgImage={"/contact/ContactImage1.jpeg"} />
    </div>
  )
}

export default ServicesPage