import React from "react";

const TeamsCard = () => {
  return (
    <div>
      <div className="max-w-4xl flex py-14   mx-auto my-32 lg:my-0">
        <div className="flex">
          <div className=" lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
            <div className="p-4 md:p-12 text-center lg:text-left">
              <h1 className="text-lg text-semibold">Rakesh Shrestha</h1>
              <div className="pt-12 pb-8">
                <button className="bg-green-700 hover:bg-green-900 text-blue font-bold py-2 px-4 rounded-full">
                  Get In Touch
                </button>
              </div>
              <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                <a href="#">facbook</a>
                <a href="#">facbook</a>
                <a href="#">facbook</a>
                <a href="#">facbook</a>
                <a href="#">facbook</a>
              </div>
            </div>
          </div>
          <div className=" lg:w-2/5">
            <img
              src="https://source.unsplash.com/MP0IUfwrn0A"
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            ></img>
          </div>
        </div>{" "}
        <div className="flex">
          <div className="lg:w-3/5 h-auto rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
            <div className="p-4 md:p-12 text-center lg:text-left">
              <div className="pt-12 pb-8">
                <button className="bg-green-700 hover:bg-green-900 text-blue font-bold py-2 px-4 rounded-full">
                  Get In Touch
                </button>
              </div>
              <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                <a href="#">facbook</a>
                <a href="#">facbook</a>
                <a href="#">facbook</a>
                <a href="#">facbook</a>
                <a href="#">facbook</a>
              </div>
            </div>
          </div>
          <div className=" lg:w-2/5">
            <img
              src="https://source.unsplash.com/MP0IUfwrn0A"
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            ></img>
          </div>
        </div>
        {/* <div>
          <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
            <div className="p-4 md:p-12 text-center lg:text-left">
              <div className="pt-12 pb-8">
                <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                  Get In Touch
                </button>
              </div>
              <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                <a href="#">facbook</a>
                <a href="#">facbook</a>
                <a href="#">facbook</a>
                <a href="#">facbook</a>
                <a href="#">facbook</a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <img
              src="https://source.unsplash.com/MP0IUfwrn0A"
              class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            ></img>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TeamsCard;
