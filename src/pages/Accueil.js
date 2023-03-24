import React from "react";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Landscape from "../components/Landscape/Landscape";

const Accueil = () => {
  return (
    <div>
      <Header />
      <Landscape />
      <Container />
      <Footer />
    </div>
  );
};

export default Accueil;
