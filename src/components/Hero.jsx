import React from "react";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <main
      className="flex lg:mt-20 flex-col lg:flex-row
     items-center justify-between min-h-[calc(90vh-6rem)]  "
    >
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl ml-[5%] z-10 mt-[90%]
       md:mt-[65%] lg:mt-0"
      >
        <div
          className="relative w-[95%] sm:w-48 h-10
         bg-gradient-to-t from-[#656565] to-[#e99b63]
          shadow-[0_0_15px_rgba(225,225,225,0.4)] rounded-full z-10"
        >
          <div
            className="absolute inset-[3px] bg-black
           rounded-full flex items-center justify-center
            gap-1 z-10"
          >
            <i class="fa-regular fa-gem"></i>
            <p>INTRODUCTION</p>
          </div>
        </div>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        font-semibold tracking-wider my-8 "
        >
          EMAIL FOR <br />
          DEVELOPERS
        </h1>
        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] ">
          the best way to reach humans instead of spam folders, deliver
          transactional and marketing at scale.
        </p>
        <div className="flex gap-4 mt-16">
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] "
            href="#"
          >
            Documentation <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3
             px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold 
             tracking-wider transition-all duration-300
              hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white "
            href="#"
          >
            GetStarted <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <Spline
        className="absolute lg:top-0 top-[-20%] bottom-0
        lg:left-[25%] sm:left-[-2%] h-full "
        scene="https://prod.spline.design/KLwX5EkbtR-dszlr/scene.splinecode"
      />
    </main>
  );
};

export default Hero;
