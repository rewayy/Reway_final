import React from 'react';
import { Link } from 'react-router-dom';
import { green_earth } from '../assets';

const MarketPlace = () => {
  return (
    <div id='marketPlace' className='w-full h-full min-w-[375px]  mb-6 relative'>
      <div className='max-w-[1183px] md:m-auto mx-3 bg-[#b4de8e] hover:drop-shadow-lg my-6 rounded-md text-black h-[70vh] flex items-center justify-center'>
        <div className='flex w-full justify-center'>
          <div className='justify-center  scale-15 hidden md:block'>
            <img className='' src={green_earth} alt='earth' />
          </div>

          <div className='w-1/2 justify-center my-auto'>
            <h1 className='text-5xl md:text-5xl sm:text-4xl text-center text-green-800'>
              Reway B2B Marketplace for E-Waste: Where Sellers meet Recyclers! 
            </h1>
            <div className='flex justify-center my-12'>
              <Link
                to='/recyclers'  
                className='text-white bg-green-700 mx-auto rounded-3xl text-xl py-1 px-9 block md:inline-block md:mx-2 cursor-pointer hover:cursor-pointer'>
                RECYCLERS
              </Link>

<Link
to='/sellers'  
className='text-white bg-green-700 mx-auto rounded-3xl text-xl py-1 px-9 block md:inline-block md:mx-2 cursor-pointer hover:cursor-pointer'>
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
