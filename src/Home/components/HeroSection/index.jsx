import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-blue py-20">
      <div className="container pb-16">
        <div>
          <div class="relative flex   justify-center text-center pt-8 ">
            <div className="h-full sm:pt-10 pt-0 flex flex-col items-center justify-center">
              <div>
                <h1 className="transition-opacity px-5  font-semibold sm:sm-leading leading-normal lg:text-4xl md:text-3xl text-xl text-white md:max-w-3xl sm:pt-0 pt-8 ">
                  Welcome to Bootcamp for Coding
                </h1>
                <h1 className="text-white p-7 text-2xl ">
                  Rocket your enthusisam to learn Coding. Start Today... Be a
                  good frontent developer in 3-months. Yes you can do it
                </h1>
              </div>
            </div>

            <div>
              <img
                src="./heroimage.svg"
                alt="student and computer"
                height={800}
                width={900}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
