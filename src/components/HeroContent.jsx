import React from 'react'

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
        <div className=' w-full h-full  absolute -top-2 gap-4 text-white  flex flex-col  justify-center items-center  ' >
            <div>
                <h1 className=' text-center'>Recycling Solving</h1>
                <h1 className=' text-center mt-1'>Renewable Energy</h1>
            </div>
            <p className='w-1/4  text-center  text-md leading-tight font-thin '>
                A solution that caters all problems at a single  place at a single time
            </p>
            {/* Button */}
            <button className='text-xs  font-thin border  border-white px-2 hover:bg-white/10 shadow-md  py-1 rounded-full' > Know more</button>
        </div>
    </div>
  )
}

export default HeroContent