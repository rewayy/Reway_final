import React from 'react'
import ServicesList from './ServiceList'

const Services = () => {
  return (
    <div id='blogs' className='w-full h-screen min-w-[375px] md:mb-[15vh] mb-6 relative -z-40 '>
        <div className='max-w-[1183px] lg:m-auto mx-2 py-6 md:mx-4   mb-8  rounded-md text-black  h-full flex items-center justify-center'>
            <div className='w-full h-full flex flex-col  items-center '>

                {/* Heading div */}
                <div className='w-full sm:py-2 md:py-4  flex flex-col justify-center items-center md:my-2 sm:my-1 mb-6 sm:mb-4 md:mb-0 gap-3 md:gap-4 '>
                    <span className='text-black opacity-80 font-semibold text-lg sm:text-xl md:text-2xl font-mont '> What we offer </span>
                    <h1 className='text-black md:text-5xl text-3xl  sm:text-4xl font-mont opacity-90 md:opacity-100 '> Our Services </h1>
                    <p className='text-sm tracking-wider  text-center '>Our <span className='text-blue-800  tracking-wider'> experienced</span > and 
                    <span className='text-blue-600  tracking-wider'> dedicated </span>team provide these services with a smile</p>
                </div>

                    <div >
                        <div className=' w-full h-full grid gap-4  md:gap-8 p-4 grid-co1s-1 overflow-hidden md:grid-cols-2 '>
                        {ServicesList.map(({id,heading,logo,description})=>(
                            <div className=' md:text-start text-center  md:flex  gap-2 justify-center  drop-shadow-sm  rounded-md bg-slate-200 hover:bg-slate-300/60 shadow-lg'>
                                <div className='hidden  w-1/5 text-center md:flex flex-row items-center justify-center'>
                                    {logo } 
                                </div>
                                <div className='w-full  md:w-2/3 flex justify-center font-semibold text-lg  items-center'>
                                    <div className=' p-3  md:p-2  '>
                                            <h2 className='opacity-90'>{heading} </h2>
                                            <p className='text-sm px-1 md:px-0 font-normal md:tracking-wide leading-5 opacity-90 py-1'>{description} </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div> 
            </div>
        </div>
    </div>
  )
}

export default Services