import React from 'react'

const FEATURES = [
    {
        id: `FEAT001`,
        title1: `PERSONALIZED`,
        title2: `EXPERIENCE`,
        description: `Every visit is a signature affair, tailored to your style. Experience our exceptional touch and see why each guest becomes a part of our family.`,
        icon: `/home/icon_1.png`
    },
    {
        id: `FEAT002`,
        title1: `PROFESSIONAL`,
        title2: `CARE`,
        description: `Our selection of premium products is curated for excellence. Trust in our expertise for unparalleled hair care without compromise.`,
        icon: `/home/icon_2.png`
    },
    {
        id: `FEAT003`,
        title1: `WE CARE`,
        title2: `WHAT WE DO`,
        description: `Our stylists don't just style; they celebrate hair with a passion that's infectious. Feel the difference dedication makes at our studio.`,
        icon: `/home/icon_3.png`
    },
]

const Features = () => {
  return (
    <div className='w-full'>
        <div className="w-[90%] mx-auto max-w-[1400px] flex md:flex-row flex-col gap-y-7 justify-between py-[64px]">
            {
                FEATURES.map(({id, title1, title2, description, icon}) => (
                    <div key={id} className="w-[100%] md:w-[31%] flex flex-col gap-y-3 justify-center items-center">
                        <img src={icon} alt="icon" className='w-[76px] h-[64px] object-cover' />
                        <h3 className='text-center cormorant uppercase text-[22px] md:text-[24px] font-[700] leading-9 tracking-[3px]'>{title1}</h3>
                        <h3 className='text-center cormorant uppercase text-[22px] md:text-[24px] font-[700] leading-[4px] tracking-[3px]'>{title2}</h3>
                        <p className='text-[14px] w-[90%] leading-9 text-center text-[#4D4D4D]'>{description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Features