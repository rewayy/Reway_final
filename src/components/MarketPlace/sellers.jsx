import React from 'react';
import { FiFile } from 'react-icons/fi';

const Sellers = () => {
  return (
    <div className='w-full min-w-[375px] md:mb-[15vh] mb-6 relative'>
      <div className='max-w-[1183px] lg:m-auto mx-2 md:mx-4 py-8 rounded-md text-black flex justify-center'>
        <div className='w-full md:w-[500px] mx-auto px-4 py-6 rounded-md bg-white'>
          <div className='py-3'>
            <h1 className='text-green-800 text-center text-2xl font-bold'>RECYCLER INFORMATION</h1>
          </div>

          <form>
            <div>
              <h2 className='text-green-800 font-bold text-xl'>Name</h2>
              <div className='flex space-x-4'>
                <input className='bg-gray-200 p-2 rounded w-1/2' placeholder='First' />
                <input className='bg-gray-200 p-2 rounded w-1/2' placeholder='Last' />
              </div>
            </div>

            <div>
              <h2 className='text-green-800 font-bold text-xl'>Company Name</h2>
              <input className='bg-gray-200 p-2 rounded w-full' />
            </div>

            <div>
              <h2 className='text-green-800 font-bold text-xl'>Address</h2>
              <input className='bg-gray-200 p-2 rounded w-full' placeholder='Street address' />
            </div>

            <div className='flex space-x-4'>
              <div>
                <input placeholder='City' className='bg-gray-200 p-2 my-3 rounded w-[225px]' />
              </div>
              <div>
                <input placeholder='Region' className='bg-gray-200 p-2 my-3 rounded w-[225px]' type='text' />
              </div>
            </div>

            <div className='flex space-x-4'>
              <div>
                <input placeholder='Zip code ' className='bg-gray-200 p-2 my-3 rounded w-[225px]' />
              </div>
              <div>
                <input placeholder='Country' className='bg-gray-200 my-3 p-2 rounded w-[225px]' type='text' />
              </div>
            </div>

            <div className='flex space-x-4'>
              <div>
                <h2 className='text-green-800 font-bold text-xl'>Contact Number</h2>
                <input className='bg-gray-200 p-2 rounded w-[225px]' />
              </div>
              <div>
                <h2 className='text-green-800 font-bold text-xl'>E-Mail</h2>
                <input className='bg-gray-200 p-2 rounded w-[225px]' type='text' />
              </div>
            </div>

            <div>
              <h2 className='text-green-800 font-bold text-xl'>Gst Number</h2>
              <input className='bg-gray-200 p-2 rounded w-full' type='text' />
            </div>

            <div>
              <h2 className='text-green-800 font-bold text-xl'>Product Details</h2>
              <div className='border-dotted h-[25px]'></div>
            </div>

            <div>
              <label className='flex flex-col items-center bg-gray-200 p-2 rounded w-full border-dotted border-black'>
                <FiFile className='text-4xl mb-2' /> {/* File icon */}
                <span>Upload PDF</span>
                <input type='file' className='hidden' />
              </label>
            </div>

            <div>
              <h2 className='text-green-800 text-xl font-bold text-xl'>Product Image</h2>
              <div className='border-dotted h-[25px]'></div>
            </div>

            <div>
              <label className='flex flex-col items-center bg-gray-200 p-2 rounded w-full border-dotted border-black'>
                <FiFile className='text-4xl mb-2' /> {/* File icon */}
                <span>Upload a File</span>
                <input type='file' className='hidden' />
              </label>
            </div>

            <div className='mt-4'>
              {/* Submit Button */}
              <button
                type='submit'
                className='bg-green-800 text-white p-2 w-[470px] rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
