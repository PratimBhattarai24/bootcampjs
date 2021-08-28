import React from "react";
import style from "./home.module.scss";

const Home = () => {
  return (
    <div>
      <div className={style.sitebody}>
        <div className="z-30 fixed top-0 mx-auto w-full text-white ">
          <nav className="navigation w-full flex justofy-between items-center px-2 py-2 shadow-sm border-b border-gray-100">
            <div className="flex flex-grow items-center">Logo</div>
            <div className="grid grid-flow-col gap-2 items-center sm:text-sm text-xs">
              <a
                class="sm:opacity-75 hover:opacity-100 py-2 px-3 transition-opacity ease-in-out duration-150 rounded-md"
                href="/articles"
              >
                Home
              </a>
              <a
                class="sm:opacity-75 hover:opacity-100 py-2 px-3 transition-opacity ease-in-out duration-150 rounded-md"
                href="/articles"
              >
                Students
              </a>
              <a
                class="sm:opacity-75 hover:opacity-100 py-2 px-3 transition-opacity ease-in-out duration-150 rounded-md"
                href="/articles"
              >
                Instructor
              </a>
              <a
                class="sm:opacity-75 hover:opacity-100 py-2 px-3 transition-opacity ease-in-out duration-150 rounded-md"
                href="/articles"
              >
                About
              </a>
              <a
                class="px-3 py-2 lg:text-white text-text lg:bg-blue-500 lg:hover:bg-blue-600 rounded-lg transition-all ease-in-out duration-150"
                href="/login"
              >
                Join
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className={style.siteBody}>
        <div className={`pb-16 ${style.hero}`}>
          <div>
            <div class="relative flex  items-center justify-center text-center pt-8 mt-40 ">
              <div className="h-full sm:pt-10 pt-0 flex flex-col items-center justify-center">
                <div>
                  <h1 className="transition-opacity px-5 text-center font-semibold sm:sm-leading leading-normal lg:text-4xl md:text-3xl text-xl text-white md:max-w-3xl sm:pt-0 pt-8 ">
                    Welcome to Bootcamp for Coding
                  </h1>
                  <h1 className="text-white p-7 text-2xl text-center">
                    Rocket your enthusisam to learn Coding. Start Today... Be a
                    good frontent developer in 3-months. Yes you can do it
                  </h1>
                </div>
              </div>

              <div>
                <img
                  src="./heroimage.svg"
                  alt="hero image"
                  height={800}
                  width={900}
                ></img>
              </div>
            </div>
          </div>
          {/* <div className={`flex items-end justify-center w-full h-full ${style.earthBackground}`}>
            <img
              src="./earthtop.png"
              alt="earth"
              className={style.earthTop}
            ></img>
            <img
              aria-hidden="true"
              src="./landrock.webp"
              alt="asdfda"
              width={"200px"}
              className={style.rocket}
            ></img>
          </div> */}
          <div className={` ${style.rocketBox}`}>
            {/* <div className="flex justify-center text-center w-5/12 h-2/5 mt-4">
              <h1 className="">
                Rocket your enthusisam to learn Coding. Start Today... Be a good
                frontent developer in 3-months. Yes you can do it
              </h1>
            </div> */}

            <div>
              <div class="container mx-auto text-white text-xl grid grid-cols-4 gap-4 justify-center p-3 mt-8">
                <div>
                  <div className="flex justify-center">
                    <a href="#">
                      <img src="./html.svg" alt="html logo"></img>{" "}
                    </a>
                  </div>
                  <div className="flex justify-center">HTML</div>
                </div>
                <div>
                  <div className="flex justify-center">
                    <a href="#">
                      <img src="./docker.svg" alt="react"></img>
                    </a>
                  </div>
                  <div className="flex justify-center">Docker</div>
                </div>
                <div>
                  <div className="flex justify-center">
                    <a href="#">
                      <img src="./javascript.svg"></img>
                    </a>
                  </div>
                  <div className="flex justify-center">Javascript</div>
                </div>
                <div>
                  <div className="flex justify-center">
                    <a href="#">
                      <img src="./node.svg"></img>
                    </a>
                  </div>
                  <div className="flex justify-center">Node JS</div>
                </div>
                <div>
                  <div className="flex justify-center">
                    <a href="">
                      <img src="./bootstrap.svg"></img>
                    </a>
                  </div>
                  <div className="flex justify-center">Bootstrap</div>
                </div>
                <div>
                  <div className="flex justify-center">
                    <a href="./">
                      <img src="./mongodb.png"></img>
                    </a>
                  </div>
                  <div className="flex justify-center">Mongodb</div>
                </div>
                <div>
                  <div className="flex justify-center">
                    <a href="">
                      <img src="./react.svg"></img>
                    </a>
                  </div>
                  <div className="flex justify-center">React</div>
                </div>
                <div>
                  <div className="flex justify-center">
                    <a href="./vue.svg">
                      <img src="./vue.svg"></img>
                    </a>
                  </div>
                  <div className="flex justify-center">VueJS</div>
                </div>
              </div>
            </div>
            <div className="text-center text-white mt-12 ">
              <h3 className="text-3xl">Advanced Workshop</h3>
              <p className="text-lg mt-3">When we are available</p>
            </div>
            <div className="grid justify-center grid-cols-3 ring-offset-green-300">
              <div>
                <img src="./gitlab-logo.svg"></img>
                CICD Gitlab
              </div>
              <div>Cloud Deployment</div>
              <div>Docker</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
