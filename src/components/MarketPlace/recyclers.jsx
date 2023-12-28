import React from 'react';
import { IoAdd } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdAttachMoney } from "react-icons/md";

const Recyclers = () => {
    return (
        <div  className='w-full h-full  min-w-[375px] md:mb-[15vh] mb-6 relative'>
            <div className='max-w-[1183px] lg:m-auto mx-2  md:mx-4 flex-col rounded-md text-black  h-screen flex   text-center'>
                    <p className='text-md text-green-700 font-semibold my-2 '>Recycler page</p>
                    <div className='flex flex-col gap-4 justify-center items-center text-center m-auto w-[50vw] my-4 '>
                        {/* Recycler's details */}
                        <div className='flex flex-col justify-center items-center gap-4 w-full border bg-green-200 px-4 rounded-md py-6 my-2'>
                            <p className=' text-sm p-1 text-slate-600'>Recycler's quotations are shown here..</p>
                            {/* table heading */}
                                <div className='w-full flex flex-col gap-1'>
                                    <div className='w-full grid grid-cols-4 items-center relative h-10  bg-green-600 bg-opacity-80 text-white rounded-md shadow-md'>
                                        <div className=' text-md p-1 border-r-2 '>S.No.</div>
                                        <div className=' text-md p-1  border-r-2 '>Price PDF</div>
                                        <div className=' text-sm p-1 border-r-2  '>Price (Rs.)</div>
                                        <div className=' text-sm p-1 '>Button</div>
                                    </div>
                                    {/* Fetched data div */}
                                    <div className='bg-white grid grid-cols-4 rounded-md w-full '>
                                        <div className='text-sm border-slate-300 text-slate-500 p-2 border-r-2'>1.</div>
                                        <div className='text-sm border-slate-300 text-slate-500 p-2 border-r-2'> pdf</div>
                                        <div className='text-sm border-slate-300 text-slate-500  p-2 border-r-2'>Rs. 50 k</div>
                                        <div className='text-sm flex  justify-center items-center  p-21 border-r-2 text-slate-500'>
                                            <Link to={'/recycler-form'} className='bg-blue-600 hover:bg-blue-700  text-center text-white rounded-md py-1 w-full mx-2'>Confirm</Link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
        </div>

    );
};

export default Recyclers ;

// Bid btn
{/* <button className='bg-blue-600  border-4 flex absolute right-0 top-0justify-center items-center hover:bg-blue-700 px-2 text-sm py-2  text-white rounded-md'>
    Bid
<MdAttachMoney size={24}/>
</button> */}

// Add btn
{/* <Link to={'/recycler-form'} className='bg-green-600 flex  justify-center items-center gap-2 font-mont hover:bg-green-700  px-4 py-2 rounded-full text-white text-sm'>  
<IoAdd size={25} /> 
Add Recycler
</Link> */}
