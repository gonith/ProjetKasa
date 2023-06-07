import React from "react";
import "./_landscapeabout.scss";
import { landscapeabout } from "../../images/LandscapeAbout.png";

const LandscapeAbout = () => {
  return (
    <div className="landscape-about">
      <img
        src={landscapeabout}
        alt="Terre-inconnue"
        className="imgland-about"
      />
    </div>
  );
};

export default LandscapeAbout;
