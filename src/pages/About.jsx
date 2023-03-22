import React from "react";
import Header from "../components/Header/Header";
import LandscapeAbout from "../components/Landscape-About/LandscapeAbout";
import Valeurs from "../components/Valeurs/Valeurs";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <LandscapeAbout />
      <Valeurs />
      <Footer />
    </div>
  );
};

export default About;
