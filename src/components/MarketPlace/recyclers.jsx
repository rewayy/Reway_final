import React from 'react';

const Recyclers = () => {
    return (

        <div className=' h-[700px] w-[500px] mx-auto px-4 py-6 rounded-md'>
      <div className='py-[30px]'>
        <h1 className="text-green-800 text-center">RECYCLER INFORMATION</h1>
      </div>

      <form>
        <div>
          <h2 className="text-green-800">Name</h2>
          <div className='flex space-x-4'>
            <input className="bg-gray-200 p-2 rounded w-1/2" placeholder='First' />
            <input className="bg-gray-200 p-2 rounded w-1/2" placeholder='Last' />
          </div>
        </div>

        <div>
          <h2 className="text-green-800">Company Name</h2>
          <input className="bg-gray-200 p-2 rounded w-full" />
        </div>

        <div>
          <h2 className="text-green-800">Address</h2>
          <input className="bg-gray-200 p-2 rounded w-full" placeholder='Street address' />
        </div>

        <div className='flex space-x-4'>
          <div>
            <h2 className="text-green-800">City</h2>
            <input className="bg-gray-200 p-2 rounded w-[225px] " />
          </div>
          <div>
            <h2 className="text-green-800">Region</h2>
            <input className="bg-gray-200 p-2 rounded w-[225px]" type='text' />
          </div>
        </div>

        <div className='flex space-x-4'>
          <div>
            <h2 className="text-green-800">Zip code</h2>
            <input className="bg-gray-200 p-2 rounded w-[225px]" />
          </div>
          <div>
            <h2 className="text-green-800">Country</h2>
            <input className="bg-gray-200 p-2 rounded w-[225px]" type='text' />
          </div>
        </div>

        <div className='flex space-x-4'>
          <div>
            <h2 className="text-green-800">Contact Number</h2>
            <input className="bg-gray-200 p-2 rounded w-[225px]" />
          </div>
          <div>
            <h2 className="text-green-800">E-Mail</h2>
            <input className="bg-gray-200 p-2 rounded w-[225px]" type='text' />
          </div>
        </div>

        <div>
          <h2 className="text-green-800">Gst Number</h2>
          <input className="bg-gray-200 p-2 rounded w-full " type='text' />
        </div>

        <div>
          <h2 className="text-green-800">Product Details</h2>
          <div className='border-dotted h-[25px]'></div>
        </div>

        <div>
          <h2 className="text-green-800">Upload PDF</h2>
          <label className="flex flex-col items-center bg-gray-200 p-2 rounded w-full border-dotted border-black">
            <FiFile className="text-4xl mb-2" /> {/* File icon */}
            <span>Choose a file</span>
            <input type="file" className="hidden" />
          </label>
        </div>
      </form>
    </div>

    );
};

export default Recyclers ;


