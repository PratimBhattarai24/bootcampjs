import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue py-2">
      {/* <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box flex">
        <div class="px-2 mx-2 navbar-start">
          <span class="text-lg font-bold">DaisyUI</span>
        </div>
        <div class="hidden px-2 mx-2 navbar-center lg:flex">
          <div class="flex items-stretch">
            <a href=".#" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </a>
            <a href=".#" className="btn btn-ghost btn-sm rounded-btn">
              Portfolio
            </a>
            <a href=".#" className="btn btn-ghost btn-sm rounded-btn">
              About
            </a>
            <a href=".#" className="btn btn-ghost btn-sm rounded-btn">
              Contact
            </a>
          </div>
        </div>
      </div> */}
      <div className="container text-white  ">
        <nav className="navigation w-full flex justify-between items-center px-2 py-2 shadow-sm ">
          <div className="flex flex-grow items-center font-bold text-2xl">
            Logo
          </div>
          <div className="grid grid-flow-col gap-2 items-center sm:text-sm text-xs">
            <a
              class="sm:opacity-75 text-xl font-semibold hover:opacity-100 py-2 px-3 transition-opacity ease-in-out duration-150 rounded-md"
              href="/articles"
            >
              Home
            </a>
            <a
              class="sm:opacity-75 text-xl font-semibold  hover:opacity-100 py-2 px-3 transition-opacity ease-in-out duration-150 rounded-md"
              href="/articles"
            >
              Students
            </a>
            <a
              class="sm:opacity-75 text-xl font-semibold  hover:opacity-100 py-2 px-3 transition-opacity ease-in-out duration-150 rounded-md"
              href="/articles"
            >
              Instructor
            </a>
            <a
              class="sm:opacity-75 text-xl font-semibold  hover:opacity-100 py-2 px-3 transition-opacity ease-in-out duration-150 rounded-md"
              href="/articles"
            >
              About
            </a>
            <a
              class="px-3 py-2 text-xl   lg:text-white text-text lg:bg-blue-500 lg:hover:bg-blue-600 rounded-lg transition-all ease-in-out duration-150"
              href="/login"
            >
              Join
            </a>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
