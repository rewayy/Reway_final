import React from 'react'
import { logo } from '../assets'


export const Footer = () => {
    return (
        <div>
            <div className='bg-green-700 h-[180px] flex text-white py-7 justify-center px-[40px] '>
                <div className='w-1/4'>
                <div className='flex'>
                <img src={logo} alt="logo" />
                    <h1 className='text-white'>REWAY</h1>
                </div>
                </div>
                <div className='w-1/4'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blogs</li>
                    </ul>
                </div>
                <div className='w-1/4'>
                    <ul>
                        <li> Testimonials</li>
                        <li>Our Journey</li>
                        <li>Sustainable goals</li>
                        <li class="inline-block bg-white text-green-700 font-medium rounded-s p-2">E-marketplace</li>

                    </ul>
                </div>
                <div className='w-1/4 text-left px-[20px]'>
                    <p className='text-2xl font-medium'>Download the <span className='text-green-500 font-bold'>Reway</span> App,Now!</p>

                </div>

            </div>
            <div className=' h-[40px] bg-slate-200'>
                <p className='text-center text-gray-600 py-[5px] font-thin'>Copyright © 2023  Reway - All Rights Reserved.</p>
            </div>
        </div>
    )
}