import React from "react";
import greystar from "../../assets/img/GreyStar.png";
import redstar from "../../assets/img/RedStar.png";
import './_stars.scss'

function Etoiles({ rating }) {
  const etoiles = Array(5).fill(null);

  for (let i = 0; i < rating; i++) {
    etoiles[i] = <img src={redstar} alt="red star" className="insidestars" />;
  }
  for (let i = rating; i < 5; i++) {
    etoiles[i] = <img src={greystar} alt="grey star" className="insidestars"/>;
  }

  return <div className="stars-phone">{etoiles}</div>;
}

export default Etoiles;