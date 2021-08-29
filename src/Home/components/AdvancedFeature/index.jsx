import React from "react";

const AdvancedFeature = () => {
  return (
    <div className="bg-lightblue">
      <div className="container">
        {/* advanced section */}
        <div className="text-center text-white mt-12 ">
          <h3 className="text-4xl">Advanced Workshop</h3>
          <p className="text-2xl mt-3">When we are available</p>
        </div>
        <div className="grid justify-center grid-cols-3 ring-offset-green-300 mt-16">
          <div>
            <div className="flex justify-center">
              <img src="./gitlab-logo.svg" alt="gitlab logo" width={100}></img>
            </div>
            <div className="flex justify-center text-xl text-white mt-4">
              CICD Gitlab
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <img src="./cloud.png" alt="cloud img" width={100}></img>
            </div>
            <div className="flex justify-center text-xl text-white">
              Cloud Deployment
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <img src="./docker.svg" alt="docker logo" width={100}></img>
            </div>
            <div className="flex justify-center text-xl text-white">Docker</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFeature;
