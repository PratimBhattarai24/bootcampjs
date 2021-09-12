import React from "react";

// eslint-disable-next-line no-sparse-arrays
const data = [
  {
    logo: "./discord.svg",
    Description: "Sign up in our community. We are on discord.",
  },
  {
    logo: "./clock.svg",
    Description:
      "Attend our primary workshops on every sunday and saturday at 5:00pm to 7:00pm.",
  },
  {
    logo: "./student.png",
    Description:
      "Dont worry if you miss class you'll be facilitate with revision classes.",
  },
  ,
  {
    logo: "./score.svg",
    Description:
      "We recommend our top ranked students to better companies with proper accommodation.",
  },
];

const Works = () => {
  return (
    <div className="bg-blue">
      <div className="container mt-32 px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="   max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-medium leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-white lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">How</span>
            </span>{" "}
            our Company Works
          </h2>
          <p className="text-base text-white md:text-lg">
            We are their for you to provide best resource with proper mentorship
            to develop your prografmming skills
          </p>
        </div>
        <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
          {data.map(({ logo, Description }) => (
            <div className="max-w-md sm:mx-auto sm:text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full  sm:mx-auto sm:w-24 sm:h-24">
                <img src={`${logo}`} width={96} height={96}></img>
              </div>
              <h6 className="mb-3 leading-normal text-xl  text-white">
                {Description}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Works;
