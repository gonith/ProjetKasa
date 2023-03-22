import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header/Header";
import "../components/Error/_error.scss";
import Footer from "../components/Footer/Footer";

const Error = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="containerror">
          <h1 className="title">404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <NavLink to="/">
            <p className="msg-accueil">Retourner sur la page d'accueil</p>
          </NavLink>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Error;
