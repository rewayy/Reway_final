import React from 'react'
import { sync, youtube } from '../assets'
import '../components/Card/FCards.css';


export const Thumbnail = () => {
  return (
    <div className='w-full h-full  py-10 -mb-8 md:mb-0 mt-2 relative '>
        <div className='max-w-[1206px] m-auto  h-full flex  flex-col  items-center justify-between' >

        {/* sync icon at top */}
        <div className=' absolute -top-[24px]  w-full  flex justify-center items-center  '>
                    <img className='sync' src={sync} sizes={60} alt="" />
                </div>

            <div className='flex flex-col md:flex-row justify-center border border-black p-4 py-8 sm:py-0 gap-4 md:gap-20 items-center'>
                <div className=' md:flex  px-4 md:p-2  '>
                    <h1 className='text-black text-center'>ONE STEP, <br className='hidden md:block' /> ONE CHOICE <br className='hidden md:block' /> TO MEND THE PLANET!</h1>
                </div>
              
              {/* Youtube-video here */}
              <div className='sm:w-[50vw] sm:h-[22vw] w-[70vw] h-[39vw] md:w-[50vw] md:h-[22vw]  '>
                <iframe
                        width="100%" height="100%" src="https://www.youtube.com/embed/C80qB409rVs?si=eMKKRS5-pM_PFemG" title="YouTube video player" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
               </iframe>
              </div>
                

            </div>

        </div>
    </div>
  )
}
