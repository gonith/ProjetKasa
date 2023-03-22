import React from "react";
import "./_footer.scss";
import logo from "../../assets/img/KasaBlanc.png";

const Footer = () => {
  return (
    <footer className="lowpage">
      <img src={logo} alt="Logo Kasa" className="logoblanc" />
      <h3>© 2020 Kasa. All rights reserved</h3>
    </footer>
  );
};

export default Footer;
