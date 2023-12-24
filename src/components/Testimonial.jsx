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
    {
      breakpoint:1200,
      settings:{
        slidesToShow:2,
        slidesToScroll:1,
      }
    }
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
    review: "i am dasjdsajidf ijbsdfbjkdsadf sdadsfj fvad adsfkh dfi hdfavd dfava",
  },
  {
    name: 'dhiman',
    img: '',
    review: "i am glad i wasb iausyf ujd fahhb ds a adna oaefief sdfjk fav df jk a  ds  d s fg irgi ihduidsg ifiuhsgdfi "
  }
];

export const Testimonial = () => {
  return (
<<<<<<< HEAD
    <div id="testimonials" className='bg-green-700 min-h-[650px]' >
      <div className=" flex flex-col justify-center items-center">
          <h1 className='mx-auto md:text-4xl text-center py-6 md:py-8'>TESTIMONIALS</h1>
          <p className='sm:w-1/2 text-center text-white text-sm md:text-lg  opacity-90  px-6 '>
            At Reway, we're your eco-friendly choice for e-waste recycling—seamless, sustainable, and making a positive impact on the environment!
          </p>
      </div>

      <div className='px-12 md:py-12'>
=======
    <div id="testimonials" className='bg-green-700 min-h-[650px]'>
      <h1 className='mx-auto text-center py-8'>TESTIMONIALS</h1>
      <p className='mx-auto text-center text-white text-2xl px-4'>
        At Reway, we're your eco-friendly choice for e-waste recycling—seamless, sustainable, and making a positive impact on the environment!
      </p>
      <div className='px-12 py-12'>
>>>>>>> a41c95c01dbd1dbc1626580bc02f844290e1edf2
      <Slider {...settings}>
      {data.map((testimonial, index) => (
        <div key={index} className='bg-white max-w-sm w-full  overflow-hidden shadow-md drop-shadow-xl mx-4 h-[300px] flex-shrink-0 rounded p-3  md:p-6 my-8'>
          <div className='h-[125px]  m-2  '>
            <p className='font-normal tracking-tight   text-sm sm:text-lg italic px-2'>{testimonial.review}</p>
          </div>

          <div className='flex  min-w-[150px] gap-1 h-[125px] '>
            <div className='relative w-1/2 flex items-center justify-center'>
              <div className='absolute -bottom-4 md:bottom-0  left-0 text-left  md:pl-2'>
                <p className='font-bold text-md  md:text-xl min-h-[50px] text-sm md:text-md  mr-1'>{testimonial.name}</p>
              </div>
            </div>
            <div className='w-1/2 flex  items-center justify-center'>
              <div className='relative border border-black bg-green-50 rounded-full  w-[100px] h-[100px]'>
                <img
                  src={testimonial.img}
                  alt={`Testimonial ${index}`}
                  className='absolute rounded-full   w-full h-full object-cover'
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
