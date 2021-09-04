import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import AdvancedFeature from "./components/AdvancedFeature";
import Opportunity from "./components/Oppurtunity";
import Partnership from "./components/Partnership";
import Works from "./components/Works"
import TeamsCard from "./components/Teams";
import StudentTestimonial from "./components/StudentTestimonial";
import FooterCom from "./components/FooterCom";
import Footer from "./components/Footer";
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
        <Works/>
        {/* <Footer/> */}
        <TeamsCard/>
        <StudentTestimonial/>
        <FooterCom/>
      </div>
    </div>
  );
};

export default Home;
