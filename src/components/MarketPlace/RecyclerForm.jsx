import React from 'react'
import { MdCloudUpload } from "react-icons/md";
import { Link } from 'react-router-dom';

const RecyclerForm = () => {
  return (
    <div  className='w-full h-full  min-w-[375px] md:mb-[15vh] mb-6 relative'>
    <div className='max-w-[1183px] lg:m-auto mx-2  md:mx-4  rounded-md text-black  h-full flex  justify-center'>
             
            <div className='bg-green-300  bg-opacity-60 shadow-md border border-green-300 w-2/3 h-[80vh] flex  flex-col  justify-center rounded-md md:mx-20'>
              <h1 className='text-[#008037] text-center'>Recycler form</h1>
              <form action="#" className='flex flex-col justify-center items-center gap-6 my-8 mx-20'>
                <div className='flex flex-col w-full'>
                    <label className='text-xs p-1 text-green-700' >Quotation Page</label>
                    <input type="text" id="quotationPage" placeholder='Quotation page' className='w-full shadow-md hover:shadow-lg text-start h-10  rounded-md text-xs md:text-sm px-4' />
                </div>

                <div className='flex flex-col w-full'>
                    <label  className='text-xs p-1 text-green-700' >Registered Number</label>
                    <input type="text" id="registeredNumber" placeholder='Registered number' className='w-full shadow-md hover:shadow-lg text-start h-10  rounded-md text-xs md:text-sm px-4' />
                </div>

                  <div className='w-full flex flex-col'>
                    <label  className='text-xs p-1 text-green-700' >Total Price Quote Value (Rs.)</label>
                    <input type="text" id="priceQuoteValue" placeholder='Total price quote value (Rs.)' className='w-full shadow-md hover:shadow-lg text-start h-10  rounded-md text-xs md:text-sm px-4' />
                  </div>

                  <div className='w-full flex flex-col'>
                    <label  className='text-xs p-1 text-green-700' >Total Price Quote Value (Rs.)</label>
                    <input type="text" id="priceQuoteValue" placeholder='Total price quote value (Rs.)' className='w-full shadow-md hover:shadow-lg text-start h-10  rounded-md text-xs md:text-sm px-4' />
                  </div>

                    <div className='w-full flex text-white bg-green-400 mt-4  hover:bg-green-500 py-2 rounded-md shadow-md justify-center gap-0 text-sm  flex-col items-center'>
                      <p className='mt-1 text-sm'>Upload Quotation PDF</p>
                        <MdCloudUpload size={40} className='cursor-pointer' />
                    </div>
              </form>
      
            </div>
              
    </div>
</div>
  )
}

export default RecyclerForm