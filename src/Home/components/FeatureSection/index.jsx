import React from "react";

const FeatureSection = () => {
  return (
    <div className="py-28">
      <div className="container">
        <div className="text-white text-center ">
          <h1 className="text-4xl">All Time Workshop</h1>
          <p className="text-2xl mt-6">What we teach new enrollments</p>
        </div>
        <div class="container mx-auto text-white text-xl grid grid-cols-4 gap-4 justify-center p-3 mt-20">
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
    </div>
  );
};

export default FeatureSection;
