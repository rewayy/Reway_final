import React from 'react'
import { logo } from '../../assets/index.js'
import HeroContent from './HeroContent.jsx'
import Navbar from '../Navbar.jsx'



export const HeroPage = () => {
return (
    <div id="hero" className='w-full h-full relative z-4   ' >
        
        <div className='w-full h-[80px] absolute top-0 left-0 z-10  '>
            <Navbar />
        </div>
        

        {/* Header-content component */}
        <div className='w-full h-full  '>
            <HeroContent />
        </div>

           


    </div>
)}
