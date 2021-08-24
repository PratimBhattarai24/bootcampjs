import React from "react";
import style from "./home.module.scss";

const Home = () => {
  return (
    <div>
      <div className={style.body}>
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
        <div className={`pb-16 ${style.hero}`}>
          <div>
            <div class="relative flex flex-col items-center justify-center text-center pt-8 ">
              <div className="h-full sm:pt-10 pt-0 flex flex-col items-center justify-center">
                <div>
                  <h1 className="transition-opacity px-5 font-semibold sm:sm-leading leading-normal lg:text-4xl md:text-3xl text-xl text-white md:max-w-3xl sm:pt-0 pt-8 ">
                    Welcome to Bootcamp for Coding
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex items-end justify-center w-full h-full ${style.earthBackground}`}>
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
          </div>
          <div className={` ${style.rocketBox}`}>
            <div className="flex justify-center text-center w-5/12 h-2/5" >

            <h1>Rocket your enthusisam to learn Coding.
            Start Today... Be a good frontent developer in 3-months.
            Yes you can do it</h1>
            </div>
          </div>

          <div>
            <div>
            <a href="#">
              Html
            </a>
            </div>
            <div>
            <a href="#">
              CSS            </a>
            </div>
            <div>
            <a href="#">
              Javascript
            </a>
            </div>
            <div>
            <a href="#">
              Git
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
