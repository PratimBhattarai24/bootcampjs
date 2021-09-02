import React from "react";

const Partnership = () => {
  return (
    <div>
      <div className="container ">
        <div>
          <h1 className="text-center text-black text-4xl my-20">
            Patnership Program
          </h1>
        </div>
        {/* <!-- Create By Joker Banny --> */}
        <div className="flex justify-around ">
          <div class=" flex items-center justify-center ">
            <div class="max-w-md bg-white rounded-xl px-20 pt-10 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div class="p-4 mt-3 flex justify-center">
                <img class="rounded-xl" src="./codavatar.png" alt="Dog" />
              </div>
              <div class="flex justify-center p-6">
                <div class="flex items-center space-x-4 text-2xl ">
                  <h1>
                    You will get to hire the merit eligible students for job
                    internship. We wont charge you any cost
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class=" flex items-center justify-center ">
            <div class="max-w-md  px-20 pt-10 bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div class="p-4 mt-3 flex justify-center">
                <img class="rounded-xl" src="./codavatar.png" alt="Dog" />
              </div>
              <div class="flex justify-center p-6">
                <div class="flex items-center space-x-4 text-2xl ">
                  <h1>
                    You can give your own works within a time from for you can
                    promotee yourself /bussiness or blogs
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
