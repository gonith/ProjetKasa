import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel/Carrousel";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InfoLogement from "../components/InfoLogement/InfoLogement";
import datas from "../data/data";
import Error from "./Error";

const Logement = () => {
  const logementsID = [];

  datas.map((logement) => {
    logementsID.push(logement.id);
  });

  const { id } = useParams();
  console.log(id);

  if (logementsID.includes(id)) {
    return (
      <div>
        <Header />
        <Carrousel />
        <InfoLogement />
        <Footer />
      </div>
    );
  } else {
    return <Error />;
  }
};

export default Logement;
