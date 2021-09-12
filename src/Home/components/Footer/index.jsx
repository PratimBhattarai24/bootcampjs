import React from "react";

const Footer = () => {
  return (
    <div className="bg-lightblue">
      <div className="container p-10 flex justify-between  text-primary-content footer-center">
        <div>
          <img
            src="./bootcampIcon.png"
            alt="bootcamp icon logo"
            width={60}
            height={70}
          ></img>
          <p className="font-bold ">Bootcamp Js</p>

          <p>Providing reliable tech education</p>
          <p>Copyright © 2021 - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://discord.com/channels/740562406123634728/740567547086110774"
              target="_blank"
            >
              <img src="./discord.svg" alt="discord logo" width={50}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
