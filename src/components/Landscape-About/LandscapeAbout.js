import React from "react";
import "./_landscapeabout.scss";
import imgabout from "../../images/LandscapeAbout.png";

const LandscapeAbout = () => {
  return (
    <div className="landscape-about">
      <img src={imgabout} alt="Terre-inconnue" className="imgland-about" />
    </div>
  );
};

export default LandscapeAbout;
