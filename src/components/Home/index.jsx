import React from 'react'
import Hero from './Hero'
import ContactComponent from '../ContactComponent'
import DisplayBanner from '../DisplayBanner'
import InstagramComponent from '../InstagramComponent'
import Features from './Features'

const BANNERS_DETAILS = [
  {
    bgImage: `/home/HomeBannerOne.png`,
    reverse: false,
    title: `Louis Bowanee`,
    subtitle: `Master hair stylist`,
    description: `With a passion for creatingcaptivating hair transformations and over 25 years of experience in the industry. Louis is your trusted partner in achieving the perfect hairstyle that complements your unique personality and lifestyle.`
  },
  {
    bgImage: `/home/HomeBannerTwo.png`,
    reverse: true,
    title: `A Legacy of Hair Artistry`,
    subtitle: `Master hair stylist`,
    description: `A true artist in the realm of hairstyling. Louis has dedicated his career to maintaining the art of hair design. His journey began over 25 years ago, where he embarked on a path to cultivate his innate creativity and refine his skills`
  },
  {
    bgImage: `/home/HomeBannerThree.png`,
    reverse: false,
    title: `Trendsetter in Hairstyling`,
    subtitle: `Master hair stylist`,
    description: `Over the years, Louis has honed his craft through continuous educations, staying up-to-date with the latest trends and techniques to ensure you receive the best in hairstyling innovation. `
  },
]

const displayImages = [
  "/instagram/image_9.png",
  "/instagram/image_10.png",
  "/instagram/image_12.png",
  "/instagram/image_11.png",
]

const HomePage = () => {
  return (
    <div className='w-full'>
        <Hero />
        <Features />
        {
          BANNERS_DETAILS.map((banner) => (
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
        <InstagramComponent displayImages={displayImages} />
        <ContactComponent bgImage={"/contact/ContactImage1.jpeg"} />
    </div>
  )
}

export default HomePage