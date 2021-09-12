import React from "react";

const data = [
  {
    github_link: ".#",
    insta_link: ".#",
    linkedin_link: ".#",
    description:
      "I am currently working as senior developer in IT Company based on Nepal. I have been programming as developer since past 7years and I am as much as enthuistic to teach coding as much as coding itself",
    name: "Rakesh Shrestha",
  },
  {
    github_link: ".#",
    insta_link: ".#",
    linkedin_link: ".#",
    description:
      "I am currently working as senior developer in IT Company based on Nepal. I have been programming as developer since past 7years and I am as much as enthuistic to teach coding as much as coding itself",
    name: "Asish Rana Magar",
  },
  {
    github_link: "https://github.com/pratim2002",
    insta_link: "https://www.instagram.com/pratim_jr_bhattarai/",
    linkedin_link: "https://www.linkedin.com/in/pratim-bhattarai-6918891a7/",

    description:
      "I am currently working as senior developer in IT Company based on Nepal. I have been programming as developer since past 7years and I am as much as enthuistic to teach coding as much as coding itself",
    name: "Pratim Bhattarai",
  },
  {
    github_link: ".#",
    insta_link: ".#",
    linkedin_link: ".#",

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
          {data.map(
            ({ linkedin_link, github_link, insta_link, description, name }) => (
              <div className="  flex rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 mt-14 lg:mx-0">
                <div className="p-4 md:p-12 text-center lg:text-left">
                  <h1 className="text-xl text-semibold">{name}</h1>
                  <p className="text-lg">{description}</p>
                  <div className="pt-12 pb-8">
                    {/* <button className="bg-green-700 hover:bg-green-900 text-blue font-bold py-2 px-4 rounded-full">
                      Get In Touch
                    </button> */}
                    <div className="mt-6 pb-16 lg:pb-0  mx-auto flex flex-wrap items-center justify-between">
                      <a href={github_link} target="_blank">
                        <img
                          src="./githublogo.svg"
                          width={32}
                          height={32}
                        ></img>
                      </a>
                      <a href={insta_link} target="_blank">
                        <img src="./instagram.svg" width={32} height={32}></img>
                      </a>
                      <a href={linkedin_link} target="_blank">
                        <img src="./linkedin.svg" width={32} height={32}></img>
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" ">
                  <img
                    src="https://source.unsplash.com/MP0IUfwrn0A"
                    className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
                    alt=""
                    width={300}
                    height={300}
                  ></img>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamsCard;
