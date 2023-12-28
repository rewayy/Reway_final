import React, { useState } from 'react';
import { FiFile } from 'react-icons/fi';

const Sellers = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    city: '',
    region: '',
    zipCode: '',
    country: '',
    contactNumber: '',
    email: '',
    gstNumber: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='h-[700px] w-[500px] mx-auto px-4 py-6 rounded-md'>
      <div className='py-[30px]'>
        <h1 className="text-green-800 text-center">RECYCLER INFORMATION</h1>
      </div>

      <form>
        <div>
          <h2 className="text-green-800">Name</h2>
          <div className='flex space-x-4'>
            <input
              className="bg-gray-200 p-2 rounded w-1/2"
              placeholder='First'
              name='firstName'
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              className="bg-gray-200 p-2 rounded w-1/2"
              placeholder='Last'
              name='lastName'
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <h2 className="text-green-800">Company Name</h2>
          <input
            className="bg-gray-200 p-2 rounded w-full"
            name='companyName'
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <h2 className="text-green-800">Address</h2>
          <input
            className="bg-gray-200 p-2 rounded w-full"
            placeholder='Street address'
            name='address'
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className='flex space-x-4'>
          <div>
            <h2 className="text-green-800">City</h2>
            <input
              className="bg-gray-200 p-2 rounded w-[225px] "
              name='city'
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <h2 className="text-green-800">Region</h2>
            <input
              className="bg-gray-200 p-2 rounded w-[225px]"
              type='text'
              name='region'
              value={formData.region}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='flex space-x-4'>
          <div>
            <h2 className="text-green-800">Zip code</h2>
            <input
              className="bg-gray-200 p-2 rounded w-[225px]"
              name='zipCode'
              value={formData.zipCode}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <h2 className="text-green-800">Country</h2>
            <input
              className="bg-gray-200 p-2 rounded w-[225px]"
              type='text'
              name='country'
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='flex space-x-4'>
          <div>
            <h2 className="text-green-800">Contact Number</h2>
            <input
              className="bg-gray-200 p-2 rounded w-[225px]"
              name='contactNumber'
              value={formData.contactNumber}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <h2 className="text-green-800">E-Mail</h2>
            <input
              className="bg-gray-200 p-2 rounded w-[225px]"
              type='text'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <h2 className="text-green-800">Gst Number</h2>
          <input
            className="bg-gray-200 p-2 rounded w-full "
            type='text'
            name='gstNumber'
            value={formData.gstNumber}
            onChange={handleInputChange}
          />
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

export default Sellers;
