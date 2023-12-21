import React from 'react'
import { sync, youtube } from '../assets'
import '../components/Card/FCards.css';


export const Thumbnail = () => {
  return (
    <div className='w-full h-full  py-10 -mb-8 md:mb-0  relative '>
        <div className='max-w-[1206px] m-auto  h-full flex  flex-col  items-center justify-between' >

        <div className=' absolute -top-[15px]  w-full  flex justify-center items-center  '>
                    <img className='sync' src={sync} sizes={60} alt="" />
                </div>

            <div className='md:flex   gap-20 items-center'>
                <div className=' md:flex  px-4 md:p-2  '>
                    <h1 className='text-black text-center'>ONE STEP, <br className='hidden md:block' /> ONE CHOICE <br className='hidden md:block' /> TO MEND THE PLANET!</h1>
                </div>
                <a href="#">
                <img className='cursor-pointer p-6 md:p-0 ' src={youtube} alt="youtubeThumbnail" />

                </a>
                

            </div>

        </div>
    </div>
  )
}
