import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { user, usser } from "../assets";
import "slick-carousel/slick/slick-theme.css";

export const Testimonial = () => {
  const sliderRef = useRef(null);

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
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {dots.map((dot, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${dot.props.className}`}
            style={{
              backgroundColor: dot.props.className.includes("slick-active")
                ? "white"
                : "green",
              padding: "4px",
              cursor: "pointer",
              outline: "none", // Keep the outline for accessibility
            }}
            onClick={() => sliderRef.current.slickGoTo(index)}
          ></button>
        ))}
      </div>
    ),
  };

  const data = [
    {
      name: "Raghav",
      img: { user },
      review:
        "Very smooth experience, I just uploaded the details about my office's electronic waste and got multiple deals within 2 days",
    },
    {
      name: "Dinesh",
      img: { user },
      review:
        "We were planning to release a tender for selling our bulk e waste but with Reway the selling experience was even better.",
    },
    {
      name: "Sakshi",
      img: { user },
      review:
        "For more than a month we were inquiring multiple recyclers for a price quote but with Reway we got connected with multiple recyclers within a single working day.",
    },
    {
      name: "Mahima ",
      img: "",
      review:
        "Team Reway was extremely helpful, they guided us through the whole process of E-Waste selling and proper disposal with an authorised recycler. ",
    },
  ];

  return (
    <div id="testimonials" className="bg-green-700 min-h-[650px]">
      <div className="md:flex flex-col justify-center items-center">
        <h1 className="mx-auto text-center text-2xl md:text-4xl py-8">TESTIMONIALS</h1>
        <p className="md:w-1/2 text-center text-sm md:tracking-wider md:text-lg font-light px-6 text-white md:px-6">
          At Reway, we're your eco-friendly choice for e-waste recycling—seamless, sustainable, and making a positive impact on the environment!
        </p>
      </div>
      <div className="px-12 py-12">
        <Slider ref={sliderRef} {...settings}>
          {data.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white max-w-sm w-full  overflow-hidden shadow-md drop-shadow-xl sm:mx h-[300px] flex-shrink-0 rounded p-3 my-8 "
            >
              <div className="h-[125px]  m-2  ">
                <p className="font-normal tracking-tight text-sm sm:text-lg italic px-2">{testimonial.review}</p>
              </div>

              <div className="flex min-w-[150px] gap-1 h-[125px] ">
                <div className="relative w-1/2 flex items-center justify-center">
                  <div className="absolute -bottom-4 md:bottom-0  left-0 text-left  md:pl-2">
                    <p className="font-bold text-md  md:text-xl min-h-[50px] text-sm md:text-md  mr-1">{testimonial.name}</p>
                  </div>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                  <div className="relative border bg-green-50 rounded-full w-[100px] h-[100px]">
                    <img
                      src={usser}
                      alt={`Testimonial ${index}`}
                      className="absolute rounded-full w-full h-full object-cover"
                      style={{ objectFit: "contain" }}
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


 