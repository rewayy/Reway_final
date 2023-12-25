import React from 'react';
import {  call, facebook, gmail, googlebadge, logo2 } from '../assets';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export const Footer = () => {
  return (
    
      <div className=' min-w-[375px] md:h-[180px] shadow-lg   '>
        <div className=' flex flex-col md:flex-row bg-[#008037] text-white md:py-12 md:gap-0 gap-4 py-1  justify-center px-4 md:px-[40px] '>
                <div className='md:w-1/4 text-center mb-4 mt-16 md:mt-0 md:mb-0  md:relative'>
                    <img src={logo2} alt='logo2' className=' -mt-12 md:-mt-20' />
                 
                  <div className='flex justify-center  md:absolute  md:top-16 md:left-[18vh]  '>
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
                <div className='md:w-1/4 text-center md:text-start grid cursor-pointer  md:mx-20 text-sm  leading-7 font-normal opacity-90 md:opacity-100 md:font-normal md:tracking-wide   grid-cols-2 mb-6  gap-2 md:mb-0  '>
                  <ul className='flex flex-col'>
                    <ScrollLink to='hero' smooth={true} duration={900} className='hover:underline'>Home</ScrollLink>
                    <ScrollLink to='about' smooth={true} duration={900} className='hover:underline'>About</ScrollLink>
                    <Link to='/services' className='hover:underline'>Services</Link>
                    <Link to='/blogs' className='hover:underline'>Blogs</Link>
                    <ScrollLink to='contact' smooth={true} duration={600} className='hover:underline'>Contact</ScrollLink>
                  </ul>

                  <ul className='w-3/2 md:w-full flex flex-col    '>
                  <ScrollLink to='testimonials' smooth={true} duration={600} offset={-80} className='hover:underline'>Testimonials</ScrollLink>
                  <ScrollLink to='timeline' smooth={true} duration={600} offset={-80} className='hover:underline'>Our Journey</ScrollLink>
                  <ScrollLink to='sustainable goals' smooth={true} duration={800} offset={-80} className='hover:underline'>Sustainable goals</ScrollLink> 
                    <Link to={'/marketPlace'} className='md:inline-block  md:w-[8vw] text-center bg-white/70 md:bg-white/85 -px-2 hover:bg-white text-green-800 text-xs md:text-sm my-1 rounded-full md:px-2  md:font-normal   py-2'>E-marketplace</Link>
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
