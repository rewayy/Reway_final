import React from 'react';
import { useRecycler } from './RecyclerContext'; 
import {IoAdd} from 'react-icons/io5'
import { Link } from 'react-router-dom';

const Recyclers = () => {
    const { recyclers } = useRecycler();
    return (

        <div  className='w-full h-full  min-w-[375px] md:mb-[15vh] mb-6 relative'>
            <div className='max-w-[1183px] lg:m-auto mx-2  md:mx-4 flex-col rounded-md text-black  h-screen flex   text-center'>
                    <div className='flex flex-col justify-center items-center gap-4 w-full border bg-green-200 px-4 rounded-md py-6 my-2'>
                        {recyclers.map((recycler, index) => (
                            <p
                            key={index}
                            className='w-full h-8 bg-white  border rounded-md shadow-md text-sm p-1 text-slate-500'
                            >
                            {recycler.quotationPage} - {recycler.registeredNumber} -{' '}
                            {recycler.quotedValue}
                            </p>
                        ))}
                    </div>
                    <Link to={'/recycler-form'} className='bg-green-600 flex  justify-center items-center gap-2 font-mont hover:bg-green-700  px-4 py-2 rounded-full text-white text-sm'>  <IoAdd size={25} /> Add Recycler</Link>
            </div>
        </div>
    );
};

export default Recyclers ;


