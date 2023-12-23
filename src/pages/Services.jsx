import React from 'react'
import onlinemarket from '../assets/onlinemarket.png'
import ServicesList from './ServiceList'

const Services = () => {
  return (
    <div id='blogs' className='w-full h-screen min-w-[375px] md:mb-[15vh]  '>
        <div className='max-w-[1183px] lg:m-auto mx-2 py-6 md:mx-4   mb-8  rounded-md text-black  h-full flex items-center justify-center'>
            <div className='w-full h-full flex flex-col  items-center '>

                {/* Heading div */}
                <div className='w-full py-4 flex flex-col  items-center my-2 gap-4 '>
                    <span className='text-black opacity-80 font-semibold text-2xl font-mont '> What we offer </span>
                    <h1 className='text-black text-5xl font-mont '> Our Services </h1>
                    <p className='text-sm tracking-wider '>Our <span className='text-blue-800  tracking-wider'> experienced</span > and 
                    <span className='text-blue-600  tracking-wider'> dedicated </span>team provide these services with a smile</p>
                </div>

                    <div >
                        <div className=' w-full h-full grid  gap-8 p-4 grid-cols-2 '>
                        {ServicesList.map(({id,heading,logo,description})=>(
                            <div className=' text-start  flex  gap-2 justify-center  drop-shadow-sm  rounded-md bg-slate-200 hover:bg-slate-300/60 shadow-lg'>
                                <div className=' w-1/5 text-center flex flex-row items-center justify-center'>
                                    {logo } 
                                </div>
                                <div className=' w-2/3 flex justify-center font-semibold text-lg  items-center'>
                                    <div className='p-2'>
                                            <h2>{heading} </h2>
                                            <p className='text-sm font-normal tracking-wide leading-5 opacity-90 py-1'>{description} </p>
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