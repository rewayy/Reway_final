import React from 'react';
import { logo, call, facebook, gmail, googlebadge } from '../assets';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export const Footer = () => {
  return (
    
      <div className=' min-w-[375px] md:h-[180px] shadow-lg '>
        <div className=' flex flex-col md:flex-row bg-green-700 text-white md:py-12 gap-4 py-1  justify-center px-4 md:px-[40px] '>
                <div className='md:w-1/4 text-center mb-4 md:mb-0 '>
                  <div className='flex items-center justify-center '>
                    <img src={logo} alt='logo' className='w-12 h-12' />
                    <h1 className='text-white text-start md:ml-2'>REWAY</h1>
                  </div>
                  <div className='flex justify-center mt-2'>
                    <a href="your_call_link" className='px-1'  target="_blank" rel="noopener noreferrer">
                      <img src={call} alt='call' className='w-6 h-6' />
                    </a>
                    <a href="your_gmail_link" className='px-1' target="_blank" rel="noopener noreferrer">
                      <img src={gmail} alt='gmail' className='w-6 h-6' />
                    </a>
                    <a href="your_facebook_link" className='px-1' target="_blank" rel="noopener noreferrer">
                      <img src={facebook} alt='facebook' className='w-6 h-6' />
                    </a>
                  </div>
                </div>
                <div className='md:w-1/4 text-center md:text-start grid cursor-pointer  md:mx-20  text-sm md:text-[22px] leading-7 font-normal opacity-90 md:opacity-100 md:font-normal md:tracking-wide   grid-cols-2 mb-4 gap-2 md:mb-0  '>
                  <ul className='flex flex-col'>
                    <ScrollLink to='hero' smooth={true} duration={600} className='hover:underline'>Home</ScrollLink>
                    <ScrollLink to='about' smooth={true} duration={600} className='hover:underline'>About</ScrollLink>
                    <ScrollLink to='contact' smooth={true} duration={600} className='hover:underline'>Contact</ScrollLink>
                    <Link to='/blogs' className='hover:underline'>Blogs</Link>
                    <Link to='/services' className='hover:underline'>Services</Link>
                  </ul>

                  <ul className='w-3/2 md:w-full flex flex-col '>
                  <ScrollLink to='testimonials' smooth={true} duration={600} offset={-80} className='hover:underline'>Testimonials</ScrollLink>
                  <ScrollLink to='timeline' smooth={true} duration={600} offset={-80} className='hover:underline'>Our Journey</ScrollLink>
                  <ScrollLink to='sustainable goals' smooth={true} duration={600} offset={-80} className='hover:underline'>Sustainable goals</ScrollLink> 
                    <button className='md:inline-block   bg-white/70 md:bg-white/90 hover:bg-white text-green-700 text-xs md:text-sm my-1 rounded-sm px-2 md:px-4 font-normal hover:underline hover:underline-offset-4  py-2'>E-marketplace</button>
                  </ul>
                </div>
                
                <div className='md:w-1/4 flex flex-col md:block justify-center items-center text-left sm:items-start '>
                  <p className=' text-sm sm:text-md  md:text-2xl font-medium mb-1 md:mb-2'>Download the <span className='text-green-500 font-bold'>Reway</span> App, Now!</p>
                  <a href="your_call_link  " className='w-full flex md:block items-center justify-center'>
                  <img className=' w-1/3 md:w-[140px] h-auto ' src={googlebadge}  alt='google' />

                  </a>
                </div>
              </div>
              <div className='h-[40px] bg-slate-200 '>
                <p className='text-xs sm:text-sm md:text-md px-2 text-center text-gray-600 py-2 font-thin'>Copyright © 2023  Reway - All Rights Reserved.</p>
              </div>
          
        </div>
    
  );
};
