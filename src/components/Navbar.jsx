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
       
    ]

  return (
            <div className='max-w-[1183px] m-auto font-mont  text-white   h-full flex items-center justify-between'>

                    {/* Background-image */}
                    <Link to={'/'}>
                    <img className='brightness-100' src={logo} alt="" />
                    </Link>

                    {/* Nav-links */}
                    <div className='flex items-center  '>
                        <ul  className='hidden  lg:flex px-2 ml-8 text-md cursor-pointer justify-between gap-10 items-center '>
                        {links.map(({id,link}) =>(
                            <>
                                <li className=' px-2' key={id}>{link}  </li>
                            </>
                        ))}
                        {/* to react-router to work */}
                        <Link className='px-2' to={'/blogs'}> Blogs  </Link>
                        </ul>
                    </div>
                    
                    {/* Button */}
                    <button className='hidden lg:flex rounded-full px-4 text-[#087D39] text-sm shadow-md hover:drop-shadow-lg font-semibold py-2   hover:bg-white bg-white/90 '>
                        E-marketplace
                    </button>

                </div>
)}

export default Navbar