import React from 'react';
import { Link } from 'react-router-dom';
import { green_earth } from '../assets';

const MarketPlace = () => {
  return (
    <div id='marketPlace' className='w-full h-full mb-[70vw]  min-w-[375px]  md:mb-6 relative'>
      <div className='max-w-[1183px] md:m-auto h-full mx-3 bg-[#b4de8e] hover:drop-shadow-lg my-6 rounded-md text-black md:h-[70vh] flex items-center justify-center'>
        <div className=' md:flex gap-4  w-full h-full items-center justify-center'>
          <div className='justify-center  scale-15 md:block'>
            <img className='w-full   ' src={green_earth} alt='earth' />
          </div>

          <div className= 'flex flex-col w-full md:w-1/2 md:mr-4 p-2 items-center  justify-center my-auto'>
            <h1 className='text-2xl  -mt-12 md:mt-0 p-1 md:text-[2.9rem] leading-6 tracking-tight font-bold md:leading-[3.1vw] md:tracking-normal text-center text-green-800'>
              R.E.M <br /> <span> REWAY</span> <br /> <span>E-MARKETPLACE</span>
            </h1>
            <p className='text-center  text-gray-800  mt-5'>
              B2B Marketplace for Electronic Waste and more! <br className='hidden md:block' /> Where Sellers meets Recyclers.
            </p>
            <div className='flex gap-4 md:gap-0 justify-center my-12'>
              <Link
                to='/recyclers'  
                className='text-white bg-green-700  rounded-3xl md:text-xl py-1 px-4 text-sm md:px-8 block md:inline-block md:mx-2 cursor-pointer hover:cursor-pointer'>
                RECYCLERS
              </Link>

              <Link
              to='/sellers'  
              className='text-white bg-green-700  rounded-3xl md:text-xl py-1 px-4 text-sm md:px-8 block md:inline-block md:mx-2 cursor-pointer hover:cursor-pointer'>
              SELLERS
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default MarketPlace;
