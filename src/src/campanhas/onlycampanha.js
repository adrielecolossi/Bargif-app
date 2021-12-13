import React from "react";
import { useLocation } from "react-router-dom";
import "../galeria/onlynoticia.css";
import HeaderOne from "../header/header.js";

function OnlyCampanha(props) {
  const location = useLocation();

  return (
    <>
    <HeaderOne></HeaderOne>
    <div className="pag-1">
      <p className="meet"> {location.state.campanha.title} </p>
      <p> {location.state.campanha.text} </p>
      <img
        alt={location.state.campanha.title}
        src={location.state.campanha.img}
        width="250vw"
      />
    </div>
    </>
  );
}

export default OnlyCampanha;
