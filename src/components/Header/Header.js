import React from "react";
import Navigation from "../Navigation/Navigation";
import "./_header.scss";
import logo from "../../assets/img/kasa.png";

const Header = () => {
  return (
    <h1 className="header">
      <img src={logo} alt="logo Kasa" className="logo" />
      <Navigation />
    </h1>
  );
};

export default Header;
