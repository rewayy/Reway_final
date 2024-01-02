import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import { MdCloudUpload } from 'react-icons/md';
import { Link, Navigate } from 'react-router-dom';
import { useRecycler } from './RecyclerContext';

const RecyclerForm = () => {
  const { addRecycler } = useRecycler();
  const [quotationPage, setQuotationPage] = useState('');
  const [quotationPdf, setQuotationPdf] = useState('');
  const [registeredNumber, setRegisteredNumber] = useState('');
  const [quotedValue, setQuotedValue] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [formError, setFormError] = useState('');
  const [pdfUploaded, setPdfUploaded] = useState(false);
  const [pageUploaded, setPageUploaded] = useState(false);

  async function handleNewRecycler(ev) {
    ev.preventDefault();

    if (!registeredNumber || !quotedValue || !quotationPage || !quotationPdf) {
      setFormError('Please fill in all the required fields.');
      return;
    }

    try {
      alert('Bid added successfully');
      setRedirect(true);
    } catch (e) {
      alert('Bid not added');
    }
  }

  const handlePageUpload = (ev) => {
    setQuotationPage(ev.target.value);
    setPageUploaded(true);
    setFormError('');
  };

  const handlePdfUpload = (ev) => {
    setQuotationPdf(ev.target.value);
    setPdfUploaded(true);
    setFormError('');
  };

  if (redirect) {
    return <Navigate to={'/recyclers'} />;
  }

  return (
    <div className='w-full h-full min-w-[375px] md:mb-[15vh] mb-6 relative'>
      <div className='max-w-[1183px] lg:m-auto mx-2 md:mx-4 rounded-md text-black h-full flex justify-center'>
        <div className='bg-green-300 bg-opacity-60 shadow-md border border-green-300 w-2/3 h-full flex flex-col justify-center rounded-md md:mx-20'>
          <h1 className='text-[#008037] text-center mt-2'>Recycler form</h1>
          <form
            action='#'
            onSubmit={handleNewRecycler}
            className='flex flex-col justify-center items-center gap-4 my-8 mx-20'
          >
            <div className='flex flex-col w-full'>
              <label className='text-xs p-1 text-green-700'>Registered Number</label>
              <input
                type='text'
                id='registeredNumber'
                placeholder='Registered number'
                value={registeredNumber}
                onChange={(ev) => setRegisteredNumber(ev.target.value)}
                className='w-full shadow-md hover:shadow-lg text-start h-10  rounded-md text-xs md:text-sm px-4'
              />
            </div>
            <div className='w-full flex flex-col'>
              <label className='text-xs p-1 text-green-700'>Total Price Quote Value (Rs.)</label>
              <input
                type='text'
                id='priceQuoteValue'
                placeholder='Total price quote value (Rs.)'
                value={quotedValue}
                onChange={(ev) => setQuotedValue(ev.target.value)}
                className='w-full shadow-md hover:shadow-lg text-start h-10  rounded-md text-xs md:text-sm px-4'
              />
            </div>

            {/* Recycler Quotation page */}
            <div className='w-full flex text-white bg-green-500 mt-4  hover:bg-green-600 py-2 rounded-md shadow-md justify-center gap-0 text-sm  flex-col items-center'>
              <label className='mt-1 flex  justify-center items-center gap-2 text-sm'>
                <input
                  type='file'
                  id='quotationPage'
                  value={quotationPage}
                  onChange={handlePageUpload}
                  className='text-xs hidden'
                />
                {pageUploaded ? (
                  <>
                    <FaCheck size={25} className='mr-2 text-white' />
                    Authorisation Certificate Uploaded
                  </>
                ) : (
                  <>
                    <MdCloudUpload size={40} className='cursor-pointer' />
                    Upload Authorisation Certificate
                  </>
                )}
              </label>
            </div>

              {/* UPLOAD PDF */}
            <div className='w-full flex text-white bg-green-500 mt-4  hover:bg-green-600 py-2 rounded-md shadow-md justify-center gap-0 text-sm  flex-col items-center'>
              <label className='mt-1 flex  justify-center items-center gap-2 text-sm'>
                <input
                  type='file'
                  id='quotationPdf'
                  value={quotationPdf}
                  onChange={handlePdfUpload}
                  className='text-xs hidden'
                />
                {pdfUploaded ? (
                  <>
                    <FaCheck size={25} className=' mr-2 text-white ' />
                    Quotation PDF Uploaded
                  </>
                ) : (
                  <>
                    <MdCloudUpload size={40} className='cursor-pointer'  />
                    Upload Quotation PDF
                  </>
                )}
              </label>
            </div>
          {/* to show form error if there is */}
            {formError && <p className='text-red-500'>{formError}</p>}

            {/* Submit -btn */}
            <button className='bg-blue-600 text-white mt-4  px-8 hover:bg-blue-700 py-1 rounded-full'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecyclerForm;

