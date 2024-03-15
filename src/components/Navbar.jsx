import React from 'react'
import { Link } from 'react-router-dom'

const navOptions = [
    {
        id: `NAV001`,
        title: `Services`,
        url: `/services`
    },
    {
        id: `NAV002`,
        title: `Bridal Hair & Makeup`,
        url: `/bridal-hair-makeup`
    },
    {
        id: `NAV003`,
        title: `Contact`,
        url: `/contact`
    },
]

const Navbar = () => {
  return (
    <div className='w-full text-[#fff] flex justify-between px-10 py-5 z-10'>
        {
            navOptions.map(({title, id, url}) => (
                <Link key={id} className='text-[16px] uppercase' to={url}>
                    {title}
                </Link>
            ))
        }
    </div>
  )
}

export default Navbar