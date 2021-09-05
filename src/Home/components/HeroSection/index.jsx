import React from "react";

const HeroSection = () => {
  return (
    <div className="">
      <div className="container ">
        <div>
          <div class="relative flex h-screen  justify-center text-center">
            <div className="h-screen sm:pt-10 pt-0 flex  flex-col justify-center items-center ">
              <span className="transition-opacity px-5  2xl:text-10xl font-bold sm:sm-leading leading-normal lg:text-4xl md:text-3xl text-xl text-primary  md:max-w-3xl sm:pt-0  ">
                Develop.
              </span>
              <br />
              <span className="transition-opacity px-5  2xl:text-10xl font-bold sm:sm-leading leading-normal lg:text-4xl md:text-3xl text-xl text-secondary md:max-w-3xl sm:pt-0  ">
                Preview.
              </span>
              <br />
              <span className="transition-opacity px-5  2xl:text-10xl font-extrabold sm:sm-leading leading-normal lg:text-4xl md:text-3xl text-xl text-danger md:max-w-3xl sm:pt-0  ">
                Ship.
              </span>
              {/* <h1 className="text-black p-14 text-xl  ">
                Rocket your enthusisam to learn Coding. Start Today... Be a good
                frontent developer in 3-months. Yes you can do it
              </h1> */}
            </div>

            {/* <div>
              <img
                className="h-screen"
                src="./heroimage.svg"
                alt="student and computer"
                height={800}
                width={900}
              ></img>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
