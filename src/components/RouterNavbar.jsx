import React, { useState } from 'react'
import { logo } from '../assets'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { func } from 'prop-types';
import {logo3} from '../assets';

const Navbar = () => {
    const[nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'About',
            
        },
        // {
        //     id: 2,
        //     link: 'Contact',
        // },
        // {
        //   id: 3,
        //   link: 'Blogs',
          
        // },
      ];

  return (
    <div className='w-full m-auto  '>
            <div className='max-w-[1183px] min-w-[375px] relative m-auto font-mont overlay-hidden mb-4 rounded-lg   text-black   h-full flex items-center justify-between'>

                    {/* Background-logo */}
                    <div className=' h-max-[25px] w-auto  p-12'>
  <Link to={'/'}>
    <img
      className='rounded-lg brightness-100 h-[10px] w-auto  md:ml-0'
      src={logo3}
      alt=""
      style={{ transform: 'scale(10)' }} // Adjust the scale factor as needed
    />
  </Link>
</div>

                    {/* Nav-links */}
                    <div className='flex items-center  '>
                        <ul  className='hidden  lg:flex px-2 ml-8 text-md text-black cursor-pointer justify-between gap-10 items-center '>
                        {/* to react-router to work */}
                        <Link className='px-2 hover:underline underline-offset-8' to={'/'}> Home  </Link>

                        {links.map(({id,link}) =>(
                            <>
                                <li className=' hover:underline underline-offset-8 cursor-pointer  px-2 ' key={id}>
                                                     <Link to={'/'}> {link}</Link>                             
                                </li>
                            </>
                        ))}
                            <Link className='px-2 hover:underline underline-offset-8' to={'/services'}> Services  </Link>
                            <Link className='px-2 hover:underline underline-offset-8' to={'/blogs'}> Blogs  </Link>
                            <Link className='px-2 hover:underline underline-offset-8' to={'/chat'}> Chat Us  </Link>
                            <Link className='px-2 hover:underline underline-offset-8' to={'/'}> Contact  </Link>
                        </ul>
                    </div>
                    
                

                    <div className='lg:hidden mr-6 ' onClick={()=> setNav(!nav)}>
                        {nav?   
                                <> 
                                    <div className='mr-6'>
                                        <ImCross color='white' opacity={.9} className='absolute z-40 right-7 top-11'  />
                                    </div>
                                  
                                </> 
                            :<GiHamburgerMenu size={30} color='black' opacity={.8}/> 
                        }
                    </div>

                    {nav && ( 
                            <div className='md:hidden z-30 border absolute transition-all ease-in-out duration-200 top-0 text-white left-0 w-full h-screen p-4   bg-gradient-to-b from-green-600 to-green-800 border-white'>
                                <Link className=' p-1  ml-1 absolute top-0 left-0' to={'/'}>
                                        <img  src={logo}  />
                                </Link>

                                <ul  className="text-2xl font-bold w-fullrounded-lg h-full gap-2 flex flex-col justify-center items-center text-center " >
                                    {links.map(({ id, link }) => (
                                        <Link to={'/'} className='py-3  w-full'>
                                            {link}
                                        </Link>
                                    ))}
                                        <Link to={'/services'} onClick={()=> setNav(!nav)} className=' py-3 w-full '>Services</Link>
                                        <Link to={'/blogs'} onClick={()=> setNav(!nav)} className=' py-3 w-full '>Blogs</Link>
                                        <Link to={'/chat'} onClick={()=> setNav(!nav)} className=' py-3 w-full '>Chat Us</Link>
                                </ul>
                          </div> 
                    )}
 
                    <Link to={'/marketPlace'} className='hidden lg:flex rounded-full px-4 text-[#087D39] text-sm shadow-md hover:drop-shadow-lg font-semibold py-2   hover:bg-white bg-white/90 '>
                        E-marketplace
                    </Link>

                </div>
                </div>
)}

export default Navbar