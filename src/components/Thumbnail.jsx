import React from 'react'
import { youtube } from '../assets'


export const Thumbnail = () => {
  return (
    <div className='w-full h-full border border-black pb-8 '>
        <div className='max-w-[1206px] m-auto  h-full flex  flex-col  items-center justify-between' >

            <div className='flex justify-center  gap-20 items-center'>
                <div className='flex justify-center items-center  '>
                    <h1 className='text-black text-center'>ONE STEP, <br /> ONE CHOICE <br /> TO MEND THE PLANET!</h1>
                </div>
                <a href="#">
                <img className='cursor-pointer '  src={youtube} alt="youtubeThumbnail" />

                </a>
                

            </div>

        </div>
    </div>
  )
}
