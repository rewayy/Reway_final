import React, { useState } from 'react'
import { MdCloudUpload } from "react-icons/md";
import { Link, Navigate } from 'react-router-dom';

const RecyclerForm = () => {
  const [quotationPage, setQuotationPage] = useState('');
  const [registeredNumber, setRegisteredNumber] = useState('');
  const [quotedValue, setQuotedValue] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function handleNewRecycler(ev) {
    ev.preventDefault();
    console.log(e.target.value)
    
    try {
      alert('New Recycler added successfully');
      setRedirect(true);
    } catch (e) {
      alert('Recycler not added');
    }
  }

  if (redirect) {
    return <Navigate to={'/recyclers'} />
  }


  return (
    <div  className='w-full h-full  min-w-[375px] md:mb-[15vh] mb-6 relative'>
    <div className='max-w-[1183px] lg:m-auto mx-2  md:mx-4  rounded-md text-black  h-full flex  justify-center'>
             
            <div className='bg-green-300  bg-opacity-60 shadow-md border border-green-300 w-2/3 h-[80vh] flex  flex-col  justify-center rounded-md md:mx-20'>
              <h1 className='text-[#008037] text-center'>Recycler form</h1>

              <form action="#" onSubmit={handleNewRecycler} className='flex flex-col justify-center items-center gap-6 my-8 mx-20'>
                <div className='flex flex-col w-full'>
                    <label className='text-xs p-1 text-green-700'  >Quotation Page</label>
                    <input type="text" id="quotationPage" 
                    value={quotationPage}
                    onChange={ev=> setQuotationPage(ev.target.value)}
                    placeholder='Quotation page'
                      className='w-full shadow-md hover:shadow-lg text-start h-10  rounded-md text-xs md:text-sm px-4' />
                </div>

                <div className='flex flex-col w-full'>
                    <label  className='text-xs p-1 text-green-700' >Registered Number</label>
                    <input type="text" id="registeredNumber" 
                    placeholder='Registered number' 
                    value={registeredNumber}
                    onChange={ev=> setRegisteredNumber(ev.target.value)}
                    className='w-full shadow-md hover:shadow-lg text-start h-10  rounded-md text-xs md:text-sm px-4' />
                </div>

                  <div className='w-full flex flex-col'>
                    <label  className='text-xs p-1 text-green-700' >Total Price Quote Value (Rs.)</label>
                    <input type="text" 
                    id="priceQuoteValue" placeholder='Total price quote value (Rs.)' 
                    value={quotedValue}
                    onChange={ev=> setQuotedValue(ev.target.value)}
                    className='w-full shadow-md hover:shadow-lg text-start h-10  rounded-md text-xs md:text-sm px-4' />
                  </div>

                  <div className='w-full flex flex-col'>
                    <label  className='text-xs p-1 text-green-700' >Total Price Quote Value (Rs.)</label>
                    <input type="text" 
                    id="priceQuoteValue" placeholder='Total price quote value (Rs.)' 
                    value={quotedValue}
                    onChange={ev=> setQuotedValue(ev.target.value)}
                    className='w-full shadow-md hover:shadow-lg text-start h-10  rounded-md text-xs md:text-sm px-4' />
                  </div>

                  {/* UPLOAD PDF */}
                    <div className='w-full flex text-white bg-green-400 mt-4  hover:bg-green-500 py-2 rounded-md shadow-md justify-center gap-0 text-sm  flex-col items-center'>
                      <label className='mt-1 flex  justify-center items-center gap-2 text-sm'>
                      <input type="file" className='text-xs hidden' name="pdf" id="pdf" />
                        <MdCloudUpload size={40} className='cursor-pointer' />
                        Upload Quotation PDF
                      </label>
                    </div>

                    <button className='bg-blue-500 text-white  px-8 hover:bg-blue-600 py-1 rounded-full'>Submit</button>
              </form>
      
            </div>
              
    </div>
</div>
  )
}

export default RecyclerForm