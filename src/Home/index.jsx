import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import AdvancedFeature from "./components/AdvancedFeature";
import Opportunity from "./components/Oppurtunity";
import Partnership from "./components/Partnership";
import style from "./home.module.scss";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <HeroSection />
        <FeatureSection />
        <AdvancedFeature />
        <Opportunity />
        <Partnership />
      </div>
    </div>
  );
};

export default Home;
