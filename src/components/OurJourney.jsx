import React from 'react'
import { wasteImage } from '../assets'

export const OurJourney = () => {
  
  return (
    <div  id='about' className='w-full h-full md:pb-20  md:pt-10  '>
        <div className='max-w-[1206px] m-auto  h-full flex flex-col items-center justify-between' >

            <div className='w-full h-full md:grid grid-cols-2  md:mb-12 mb-10   text-center'>
                {/* col-1 */}
                <div className='md:w-full m-8 md:m-0 '>
                    <img src={wasteImage}  alt="" />
                </div>
                {/* col-2 */}
                <div className=' flex flex-col justify-center  md:-mt-20  rounded-lg items-center'>
                    <div className='flex flex-col items-center  '>
                       <h1 className='text-black'>OUR JOURNEY,<br /> OUR INSPIRATION</h1>
                        <div className='md:w-[22vw] w-[60vw] rounded-full border mt-4 text-center border-green-300'></div>

                    </div>
                    <p className=' mx-2 md:mx-0 px-12 md:px-10 md:w-[510px] tracking-wide md:mt-4 md:leading-7 pt-4 md:py-4 md:pt-0 text-sm md:text-lg font-light '>
                        In a nation burdened by the mounting E-Waste crisis, a group of young and 
                        innovative tech visionaries embarked on a mission to revolutionise the eWaste landscape.
                    </p>
                    <p className=' mx-2 md:mx-0 px-12 md:px-10 md:w-[510px] tracking-wide md:mt-4 md:leading-7 pt-4 md:py-4 md:pt-0 text-sm md:text-lg font-light '>
                        With Reway we are bridging the gap between E-Waste Sellers including MNCs, Corporates, Startups and the E-Waste Recyclers.
                    </p>
                    <p className=' mx-2 md:mx-0 px-12 md:px-10 md:w-[510px] tracking-wide md:mt-4 md:leading-7 pt-4 md:py-4 md:pt-0 text-sm md:text-lg font-light '>
                        Come join us in this journey and let's recycle for India!
                    </p>
                <div>
            </div>
        </div>
    </div>

                {/* hidden on mobile screen */}
                <div className='hidden md:block'>
    <h1 className='md:flex gap-2 text-black mb-2 mt-12'>
        <span className='capitalize'>The </span>
        <div className='flex flex-col'>
            <p><span className='capitalize'>question was,</span></p>
            <span className='border-2 mt-1 border-green-300 w-full'></span>&nbsp;
        </div>
        <span className='capitalize'>how?</span>
    </h1>
</div>


                {/* visible on mobile */}
                <div className='md:hidden w-full my-6 px-12  text-center'>
                    <h1 className='text-black'>The question was, How?</h1>
                    <div className='md:w-[22vw] w-[60vw] rounded-full border-1 mt-4 text-center border-green-300'/>
                </div>


            <div className='md:flex flex-col md:w-full w-[80vw] h-full  gap-8 mb-12' >


                {/* Row-1 */}
                <div
                className='w-full h-full md:flex gap-8 border-4 border-green-500 shadow-xl '>
                    {/* leaf-Logo-div */}
                    <div className='md:w-40 flex justify-center items-center  '>
                        <div className='md:flex  justify-center px-8 py-4  items-center md:border-r-2 outline-offset-8 border-green-500 '>
                        <svg width="99" height="97" viewBox="0 0 99 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.375 14.2521H0C0 40.869 19.3939 62.4509 43.3125 62.4509V93.4358C43.3125 95.3294 44.7047 96.8786 46.4062 96.8786H52.5938C54.2953 96.8786 55.6875 95.3294 55.6875 93.4358V62.4509C55.6875 35.8339 36.2936 14.2521 12.375 14.2521ZM86.625 0.480957C70.3441 0.480957 56.1902 10.4865 48.7846 25.2689C54.1406 31.7672 58.1045 39.664 60.1928 48.4216C81.9844 45.9041 99 25.4195 99 0.480957H86.625Z" fill="#52D479"/>
                        </svg>
                        </div>
                    </div>
                    <div className='w-full px-8 text-center md:text-left md:px-16 md:py-4 pb-4  text-xs md:text-sm leading-4 md:leading-6'>
                    Being undergrads we knew nothing about the E-Waste Landscape of the country.Our odyssey journey with an intensive,
                    year long field investigation, which wefondly refer to as our 'Expedition in E-Waste Management.'
                    </div>
                </div>
                {/* Row-2 */}
                <div className='w-full h-full md:flex gap-8 border-4 border-green-600 shadow-xl '>
                    {/* leaf-Logo-div */}
                    <div className='md:w-40 flex justify-center items-center  '>
                        <div className='md:flex  justify-center px-8 py-4  items-center md:border-r-2 outline-offset-8 border-green-500 '>
                        <svg width="99" height="97" viewBox="0 0 99 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.375 13.8426H0C0 40.4596 19.3939 62.0415 43.3125 62.0415V93.0264C43.3125 94.9199 44.7047 96.4692 46.4062 96.4692H52.5938C54.2953 96.4692 55.6875 94.9199 55.6875 93.0264V62.0415C55.6875 35.4245 36.2936 13.8426 12.375 13.8426ZM86.625 0.0715332C70.3441 0.0715332 56.1902 10.0771 48.7846 24.8595C54.1406 31.3577 58.1045 39.2546 60.1928 48.0122C81.9844 45.4946 99 25.0101 99 0.0715332H86.625Z" fill="#49AF68"/>
                        </svg>

                        </div>
                    </div>
                    <div className='w-full px-8 text-center md:text-left md:px-16 md:py-4 pb-4  text-xs md:text-sm leading-4 md:leading-6'>
                    Our primary educational hub was the heart of Landfills and Waste Generating entities. 
                    With an unwavering commitment to digitising and bridging the divides amongstakeholders, our dedicated team refined their expertise and transformed their dreams into reality.
                    </div>
                </div>
                {/* Row-3 */}
                <div className='w-full h-full md:flex gap-8 border-4 border-green-700 shadow-xl '>
                    {/* leaf-Logo-div */}
                    <div className='md:w-40 flex justify-center items-center  '>
                        <div className='md:flex  justify-center px-8 py-4  items-center md:border-r-2 outline-offset-8 border-green-500 '>
                        <svg width="99" height="98" viewBox="0 0 99 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.375 14.3895H0C0 41.0064 19.3939 62.5883 43.3125 62.5883V93.5733C43.3125 95.4668 44.7047 97.0161 46.4062 97.0161H52.5938C54.2953 97.0161 55.6875 95.4668 55.6875 93.5733V62.5883C55.6875 35.9714 36.2936 14.3895 12.375 14.3895ZM86.625 0.618408C70.3441 0.618408 56.1902 10.624 48.7846 25.4064C54.1406 31.9046 58.1045 39.8015 60.1928 48.559C81.9844 46.0415 99 25.557 99 0.618408H86.625Z" fill="#04A55A"/>
                        </svg>
                        </div>
                    </div>
                    <div className='w-full px-8 text-center md:text-left md:px-16 md:py-4 pb-4  text-xs md:text-sm leading-4 md:leading-6'>
                    With this mission to catalyse the journey of building a circular economy “Reway” was born.
                    </div>
                </div>

            

            </div>
        </div>
</div>
  )
}
