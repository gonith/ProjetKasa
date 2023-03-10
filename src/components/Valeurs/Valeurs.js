import React from "react";
import { datapropos } from "./data-apropos";
import "./_valeurs.scss";

const Valeurs = () => {
  return (
    <div className="containers">
      {datapropos.map((text, index) => {
        <div className="containers-valeurs-titres">
          <div className="arrow"></div>
          <h2 key={index}>{textvaleurs.title}</h2>
        </div>;
      })}
    </div>
  );
};

export default Valeurs;
