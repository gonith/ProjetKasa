import { NavLink } from "react-router-dom";
import React from "react";
import "./_cards.scss";

export default function Cards({ id, title, cover }) {
  return (
    <NavLink to={`/logement/${id}`} className="cards">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </NavLink>
  );
}
