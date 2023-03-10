import React from "react";
import Navigation from "../Navigation/Navigation";
import "./_header.scss";

const Header = () => {
  return (
    <h1 className="header">
      <img src="./kasa.png" alt="logo Kasa" className="logo" />
      <Navigation />
    </h1>
  );
};

export default Header;
