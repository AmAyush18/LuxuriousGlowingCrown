import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full max-w-[650px] mx-auto bg-transparent px-12'>
      <div className="w-fit">
        <Link to={"/"}>
          <img src="/lgc-logo.svg" alt="" className='w-[100px] h-[70px] mt-4' />
        </Link>
      </div>
    </div>
  )
}

export default Header