import React from "react";

import Button from "../Button";

const Heroic = () => {
  return (
    <div className="w-full bg-center transition-all  bg-cover h-[100vh] herobg bg-[url('https://html.themexriver.com/industo/images/main-slider/image-2.jpg')] bg-fixed text-white relative overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-l from-[#111111a2]  to-[#0b01788a]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center h-full">
        <h3 className="text-xl font-medium">
    <span className="text-[#000254] text-6xl font-bold">Y</span><span className="text-teal-400 text-6xl font-bold">f</span> Welcome You 
        </h3>

        <h1 className="text-5xl sm:text-6xl font-bold mt-2 leading-tight">
          We’re Best <span className="text-blue-700 font-serif">,</span><span className="text-teal-400">Providing</span><br />
          Best Flames.
        </h1>

        <p className="text-gray-300 mt-6 max-w-xl text-lg">
          Dunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>

        <div className="flex items-center mt-8 gap-6 flex-wrap">
         <Button href={'/contact'} text={"Explore more"} secondarycolor={"bg-white 0"} primarycolor={"bg-green-400 hover:text-blue-500 "} />
        
        </div>
      </div>
        
  <div className="absolute bottom-0 w-[200%] overflow-hidden leading-none sm:flex hidden">
  <svg
    viewBox="0 0 500 200"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    className="w-[50.2%] translate-x-5 h-[150px] wave"
  >
    <path fill="#ffffff"
      d="M0,100 C83,200 83,0 167,100 C250,200 250,0 333,100 C417,200 417,0 500,110 L500,200 L0,200 Z" />
  </svg>
  <svg
    viewBox="0 0 500 200"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    className="w-[50.2%] h-[150px] wave -ml-[1px]"
  >
    <path fill="#ffffff"
      d="M0,100 C83,200 83,0 167,100 C250,200 250,0 333,100 C417,200 417,0 500,100 L500,200 L0,200 Z" />
  </svg>
</div>


      </div>
    
  );
};

export default Heroic;
