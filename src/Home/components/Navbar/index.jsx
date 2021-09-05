import React from "react";

const Navbar = () => {
  return (
    <nav className=" py-2">
      <div className="container text-black  ">
        <nav className="navigation w-full flex justify-between items-center px-2 py-2 shadow-sm ">
          <div className="flex flex-grow items-center font-medium text-2xl">
            Logo
          </div>
          <div className="grid grid-flow-col gap-2 items-center sm:text-sm text-xs">
            <a
              class="sm:opacity-75 text-lg  text hover:opacity-100 py-2 px-3 transition-opacity ease-in-out duration-150 rounded-md"
              href="/articles"
            >
              Home
            </a>
            <a
              class="sm:opacity-75 text-lg   hover:opacity-100 py-2 px-3 transition-opacity ease-in-out duration-150 rounded-md"
              href="/articles"
            >
              Students
            </a>
            <a
              class="sm:opacity-75 text-lg  hover:opacity-100 py-2 px-3 transition-opacity ease-in-out duration-150 rounded-md"
              href="/articles"
            >
              Instructor
            </a>
            <a
              class="sm:opacity-75 text-lg   hover:opacity-100 py-2 px-3 transition-opacity ease-in-out duration-150 rounded-md"
              href="/articles"
            >
              About
            </a>
            <a
              class="px-3 py-2 text-lg   lg:text-black text-text lg:bg-blue-500 lg:hover:bg-blue-600 rounded-lg transition-all ease-in-out duration-150"
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
