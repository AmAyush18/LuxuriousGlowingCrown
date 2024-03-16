import React from 'react'

const CustomerCareBanner = () => {
    const bgImage = `/services/CustomerCare.png`
  return (
    <div 
        className='w-full min-h-[600px]'
        style={{ backgroundImage: `url('${bgImage}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', objectFit: 'cover'}}  
    />
  )
}

export default CustomerCareBanner