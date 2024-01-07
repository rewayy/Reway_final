import React from 'react'
import { sync, youtube,dots } from '../assets'
import '../components/Card/FCards.css';



export const Thumbnail = () => {
  return (
    <div className='w-full h-[550px]  py-10 -mb-10 md:mb-0 lg:mt-4 relative '>
        <div className='max-w-[1606px] m-auto  h-full flex  flex-col  items-center justify-between' >

        {/* sync icon at top */}
        <div className='absolute -top-[14px] lg:-top-[34px] w-full flex justify-center items-center'>
    <img className='sync' src={sync} sizes={60} alt="" />
</div>

<div className='flex flex-col md:flex-row justify-center relative p-4 py-8 sm:py-4 h-full  gap-4 md:gap-16 items-center'>

    <div className='md:flex px-4 md:p-3  text-center md:ml-[-90px]'>
        <h1 className='text-black leading-20 md:text-5xl text-center'>ONE STEP, <br className='hidden md:block' /> ONE CHOICE <br className='hidden md:block' /> TO MEND <br /> THE PLANET!</h1>
    </div>

    {/* YouTube video here */}
    <div className="relative h-[250px] sm:w-full md:w-[50%] lg:w-[40vw]">
        <div className='relative z-10 mt-4 sm:h-[22vw] md:h-[22vw] lg:h-[20vw] '>
            <iframe
                width="100%"
                height="100%"
                
                src="https://www.youtube.com/embed/9vELvnN-9sU?si=V1gN3XNL6lqaLrYJ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>

        <div className="relative lg:bottom-[205px] lg:left-[-35px] lg:h-[250px] lg:w-[400px]  bg-[#59F3A4] p-4 z-1 hidden sm:block md:block"></div>

        <div className='relative lg:block lg:bottom-[895px]  lg:right-[-255px]  hidden sm:hidden md:hidden'>
            <img src={dots} alt='dots' className='transform  sm:scale-50' />
        </div>
    </div>

</div>


        </div>
    </div>
  )
}
