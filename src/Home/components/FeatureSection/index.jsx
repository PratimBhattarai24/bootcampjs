import React from "react";

const FeatureSection = () => {
  return (
    <div className="">
      <div className="container">
        <div className="text-black text-center py-8">
          <h1 className="text-4xl">All Time Workshop</h1>
          <p className="text-2xl mt-6">What we teach new enrollments</p>
        </div>
        <div class="container mx-auto text-black text-xl grid grid-cols-4 gap-4 justify-center p-3 ">
          <div>
            <div className="flex justify-center">
              <a href="#">
                <img src="./html.svg" alt="html logo"></img>{" "}
              </a>
            </div>
            <div className="flex justify-center text-black">HTML</div>
          </div>
          <div>
            <div className="flex justify-center">
              <a href="#">
                <img src="./docker.svg" alt="react"></img>
              </a>
            </div>
            <div className="flex justify-center text-black">Docker</div>
          </div>
          <div>
            <div className="flex justify-center">
              <a href="#">
                <img src="./javascript.svg"></img>
              </a>
            </div>
            <div className="flex justify-center text-black">Javascript</div>
          </div>
          <div>
            <div className="flex justify-center">
              <a href="#">
                <img src="./node.svg"></img>
              </a>
            </div>
            <div className="flex justify-center text-black">Node JS</div>
          </div>
          <div>
            <div className="flex justify-center">
              <a href="">
                <img src="./bootstrap.svg"></img>
              </a>
            </div>
            <div className="flex justify-center text-black">Bootstrap</div>
          </div>
          <div>
            <div className="flex justify-center">
              <a href="./">
                <img src="./mongodb.png"></img>
              </a>
            </div>
            <div className="flex justify-center text-black">Mongodb</div>
          </div>
          <div>
            <div className="flex justify-center">
              <a href="">
                <img src="./react.svg"></img>
              </a>
            </div>
            <div className="flex justify-center text-black">React</div>
          </div>
          <div>
            <div className="flex justify-center">
              <a href="./vue.svg">
                <img src="./vue.svg"></img>
              </a>
            </div>
            <div className="flex justify-center text-black">VueJS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
