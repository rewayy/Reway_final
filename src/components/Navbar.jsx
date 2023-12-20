import React from 'react'
import { logo } from '../assets'

const Navbar = () => {
    const links=[
        {
            id:1,
            link:'Home'
        },
        {
            id:2,
            link:'About'
        },
        {
            id:3,
            link:'Contact'
        },
        {
            id:4,
            link:'Blogs'
        },
    ]

  return (
            <div className='max-w-[1183px] m-auto  text-white font-thin h-full flex items-center justify-between'>

                    {/* Background-image */}
                    <img className='brightness-100' src={logo} alt="" />

                    {/* Nav-links */}
                    <div className='flex items-center  '>
                        <ul  className='hidden  lg:flex px-2 ml-8 text-md cursor-pointer justify-between gap-10 items-center '>
                        {links.map(({id,link}) =>(
                            <li className=' px-2' key={id}>
                                {link}
                            </li>
                        ))}
                        </ul>
                    </div>
                    
                    {/* Button */}
                    <button className='rounded-full px-4 text-[#087D39] text-sm shadow-md hover:scale-105 duration-150 font-semibold py-2  tracking-wider bg-white'>
                        E-marketplace
                    </button>

                </div>
)}

export default Navbar