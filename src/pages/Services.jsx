import React from 'react'
import ServicesList from './ServiceList'
import { consumerProcess, recyclerProcess } from '../assets'
import { Footer } from './../components/Footer';
import { RouterFooter } from '../components/RouterFooter';

const Services = () => {
  return (
    <div  className='w-full h-screen min-w-[375px] m-auto md:mb-[15vh] mb-6 relative -z-40 '>
        <div className='max-w-[1383px]  lg:m-auto mx-2 py-6 md:mx-4 relative  mb-8  rounded-md text-black  h-full flex items-center justify-center'>
            <div className='w-full h-full flex flex-col  items-center '>

                {/* Heading div */}
                <div className='w-full sm:py-2 md:py-4  flex flex-col justify-center items-center md:my-2 sm:my-1 md:-mt-10 mb-6 sm:mb-4 md:mb-0 gap-3 md:gap-4 '>
                    <span className='text-black opacity-65 font-semibold text-lg sm:text-xl md:text-2xl font-mont '> What we offer </span>
                    <h1 className=' md:text-5xl text-3xl  sm:text-4xl font-mont opacity-90 md:opacity-100 text-green-600 '> Our Services </h1>
                    <p className='text-sm tracking-wider opacity-90  text-center '>Our <span className='text-blue-800  tracking-wider'> experienced</span > and 
                    <span className='text-blue-600  tracking-wider'> dedicated </span>team provide these services with a smile</p>
                </div>

                    <div  className='cursor-pointer'>
                        <div className=' w-full h-full grid gap-4  md:gap-8 p-4 grid-co1s-1  cursor-pointer overflow-hidden md:grid-cols-2 '>
                        {ServicesList.map(({id,heading, logo, description})=>(
                            <div className=' md:text-start text-center  md:flex  gap-2 justify-center border border-green-200 shadow-sm  md:border-none  rounded-md bg-green-200 bg-opacity-45  md:shadow-md'>
                                <div className='  md:w-1/ text-center flex flex-row items-center justify-center'>
                                <img src={logo} alt={heading} className='md:w-full  w-[60vw] h-[22vh] md:h-[16vh]   m-2 ' />
                                    
                                </div>
                                <div className='w-full  md:w-2/3 flex justify-center font-semibold text-lg  items-center'>
                                    <div className=' p-3  md:p-2  '>
                                            <h2 className='opacity-90 text-green-800'>{heading} </h2>
                                            <p className='text-sm px-1 md:px-0 font-normal md:tracking-wide leading-5 opacity-95 py-1'>{description} </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div> 

                    <div className='  border-green-500 w-full h-full'>
                            
                            <div className='mt-20 w-full '>
                                <h1 className='text-green-600 text-center '>Recycler's Process</h1>
                                <img src={recyclerProcess} alt="recyclerProcess.svg" />
                            </div>
                            <div className=' w-full'>
                                <h1 className='text-green-600 text-center '>Consumer's Process</h1>
                                <img src={consumerProcess} alt="consumerProcess.svg" />
                            </div>

                            <div className='w-full mt-20  '>
                                <RouterFooter/>
                            </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Services