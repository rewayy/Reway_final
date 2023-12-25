import React from 'react'
import { Link } from 'react-router-dom'

const HeroContent = () => {
  return (
    <div>
        {/* overlay */}
        <div className='bg-[#087D39]/90 top-0 left-0 w-full h-screen absolute z-0 ' />

        {/* Hero-image */}
        <img className='w-full h-screen left-0 top-0 object-cover  position-bottom  ' 
        src="https://images.pexels.com/photos/14593478/pexels-photo-14593478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="hero-img" />

        {/* Headline content */}
        <div className=' w-full h-full  absolute -top-2 mt-4 md:mt-2 md:gap-8 gap-6 text-white  flex flex-col  justify-center items-center  ' >
            <div className=''  >
                <h1 className='text-center text-3xl md:text-5xl '>Reway</h1>
                <h3 className='text-center text-3xl md:text-5xl mt-1'>Building a Circular Economy</h3>
            </div>
            <p className='w-full px-8 md:px-0  text-xs md:text-lg md:w-[28vw]  text-center tracking-wider md:normal   md:leading-tight  font-thin '>
                Get quotations from multiple recyclers on one platform!
            </p>
            {/* Button */}
            <Link to={'/services'} className='text-xs   border font-mont border-white px-2   shadow-md  py-1 rounded-full cursor-pointer' > know more</Link>
        </div>
    </div>
  )
}

export default HeroContent