import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import AdvancedFeature from "./components/AdvancedFeature";
import Opportunity from "./components/Oppurtunity";
import Partnership from "./components/Partnership";
import style from "./home.module.scss";
import TeamsCard from "./components/Teams";

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
        <TeamsCard/>
      </div>
    </div>
  );
};

export default Home;
