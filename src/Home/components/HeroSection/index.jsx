import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="container">
        <div class="relative flex justify-center text-center">
          <div className="h-screen sm:pt-10 pt-0 flex  flex-col justify-center items-center ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-red   2xl:text-10xl font-bold sm:sm-leading leading-normal lg:text-4xl md:text-3xl text-xl  md:max-w-3xl sm:pt-0  ">
              Develop.
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue   2xl:text-10xl font-bold sm:sm-leading leading-normal lg:text-4xl md:text-3xl text-xl md:max-w-3xl sm:pt-0  ">
              Preview.
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-danger to-yellow  transition-opacity px-5  2xl:text-10xl font-extrabold sm:sm-leading leading-normal lg:text-4xl md:text-3xl text-xl  md:max-w-3xl sm:pt-0  ">
              Ship.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
