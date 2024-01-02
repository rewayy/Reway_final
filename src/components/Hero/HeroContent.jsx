import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import './heroStyles.css';
import { hero,whatsapp,call,gmail } from '../../assets';

const HeroContent = () => {
  return (
    <div className="relative">
      {/* overlay */}
      <div className='bg-[#008037] bg-gradient-to-br from-[#008037] bg-opacity-70 top-0 left-0 w-full h-screen absolute z-0 ' />

      {/* Hovering box */}
      <div className="bg-green-800 h-[300pxpx] w-16 fixed left-7 justify-end top-1/2 transform -translate-x-2/4 -translate-y-2/4 z-10 ">
  <div>
    <Link to="tel:+919315836383" className="mb-4">
      <img src={call} alt="call" className="right-0 h-9 w-[auto] my-2 ml-3" />
    </Link>
    <Link to="https://wa.me/9315836383" className="mb-4">
      {/* Replace 123456789 with the actual WhatsApp number */}
      <img src={whatsapp} alt="whatsapp" className="right-0 h-9 w-[auto] my-2 ml-3" />
    </Link>
    <Link to="mailto:reway.ewm@gmail.com" className="mb-4">
      {/* Replace example@gmail.com with the actual Gmail address */}
      <img src={gmail} alt="gmail" className="right-0 h-9 w-[auto] my-2 ml-3" />
    </Link>
  </div>
</div>



      {/* Hero-image */}
      <img
        className='w-full h-screen left-0 top-0 object-cover position-bottom '
        src={hero}
        alt='hero image'
      />

      {/* Floating div on the right side */}
      <div className="bg-white h-350px w-50px absolute top-0 -0"></div>

      {/* Headline content */}
      <div className='w-full h-full absolute -top-8 mt-4 md:mt-2 md:gap-4 gap-6 text-white  flex flex-col  justify-center items-center '>
        <div className='md:flex flex-col justify-center items-center'>
          <h1 className='text-center text-4xl md:text-7xl font-semibold md:font-extrabold tracking-tight md:tracking-normal  '>Reway</h1>
          <h3 className='text-center text-lg md:text-5xl  font-semibold opacity-95 mt-1 tracking-tighter font-mont '>Building a Circular Economy</h3>
        </div>

        {/* type-writer effect */}
        <div className='flex justify-center -mt-6 items-center px-6 opacity-85 md:opacity-90 text-center h-[12vh] mx-2  md:p-0'>
          <h1 style={{ lineHeight: '16px', margin: '0', fontWeight: 'normal', textTransform: 'capitalize' }}>
            {' '}
            <span id='typewriter'>
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
        </div >

        {/* Button */}
        <Link to={'/services'} className=' md:text-xl text-center  border font-mont border-white  px-2 md:px-0  hover:bg-white/20  w-[150px] md:w-[175px]jo h-[45px] shadow-md  py-1 rounded-full cursor-pointer' > know more</Link>
      </div>
    </div>
  );
};

export default HeroContent;
