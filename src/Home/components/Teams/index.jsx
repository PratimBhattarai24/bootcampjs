import React from "react";

const data = [
  {
    link: ".#",
    description:
      "I am currently working as senior developer in IT Company based on Nepal. I have been programming as developer since past 7years and I am as much as enthuistic to teach coding as much as coding itself",
    name: "Rakesh Shrestha",
  },
  {
    link: ".#",
    description:
      "I am currently working as senior developer in IT Company based on Nepal. I have been programming as developer since past 7years and I am as much as enthuistic to teach coding as much as coding itself",
    name: "Asish Rana Magar",
  },
  {
    link: ".#",
    description:
      "I am currently working as senior developer in IT Company based on Nepal. I have been programming as developer since past 7years and I am as much as enthuistic to teach coding as much as coding itself",
    name: "Pratim Bhattarai",
  },
  {
    link: ".#",
    description:
      "I am currently working as senior developer in IT Company based on Nepal. I have been programming as developer since past 7years and I am as much as enthuistic to teach coding as much as coding itself",
    name: "Sandesh Pokhrel",
  },
];

const TeamsCard = () => {
  return (
    <div className="container">
      <div className="text-5xl text-center font-bold pt-14">
        <h1>Teams</h1>
      </div>
      <div className="max-w-4xl flex mx-auto my-32 lg:my-0">
        <div className="flex flex-wrap  ">
          {data.map(({ link, description, name }) => (
            <div className="  flex rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 mt-14 lg:mx-0">
              <div className="p-4 md:p-12 text-center lg:text-left">
                <h1 className="text-xl text-semibold">{name}</h1>
                <p className="text-lg">{description}</p>
                <div className="pt-12 pb-8">
                  <button className="bg-green-700 hover:bg-green-900 text-blue font-bold py-2 px-4 rounded-full">
                    Get In Touch
                  </button>
                </div>
                <div className="mt-6 pb-16 lg:pb-0  mx-auto flex flex-wrap items-center justify-between">
                  <a href=".#">
                    <svg
                      height="32"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="32"
                      data-view-component="true"
                      class="octicon octicon-mark-github v-align-middle"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                  </a>
                  <a href={link}>
                    <img src="./instagram.svg" width={32} height={32}></img>
                  </a>
                  <a href={link}>
                    <img src="./linkedin.svg" width={32} height={32}></img>
                  </a>
                </div>
              </div>
              <div className=" ">
                <img
                  src="https://source.unsplash.com/MP0IUfwrn0A"
                  className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
                  alt=""
                  width={300}
                  height={250}
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsCard;
