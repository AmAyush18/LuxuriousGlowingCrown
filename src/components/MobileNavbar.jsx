import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx' 
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

const MobileNavbar = () => {
    
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsMenuOpen(false)
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='w-full'>
      <div className="min-w-[90%]  max-w-[1300px] mx-auto mt-5 py-4 flex justify-between bg-transparent px-6 rounded-full">
        <div className="flex-1">
            <Link to={"/"}>
                <img src="/lgc-logo.svg" alt="" className='w-[100px] h-[70px] mt-4' />
            </Link>
        </div>
        <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <RxCross2 className="text-[22px]" />
              ) : (
                <FaBars className="text-[22px]" />
              )}
            </button>
        </div>
        <div
            className={`space-y-4 w-[65%] max-w-[1200px] transition-[500] rounded-b-xl mx-auto px-4 md:hidden mt-16 py-7 bg-[#0B1518]/65 backdrop-blur-md ${
            isMenuOpen ? "block fixed top-0 right-0" : "hidden"
            }`}
        >
            {navOptions.map((nav) => (
            <Link key={nav.id} to={nav.url} className={`px-3 py-2 text-white w-full text-sm flex flex-col justify-center items-center`}>
                <p>{nav.title}</p>
            </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar