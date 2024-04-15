import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "./Data";
import "./Mobile.css";

import { HiArrowSmallUp } from "react-icons/hi2";
const CustomDot = ({ onClick, active }) => (
    <button
      className={`custom-dot ${active ? 'active' : ''}`}
      onClick={onClick}
    />
  );
  
const BoxCarousel = () => {
  // Define separate states for each box
  const [hoveredIndex1, setHoveredIndex1] = useState(null);
  const [hoveredIndex2, setHoveredIndex2] = useState(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Perform search operation here
    console.log("Searching for:", searchTerm);
  };

  const handleClear = () => {
    setSearchTerm("");
  };
  return (
    <>
    <Carousel
      swipeable={true}
      draggable={false}
      showDots
      customDot={<CustomDot />}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      arrows={false}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="transform 500ms ease-in-out"
      transitionDuration={400}
      
    >
      {data.map((item, i) => (
        <div className="flex-col flex  py-8 space-y-4" key={i}>
          <div
            className=" border border-[#D9D9D9] pl-5 pr-2 pt-[14px] h-[98px] rounded-[10px]  md:w-[477px] lg:w-[370px] 2xl:w-[477px] hover:bg-[#F9F9F9] cursor-pointer transition-all duration-300 ease-in-out"
            onMouseEnter={() => setHoveredIndex1(i)}
            onMouseLeave={() => setHoveredIndex1(null)}
          >
            <div className=" mx-auto mb-8">
              <h2 className="text-[#0E0E0E] fontNunito text-[18px] font-bold">
                {item.heading}
              </h2>
              <div className="flex justify-between">
              <p className="mt-[4px] text-[#8C8C8C] text-[18px] font-normal">
                {item.paragraph}
              </p>
              {hoveredIndex1 === i && (
                <div className=" text-black bg-white rounded-[11px] transition-all duration-300  ease-in-out w-[39px] h-[39px] flex justify-center items-center   cursor-pointer" style={{boxShadow: "0px 0px 10.5px 0px #0000000A"
            }}>
                  <HiArrowSmallUp  size={24} />
                </div>
              )}
              </div>
            </div>
          </div>
          {data[i + 1] && (
            <div
              className=" border border-[#D9D9D9] pl-5 pr-2 pt-[14px] h-[98px] rounded-[10px]  md:w-[477px] lg:w-[370px]
              2xl:w-[477px] hover:bg-[#F9F9F9]  cursor-pointer transition-all duration-300 ease-in-out"
              onMouseEnter={() => setHoveredIndex2(i)}
              onMouseLeave={() => setHoveredIndex2(null)}
            >
              <div className=" mx-auto mb-8">
                <h2 className="text-[#0E0E0E] fontNunito text-[18px] font-bold">
                  {data[i + 1].heading}
                </h2>
                <div className="flex justify-between">
                <p className="mt-[4px] text-[#8C8C8C] text-[18px] font-normal">
                  {data[i + 1].paragraph}
                </p>
                {hoveredIndex2 === i && (
                  <div className=" text-black bg-white rounded-[11px] transition-all duration-300  ease-in-out w-[39px] h-[39px] flex justify-center items-center  cursor-pointer" style={{boxShadow: "0px 0px 10.5px 0px #0000000A"
                  }}>
                    <HiArrowSmallUp  size={24} />
                  </div>
                )}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </Carousel>
{/* search  */}

<div className="relative w-full mt-6">
      <div className={`flex items-center justify-center space-x-2 absolute inset-y-0 right-0 pr-4 ${searchTerm ? 'pointer-events-none' : ''}`}>
     
        <button
          onClick={handleSearch}
          className={`w-[36px] h-[36px] flex justify-center items-center rounded-[8px] ${searchTerm ? 'bg-[#003F52] ' : 'bg-[#E5E5E5]'} text-white  ${searchTerm ? 'pointer-events-auto' : 'pointer-events-none'}`}
          disabled={!searchTerm}
        >
           <HiArrowSmallUp  size={24} />
        </button>
       
      </div>
      <input
        type="text"
        placeholder="Geben sie hier ihre Nachricht ein...."
        value={searchTerm}
        onChange={handleInputChange}
        className="border  px-4 w-full rounded-[10px] h-[54px] fontNunito font-normal text-[17px] "
      />
    </div>
    </>
  );
};

export default BoxCarousel;
