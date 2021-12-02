import "./campanhas.css";
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";

import { Link } from "react-router-dom";

function Campanhas() {
  return (
    <>
      <p className="meet"> Campanhas </p>
      <div className="campanhas">
        <Link
          to="/pactopelavida"
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "black",
            textAlign: "center",
          }}
        >
          <figure className="figure-campanhas">
            <img
              className="image-campanhas"
              src="https://drive.google.com/uc?id=1nCjeoubt6i_DkHI1U4l2Grfl-G-Lhwjj"
              alt="Logo do PACTO"
            />
            <figcaption> Clique para ler mais! </figcaption>
          </figure>
        </Link>

        <p className="description">
          Com objetivo de estimular a doação de alimentos para auxiliar as
          famílias mais necessitadas que enfrentam a pandemia da Covid-19, foi
          lançada em Rio Grande, nesta quarta-feira (31), a campanha Pacto pela
          Vida, a Fome não Espera. A ação envolve a Prefeitura Municipal,
          igrejas, órgãos militares e outras entidades civis organizadas.
        </p>
      </div>
    </>
  );
}

export default Campanhas;
