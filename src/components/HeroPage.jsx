import React from 'react'
import { logo } from '../assets'
import HeroContent from './HeroContent'
import Navbar from './Navbar'


export const HeroPage = () => {
return (
    <div id='hero' className='w-full h-full relative z-4 ' >
        
        <div className='w-full h-[80px] absolute top-0 left-0 z-10  '>
            <Navbar/>
        </div>
        

        {/* Header-content component */}
        <div className='w-full h-full  '>
            <HeroContent/>
        </div>

           


    </div>
)}
