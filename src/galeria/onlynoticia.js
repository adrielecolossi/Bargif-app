import React from "react";
import './onlynoticia.css'
import { useLocation } from 'react-router-dom'
import HeaderOne from "../header/header.js";


function OnlyNoticia(props) {
  const location = useLocation()
 
  return (
    <>
    <HeaderOne></HeaderOne>
    <div className="pag-1">
      <p className="meet"> {location.state.noticia.title} </p>
      <p className="body-not"> {location.state.noticia.body} </p>
      <img alt={location.state.noticia.title} src={location.state.noticia.img} width="250vw" />
    </div>
    </>
  );
  
}

export default OnlyNoticia;

