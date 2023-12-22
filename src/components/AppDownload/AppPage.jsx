import {googlebadge} from "../../assets";
import {rewayphonelogo} from "../../assets";
import React from 'react';
import { useSpring, animated } from 'react-spring';
import './AppPage.css';

const AppPage = () => {
  const gradientProps = useSpring({
    from: { background: 'conic-gradient(#3cd4ba, #26d701, #57e86b)' },
    to: { background: 'conic-gradient(90deg, #26d701, #00ab08, #4ded30, #ff8a00)' },
    config: { duration: 10, loop: true },
  });

  return (
    <div className="download-app-page">
      <div className="circle-container ">
      <div className="hidden md:block">
  <div className="circle-background"></div>
</div>
        </div>
          <div className="text-left mx-[150px] top-0">
         <h2 className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
  Download The <span className="text-green-500"> Reway</span> 
  <br/> App, Now!
</h2>
         <p className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl font-thin py-4 sm:py-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-xl">
  Experience convenience at your fingertips! Elevate your shopping journey with the Reway app—download now for seamless browsing, exclusive deals, and a personalized shopping experience that fits your lifestyle.
</p>

          <div className="flex" >
          <div className="max-w-[200px] ">
          <h1 className="text-green-500 font-bold">Reway</h1>
          <p className="font-bold text-sm">for recyclers</p>
          <p className="font-thin text-black py-6">Find more E-waste pickups!
Grow your recycling business, recycle the e-waste.</p>
<a href="https://reway.com" >
  <img className="max-h-[50px]" src={googlebadge} alt="Google Badge" />
</a>

          </div>
          <div className="max-w-[200px] mx-11">
            <h1 className="text-green-500 font-bold">
              Reway
            </h1>
            <p className="font-bold text-sm">for consumers</p>
            <p className="text-black font-thin py-6"> Transform E-waste, sell to trusted recyclers.
Track impact, earn rewards.</p>
<a href="https://reway.com" >
  <img className="max-h-[50px] my-5" src={googlebadge} alt="Google Badge" />
</a>

          </div>
          </div>
          </div>
          <div className="app-logo py-6">
            <img src={rewayphonelogo} alt="App Logo" />
          </div>
      </div>

  );
};

export default AppPage;
