import React, { Component } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const data = [
  {
    name: 'Kundan',
    img: '',
    review: "I couldn't be happier with the experience. The process was incredibly smooth, and knowing that.",
  },
  {
    name: 'Raman',
    img: '',
    review: "From start to finish, the process was seamless, and I appreciate their commitment to sustainability.",
  },
  {
    name: 'Chaman',
    img: '',
    review: "i am dasjdsajidfijbsdfbjkdsadf sdadsfj fvad adsfkh dfi hdfavd dfava",
  },
  {
    name: 'dhiman',
    img: '',
    review: "i am glad i wasb iausyfujd fahhb ds a adna oaefief sdfjk fav df jk a  ds  d s fg irgi ihduidsg ifiuhsgdfi "
  }
];

export const Testimonial = () => {
  return (
    <div className='bg-green-700 min-h-[650px]'>
      <h1 className='mx-auto text-center py-8'>TESTIMONIALS</h1>
      <p className='mx-auto text-center text-white text-2xl px-4'>
        At Reway, we're your eco-friendly choice for e-waste recycling—seamless, sustainable, and making a positive impact on the environment!
      </p>
      <div className='px-12 py-12'>
        <Slider {...settings}>
          {data.map((testimonial, index) => (
            <div key={index} className='bg-white max-w-sm w-full mx-4 min-h-[250px] max-h-[250px]  flex-shrink-0 rounded p-6 my-8'>
              <p className='font-thin text-xl italic px-2'>{testimonial.review}</p>
              
              {/* Outside the flex-row div */}
              <div className='flex  min-w-[150px] min-h-[0px]'>
                {/* Left half for the circular image with a thin black border */}
                

                {/* Right half for the name */}
                <div className='relative w-1/2'>
  <div className='absolute bottom-0 left-0 text-left pl-4'>
    <p className='font-bold text-xl min-h-[50px]'>{testimonial.name}</p>
  </div>
</div>

                <div className='w-1/2 '>
                <div className='relative bg-green-50 rounded-full border top-3 left-14 border-black w-[100px] h-[100px]'>
  <img
    src={testimonial.img}
    alt={`Testimonial ${index}`}
    className='absolute  rounded-full w-full h-full object-cover'
  />
</div>

 
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
