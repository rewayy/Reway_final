import React from 'react'
import { logo } from '../assets'
import { Link } from 'react-router-dom'

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
            <div className='w-full h-full'>
                <div className='max-w-[1183px] m-auto  text-black  font-mont  overflow-hidden shadow-md rounded-lg  h-full flex items-center justify-between'>

                    {/* Background-image */}
                    <div >
                        <Link to={'/'}>
                        <img className='brightness-100  ' src={logo} alt="" />
                        </Link>
                    </div>

                    {/* Nav-links */}
                    {/* <div className='flex items-center  '>
                        <ul  className='hidden  lg:flex px-2 ml-8 text-md cursor-pointer justify-between gap-10 items-center '>
                        {links.map(({id,link}) =>(
                            <li className=' px-2' key={id}>
                                {link}
                                
                            </li>
                        ))}
                        </ul>
                    </div> */}

                    <div className='flex items-center font-mont  '>
                        <ul  className='hidden  lg:flex px-2 ml-8  hover:text-green-800 text-md cursor-pointer justify-between gap-10 items-center '>
                            <Link to={'/'} className=' hover:underline underline-offset-8  px-2 '> Home  </Link>
                            <li className=' hover:underline underline-offset-8  px-2 '> About</li>
                            <li className=' hover:underline underline-offset-8  px-2 '> Contact</li>
                            <li className=' hover:underline underline-offset-8  px-2 '> Blogs</li>
                        </ul>
                    </div>

                    {/* Button */}
                    <button className='hidden mr-2 lg:flex rounded-full px-4 text-white bg-[#087D39] text-sm shadow-lg hover:bg-[#086e33]  py-2  tracking-wider'>
                        E-marketplace
                    </button>

                    </div>
            </div>
)}

export default Navbar