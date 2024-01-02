import React from 'react';
import { call, facebook, gmail, googlebadge, logo2, twit, linkden } from '../assets';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export const RouterFooter = () => {
  return (

    <div className=' min-w-[375px] max-w-[1600px] md:h-[180px] shadow-lg   '>
      <div className=' flex flex-col md:flex-row bg-[#008037] text-white md:py-12 md:gap-0 gap-4 py-1  justify-center px-4 md:px-[40px] '>
        <div className='md:w-1/4 text-center mb-4 mt-16 md:mt-0 md:mb-0  md:relative'>
        <img src={logo2} alt='logo2' className='transform scale-75 md:mt-[-10px] lg:mt-[-60px] ' />


          <div className='flex justify-center   md:left-[18vh] py-4  mt-[-20px] '>
            <a href="https://www.linkedin.com/company/reway-technologies/" className='px-3' target="_blank" rel="noopener noreferrer">
              <img src={linkden} alt='call' className='w-6 h-6' />
            </a>
            <a href="https://x.com/Reway_ewaste?t=crhFwR33u0pWgmsLRtDQbQ&s=08" className='px-3' target="_blank" rel="noopener noreferrer">
              <img src={twit} alt='gmail' className='w-6 h-6' />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100095503809698&mibextid=ZbWKwL" className='px-3' target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt='facebook' className='w-6 h-6' />
            </a>
          </div>
        </div>
        <div className='md:w-1/4 text-center md:text-start grid cursor-pointer  md:mx-20 text-sm  leading-7 font-normal opacity-90 md:opacity-100 md:font-normal md:tracking-wide   grid-cols-2 mb-6  gap-2 md:gap-10 md:mb-0  '>
          <ul className='flex flex-col'>
            <Link to='/' smooth={true} duration={900} className='hover:underline'>Home</Link>
            <Link to='/' smooth={true} duration={900} className='hover:underline'>About</Link>
            <Link to='/services' className='hover:underline'>Services</Link>
            <Link to='/blogs' className='hover:underline'>Blogs</Link>
            <Link to='/' smooth={true} duration={600} className='hover:underline'>Contact</Link>
          </ul>

          <ul className='w-3/2 md:w-full flex flex-col    '>
            <Link to='/' smooth={true} duration={600} offset={-80} className='hover:underline'>Testimonials</Link>
            <Link to='/' smooth={true} duration={600} offset={-80} className='hover:underline'>Our Journey</Link>
            <Link to='/' smooth={true} duration={800} offset={-80} className='hover:underline'>Sustainable goals</Link>
            <Link to={'/marketPlace'} className='md:inline-block  md:w-[8vw] text-center bg-white/70 md:bg-white/85 -px-2 hover:bg-white text-green-800 text-xs md:text-sm my-1 rounded-full   md:font-normal md:py-1   py-2'>E-marketplace</Link>
          </ul>
        </div>

        <div className='md:w-1/4 flex flex-col md:block justify-center items-center text-left sm:items-start '>
          <p className=' text-sm sm:text-md  md:text-2xl font-medium mb-1 md:mb-2'>Download the <span className='text-green-500 font-bold'>Reway</span> App, Now!</p>
          <a href=" https://play.google.com/store/apps/details?id=com.rewaytech.rewayusers" className='w-full flex md:block items-center justify-center'>
            <img className=' w-1/3 md:w-[140px] h-auto ' src={googlebadge} alt='google' />

          </a>
          <div>
            <a href="your_call_link  " className='w-full flex md:block items-center justify-center'>
              <div className='flex'>
                <img className=' w-6 h-6 ' src={call} alt='google' />
                <p className='px-3 '> +91 9315836383 </p>
              </div>
            </a>
              <div className='flex'>
                  <img className=' w-6 h-6  ' src={gmail}  alt='google' />
                  <p className='px-3'> reway.ewm@gmail.com</p>
              </div>
          </div>

        </div>
      </div>
      <div className='h-[40px] bg-slate-200 '>
        <p className='text-xs sm:text-sm md:text-md px-2 text-center text-gray-600 py-2 font-thin'>Copyright © 2023  Reway - All Rights Reserved.</p>
      </div>

    </div>

  );
};
