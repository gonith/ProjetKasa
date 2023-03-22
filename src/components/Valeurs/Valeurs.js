import React from "react";
import { datavaleurs } from "./data-apropos";
import "./_valeurs.scss";
import Collapse from "../Collapse/Collapse";

const Valeurs = () => {
  console.log(datavaleurs);
  return (
    <main className="about_main">
      {datavaleurs.map((data) => {
        return (
          <div key={data.id} className="about_main_collapse">
            <Collapse title={data.title} content={data.description} />
          </div>
        );
      })}
    </main>
  );
};

export default Valeurs;
