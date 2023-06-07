import React from "react";
import "./_landscape.scss";
import { imglandscape } from "../../../public/IMG.png";

const Landscape = () => {
  return (
    <div className="landscape">
      <img src={imglandscape} alt="Terre-inconnue" className="imgland" />
      <div className="textland">
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
};

export default Landscape;
