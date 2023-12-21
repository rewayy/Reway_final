import React from 'react'
import { wasteImage } from '../assets'

export const OurJourney = () => {
  return (
    <div className='w-full h-full md:pb-20  md:pt-10 border border-black'>
        <div className='max-w-[1206px] m-auto  h-full flex flex-col items-center justify-between' >

            <div className='w-full h-full md:grid grid-cols-2  md:mb-12 mb-10   text-center'>
                {/* col-1 */}
                <div className='md:w-full m-8 md:m-0 '>
                    <img src={wasteImage}  alt="" />
                </div>
                {/* col-2 */}
                <div className=' flex flex-col justify-center  items-center'>
                    <div className='border flex flex-col items-center  '>
                       <h1 className='text-black'>OUR JOURNEY,<br /> OUR INSPIRATION</h1>
                        <div className='md:w-[26vw] w-[60vw] rounded-full border-2 mt-1 text-center border-green-300'></div>

                    </div>
                    <p className=' mx-2 md:mx-0 px-12 md:px-10 md:w-[510px]  md:mt-4 md:leading-7 pt-4 md:py-4 md:pt-0 text-sm md:text-lg font-light '>
                        In a nation burdened by the mounting E-Waste crisis, a group of young and 
                        innovative tech visionaries embarked on a mission to revolutionise the eWaste landscape.
                    </p>
                <div>
            </div>
        </div>
    </div>

                {/* hidden on mobile screen */}
                <div className='hidden md:block' >
                    <h1 className='md:flex gap-2  text-black mb-2 mt-12'>The 
                        <div className='flex flex-col'>
                            <p>question was,</p>
                            <span className=' border-2 mt-1 border-green-300 w-full'></span>&nbsp;
                        </div>
                        How?
                    </h1>
                </div>

                {/* visible on mobile */}
                <div className='md:hidden w-full my-6 px-12  text-center'>
                    <h1 className='text-black'>The question was, How?</h1>
                    <div className='md:w-[26vw] w-[60vw] rounded-full border-2 mt-1 text-center border-green-300'/>
                </div>


            <div className='md:flex flex-col md:w-full w-[80vw] h-full  gap-8 mb-12' >


                {/* Row-1 */}
                <div className='w-full h-full md:flex gap-8 border-4 border-green-500 shadow-xl '>
                    {/* leaf-Logo-div */}
                    <div className='md:w-40 flex justify-center items-center  '>
                        <div className='md:flex  justify-center px-8 py-4  items-center md:border-r-2 outline-offset-8 border-green-500 '>
                            <svg className='w-16'  width="99" height="97" viewBox="0 0 99 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.375 14.2521H0C0 40.869 19.3939 62.4509 43.3125 62.4509V93.4358C43.3125 95.3294 44.7047 96.8786 46.4062 96.8786H52.5938C54.2953 96.8786 55.6875 95.3294 55.6875 93.4358V62.4509C55.6875 35.8339 36.2936 14.2521 12.375 14.2521ZM86.625 0.480957C70.3441 0.480957 56.1902 10.4865 48.7846 25.2689C54.1406 31.7672 58.1045 39.664 60.1928 48.4216C81.9844 45.9041 99 25.4195 99 0.480957H86.625Z" fill="#52D479"/>
                            </svg>
                        </div>
                    </div>
                    <div className='w-full px-8 text-center md:text-left md:px-16 md:py-4 pb-4  text-xs md:text-sm leading-4 md:leading-6'>
                    Our primary educational hub was the heart of Landfills and Waste Generating entities. 
                    With an unwavering commitment to digitising and bridging the divides amongstakeholders, our dedicated team refined their expertise and transformed their dreams into reality.
                    </div>
                </div>
                {/* Row-2 */}
                <div className='w-full h-full md:flex gap-8 border-4 border-green-500 shadow-xl '>
                    {/* leaf-Logo-div */}
                    <div className='md:w-40 flex justify-center items-center  '>
                        <div className='md:flex  justify-center px-8 py-4  items-center md:border-r-2 outline-offset-8 border-green-500 '>
                            <svg className='w-16'  width="99" height="97" viewBox="0 0 99 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.375 14.2521H0C0 40.869 19.3939 62.4509 43.3125 62.4509V93.4358C43.3125 95.3294 44.7047 96.8786 46.4062 96.8786H52.5938C54.2953 96.8786 55.6875 95.3294 55.6875 93.4358V62.4509C55.6875 35.8339 36.2936 14.2521 12.375 14.2521ZM86.625 0.480957C70.3441 0.480957 56.1902 10.4865 48.7846 25.2689C54.1406 31.7672 58.1045 39.664 60.1928 48.4216C81.9844 45.9041 99 25.4195 99 0.480957H86.625Z" fill="#52D479"/>
                            </svg>
                        </div>
                    </div>
                    <div className='w-full px-8 text-center md:text-left md:px-16 md:py-4 pb-4  text-xs md:text-sm leading-4 md:leading-6'>
                    Our primary educational hub was the heart of Landfills and Waste Generating entities. 
                    With an unwavering commitment to digitising and bridging the divides amongstakeholders, our dedicated team refined their expertise and transformed their dreams into reality.
                    </div>
                </div>
                {/* Row-3 */}
                <div className='w-full h-full md:flex gap-8 border-4 border-green-500 shadow-xl '>
                    {/* leaf-Logo-div */}
                    <div className='md:w-40 flex justify-center items-center  '>
                        <div className='md:flex  justify-center px-8 py-4  items-center md:border-r-2 outline-offset-8 border-green-500 '>
                            <svg className='w-16'  width="99" height="97" viewBox="0 0 99 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.375 14.2521H0C0 40.869 19.3939 62.4509 43.3125 62.4509V93.4358C43.3125 95.3294 44.7047 96.8786 46.4062 96.8786H52.5938C54.2953 96.8786 55.6875 95.3294 55.6875 93.4358V62.4509C55.6875 35.8339 36.2936 14.2521 12.375 14.2521ZM86.625 0.480957C70.3441 0.480957 56.1902 10.4865 48.7846 25.2689C54.1406 31.7672 58.1045 39.664 60.1928 48.4216C81.9844 45.9041 99 25.4195 99 0.480957H86.625Z" fill="#52D479"/>
                            </svg>
                        </div>
                    </div>
                    <div className='w-full px-8 text-center md:text-left md:px-16 md:py-4 pb-4  text-xs md:text-sm leading-4 md:leading-6'>
                    Our primary educational hub was the heart of Landfills and Waste Generating entities. 
                    With an unwavering commitment to digitising and bridging the divides amongstakeholders, our dedicated team refined their expertise and transformed their dreams into reality.
                    </div>
                </div>

            

            </div>
        </div>
</div>
  )
}
