import React, { useState } from 'react'
import { logo } from '../assets'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { func } from 'prop-types';

const Navbar = () => {
    const[nav, setNav] = useState(false);

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
            <div className='max-w-[1183px] relative m-auto font-mont  text-white   h-full flex items-center justify-between'>

                    {/* Background-image */}
                    <Link to={'/'}>
                    <img className='brightness-100 ml-2 md:ml-0' src={logo} alt="" />
                    </Link>

                    {/* Nav-links */}
                    <div className='flex items-center  '>
                        <ul  className='hidden  lg:flex px-2 ml-8 text-md text-white cursor-pointer justify-between gap-10 items-center '>
                        {links.map(({id,link}) =>(
                            <>
                                <li className=' hover:underline underline-offset-8 cursor-pointer  px-2 ' key={id}>
                                                                {link}                      
                                </li>
                            </>
                        ))}
                        {/* to react-router to work */}
                        <Link className='px-2 hover:underline underline-offset-8' to={'/blogs'}> Blogs  </Link>
                        </ul>
                    </div>
                    
                

                    <div className='lg:hidden mr-6 ' onClick={()=> setNav(!nav)}>
                        {nav?   
                                <> 
                                    <div className='mr-6'>
                                        <ImCross className='absolute z-10 top-6'  />
                                    </div>
                                  
                                </> 
                            :<GiHamburgerMenu size={30} opacity={.9}/> 
                        }
                    </div>

                    {nav && ( 
                            <div className='md:hidden border absolute transition-all ease-in-out duration-200 top-0 left-0 w-full h-screen p-4   bg-gradient-to-b from-green-600 to-green-800 border-white'>
                                <Link className=' p-1 ml-1 absolute top-0 left-0' to={'/'}>
                                        <img  src={logo}  />
                                </Link>

                                <ul  className="text-2xl font-bold w-fullrounded-lg h-full gap-2 flex flex-col justify-center items-center text-center " >
                                    <li  onClick={()=> setNav(!nav)} className='py-3  w-full '>HOME</li>
                                        <li  onClick={()=> setNav(!nav)} className='  py-3 w-full '>ABOUT</li>
                                        <li onClick={()=> setNav(!nav)} className=' py-3 w-full '>CONTACT</li>
                                    <Link to={'/blogs'} className=' py-3 w-full '>BLOGS</Link>
                                </ul>
                          </div> 
                    )}
 
                    <button className='hidden lg:flex rounded-full px-4 text-[#087D39] text-sm shadow-md hover:drop-shadow-lg font-semibold py-2   hover:bg-white bg-white/90 '>
                        E-marketplace
                    </button>

                </div>
)}

export default Navbar