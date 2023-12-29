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
                    <div className='flex flex-col justify-center items-center  gap-4 text-center rounded-md py-2 md:py-6   bg-green-200 px-1 md:px-4 m-auto md:w-[70vw] my-4 '>
                       
                     
                            {/* table heading */}
                                <table className='w-full flex flex-col gap-1'>
                                    <thead>
                                        <tr className=' grid grid-cols-3  lg:grid-cols-6 items-center  bg-green-600 bg-opacity-80 text-white rounded-md '>
                                            <th className=' text-xs md:text-[20px] p-1 md:p-4 border-r-2 leading-3 md:leading-0 font-normal '>Company Name</th>
                                            <th className=' text-xs hidden lg:block  md:text-[20px] p-1 md:p-4  font-normal truncate leading-3 border-r-2 md:leading-0 '>Product Details</th>
                                            <th className=' text-xs md:text-[20px] p-1 md:p-4  border-r-2 leading-3 md:leading-0 font-normal '>Product Image</th>
                                            <th className=' text-xs hidden lg:block md:text-[20px] p-1 md:p-4 border-r-2 leading-3  font-normal md:leading-0'>Company Address</th>
                                            <th className=' text-xs hidden lg:block md:text-[20px] p-1 md:p-4 border-r-2 leading-3  font-normal md:leading-0'>Status</th>
                                            <th className=' text-xs md:text-[20px] p-1 font-normal '>Purchase</th>
                                        </tr>
                                    </thead>
                                    {/* Fetched data div */}
                                    <tbody>
                                        <tr className='bg-white grid grid-cols-3 lg:grid-cols-6 text-center items-center justify-center border-2 border-blue-500 rounded-md w-full '>
                                            <td className='text-xs md:text-sm border-slate-300 overflow-hidden  text-slate-500 p-2 leading-3 border-r-2'>RECYCLER COMPANY 1</td>
                                            <td className='text-xs md:text-sm border-slate-300 overflow-hidden truncate text-slate-500 p-2 leading-3 border-r-2'>Product_details.pdf</td>
                                            <td className='hidden lg:block text-xs md:text-sm border-slate-300  text-slate-500  p-2 border-r-2  leading-3'> recycler.jpg</td>
                                            <td className=' hidden lg:block text-xs md:text-sm border-slate-300  overflow-hidden text-slate-500 leading-3 p-2 border-r-2'>22 Patel Nagar,New Delhi,11008</td>
                                            <td className='hidden lg:flex justify-center items-center border-slate-300 border-r-2 p-2 '>
                                                <button className=' text-xs md:text-sm   bg-green-500 uppercase  text-white mx-12 rounded-md hover:bg-green-600 p-2  leading-3'> Available</button>
                                            </td>
                                            <td className='text-xs md:text-sm flex  justify-center items-center  p-2 border-r-2 text-slate-500'>
                                                <Link to={'/recycler-form'} 
                                                className='bg-blue-600 flex  justify-center items-center hover:bg-blue-700  text-center text-white rounded-md py-1 md:py-2 px-1 mx-2 md:mx-10 w-full'>
                                                    Buy
                                                    <MdAttachMoney className='hidden lg:block' size={24}/>
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table> 
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
