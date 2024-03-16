import React from 'react'

const FEATURES = [
    {
        id: `FEAT001`,
        title: `Precision Haircutting`,
        description: `Louis’ mastery in precision cutting ensures that every snip contributes to a seamless and harmonious overall look.`,
        icon: `/home/icon_1.png`
    },
    {
        id: `FEAT002`,
        title: `Customised coloring`,
        description: `Whether you’re looking for subtle highlights, vivid hues, or seamless balayage, Louis will work with you to find the perfect shade and technique. `,
        icon: `/home/icon_2.png`
    },
    {
        id: `FEAT003`,
        title: `Special occasion styling`,
        description: `From weddings to red-carpent events, Louis excels at creating stunning updos and intricate styles that leave a lasting impression.`,
        icon: `/home/icon_3.png`
    },
]

const ServicesFeatures = () => {
  return (
    <div className='w-full'>
        <div className="w-[90%] mx-auto max-w-[1400px] flex justify-between py-[64px]">
            {
                FEATURES.map(({id, title, description, icon}) => (
                    <div key={id} className="w-[31%] flex flex-col gap-y-3 justify-center items-center">
                        <img src={icon} alt="icon" className='w-[76px] h-[64px] object-cover' />
                        <h3 className='text-center uppercase cormorant text-[24px] font-[700] leading-9 tracking-[3px]'>{title}</h3>
                        <p className='text-[14px] w-[90%] leading-9 text-center text-[#4D4D4D]'>{description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ServicesFeatures