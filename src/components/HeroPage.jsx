import React from 'react'
import { logo } from '../assets'

export const HeroPage = () => {
  return (
    <header className='w-full h-screen relative z-4 '>
        
        {/* Navbar */}
            <div className='w-full h-[80px] absolute top-0 left-0 z-10  '>
                <div className='max-w-[1183px] m-auto  text-white font-thin h-full flex items-center justify-between'>
                    <img src={logo} alt="" />
                    <div className='flex items-center  '>
                        <ul className='flex px-2 ml-8 text-md cursor-pointer justify-between gap-10 items-center '>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Home</li>
                        </ul>
                    </div>
                    <button className='rounded-full px-4 text-[#087D39] text-sm font-semibold py-2 tracking-wider bg-white'>E-marketplace</button>
                </div>
            </div>

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

    </header>
  )
}
