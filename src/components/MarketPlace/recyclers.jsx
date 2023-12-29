import React from 'react';
import { useRecycler } from './RecyclerContext'; 
import {IoAdd} from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { MdAttachMoney } from "react-icons/md";

const Recyclers = () => {
    const { recyclers } = useRecycler();
    return (
        <div  className='w-full h-full  min-w-[375px] md:mb-[15vh] mb-6 relative'>
            <div className='max-w-[1393px] lg:m-auto mx-2  md:mx-4 flex-col rounded-md text-black h-screen flex   text-center'>
                    <p className='text-xl text-green-700 font-semibold my-2 '>Recycler page</p>
                    <div className='flex flex-col justify-center items-center  gap-4 text-center rounded-md py-6   bg-green-200 px-4 m-auto w-[70vw] my-4 '>
                       
                     
                            {/* table heading */}
                                <div className='w-full flex flex-col gap-1'>
                                    <div className='w-full grid grid-cols-5 items-center relative h-10  bg-green-600 bg-opacity-80 text-white rounded-md '>
                                        <div className=' text-md px-1 border-r-2 '>Company Name</div>
                                        <div className=' text-md px-1  border-r-2 '>Product Details</div>
                                        <div className=' text-md px-1  border-r-2 '>Product Image</div>
                                        <div className=' text-md px-1 border-r-2  '>Company Address</div>
                                        <div className=' text-md px-1 '>Purchase</div>
                                    </div>
                                    {/* Fetched data div */}
                                    <div className='bg-white grid grid-cols-5 text-center items-center justify-center rounded-md w-full '>
                                        <div className='text-sm border-slate-300 overflow-hidden text-slate-500 p-2 border-r-2'>RECYCLER COMPANY 1</div>
                                        <div className='text-sm border-slate-300 overflow-hidden text-slate-500 p-2 border-r-2'>Product_details.pdf</div>
                                        <div className='text-sm border-slate-300  text-slate-500  p-2 border-r-2'> recycler.jpg</div>
                                        <div className='text-sm border-slate-300 overflow-hidden text-slate-500  p-2 border-r-2'>22 Patel Nagar,New Delhi,11008</div>
                                        <div className='text-sm flex  justify-center items-center  p-2 border-r-2 text-slate-500'>
                                            <Link to={'/recycler-form'} 
                                            className='bg-blue-600 flex  justify-center items-center hover:bg-blue-700  text-center text-white rounded-md py-2 mx-8 w-full'>
                                                Buy
                                                <MdAttachMoney size={24}/>
                                            </Link>
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
