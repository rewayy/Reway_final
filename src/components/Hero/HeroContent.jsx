import React from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import './heroStyles.css';


const HeroContent = () => {

  return (
    <div>
        {/* overlay */}
        <div className='bg-[#008037] bg-gradient-to-br from-[#008037]  bg-opacity-90 top-0 left-0 w-full h-screen absolute z-0 ' />

        {/* Hero-image */}
        <img className='w-full h-screen left-0 top-0 object-cover  position-bottom  ' 
        src="https://images.pexels.com/photos/14593478/pexels-photo-14593478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="hero-img" />

        {/* Headline content */}
        <div className=' w-full h-full  absolute -top-8 mt-4 md:mt-2 md:gap-4 gap-6 text-white  flex flex-col  justify-center items-center  ' >
            <div className='md:flex flex-col justify-center items-center'  >
                <h1 className='text-center text-4xl md:text-7xl font-semibold md:font-extrabold tracking-tight md:tracking-normal  '>Reway</h1>
                <h3 className='text-center text-lg md:text-5xl  font-semibold opacity-95 mt-1 tracking-tighter font-mont '>Building a Circular Economy</h3>
            </div>

          {/* type-writer effect */}
          <div className='flex justify-center -mt-6 items-center px-6 opacity-85 md:opacity-90 text-center h-[12vh] mx-2  md:p-0'>
                <h1 style={{  lineHeight:'16px', margin: '0', fontWeight: 'normal', textTransform:'capitalize' }}>
                  
              {' '}
              <span  id='typewriter'>
                <Typewriter
                  words ={[
                    'Get quotations from multiple recyclers on one platform!',
                    'We are committed to leading the world towards a cleaner and sustainable future. ',
                    ' We believe in the Indian philosophy of One Earth. One Family. One Future'
                  ]}
                  loop={10}
                  cursor
                  cursorStyle={<strong>|</strong>} 
                  cursorColor='yellow'
                  typeSpeed={80}
                  deleteSpeed={30}
                  delaySpeed={2000}
                />
              </span>
            </h1>

          </div>
        
          
            





            {/* Button */}
            <Link to={'/services'} className='text-xl text-center  border font-mont border-white px-2  hover:bg-white/20  w-[150px] h-[45px] shadow-md  py-1 rounded-full cursor-pointer' > know more</Link>
        </div>
    </div>
  )
}

export default HeroContent





// 
// typeSpeed={{
//   start: 80, // Initial typing speed (ease-in)
//   end: 70, // Final typing speed (ease-out)
// }}
// deleteSpeed={{
//   start: 40, // Initial deleting speed (ease-in)
//   end: 90, // Final deleting speed (ease-out)
// }}

