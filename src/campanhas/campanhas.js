import "./campanhas.css";
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import OnlyCampanha from "./onlycampanha.js";
import { Link } from "react-router-dom";
import HeaderOne from "../header/header.js";

function Campanhas() {
  const campanhas = [
    {
      title: "pactopelavida",
      img: "https://drive.google.com/uc?id=1nCjeoubt6i_DkHI1U4l2Grfl-G-Lhwjj",
      link: "/pactopelavida",
      text: "Com objetivo de estimular a doação de alimentos para auxiliar as famílias mais necessitadas que enfrentam a pandemia da Covid-19, foi lançada em Rio Grande, nesta quarta-feira (31), a campanha Pacto pela Vida, a Fome não Espera. A ação envolve a Prefeitura Municipal, igrejas, órgãos militares e outras entidades civis organizadas.",
      inicio: "",
      fim: "",
    },
    {
      title: "Uma maré cheia de solidariedade",
      link: "/onlycampanha/VelejaçoSolidário",
      img: "https://drive.google.com/uc?id=1CS4BmyGjcvHEJSMhrSKOPf4JW1zsPlT8",
      text: "O Rio Grande Yacht Clube promoveu um Velejaço e RAID Solidário reunindo navegadores em prol da solidariedade. O objetivo foi angariar alimentos em prol do Banco de Alimentos do Rio Grande e reuniu, no sábado de 11 de setembro, mais de 70 participantes que realizaram um lindo espetáculo na Lagoa dos Patos com seus veleiros, lanchas e motos aquáticas .  Os navegadores e velejadores saíram juntos do Rio Grande Yacht Club (RGYC) em direção ao canal do Porto Velho, passando pelo Porto Novo, até a boia 17 retornando ao RGYC aonde foi servido a bordo de cada embarcação um delicioso Chouripão. Foram arrecadados 1.150 quilos de alimentos não perecíveis. Nós do BARG agradecemos muito a esta grande iniciativa!",
      inicio: "",
      fim: "",
    },
  ];
  return (
    <>
      <HeaderOne></HeaderOne>
      <p className="meet"> Campanhas </p>
      <div className="campanhas">
        {campanhas.map((campanha) => {
          return (
            <>
              <figure className="figure-campanhas">
                <img
                  className="image-campanhas"
                  src={campanha.img}
                  alt={campanha.title}
                />
                <Link
                  to={{
                    pathname: campanha.link,
                    state: {
                      campanha,
                    },
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <figcaption style={{ textDecoration: "none", color: "black", textAlign: "center" }}>
                    Clique para mais informações! 
                  </figcaption>
                </Link>
              </figure>
              <p className="description"> {campanha.text} </p>;
            </>
          );
        })}
      </div>
    </>
  );
}

export default Campanhas;
