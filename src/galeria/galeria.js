import React from "react";
import { useState } from "react";
import "./galeria.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
/*
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
*/

const images4 = [
  {
    original: "./images/slidesabadosolidario1.jpg",
    thumbnail: "./images/slidesabadosolidario1.jpg",
  },
  {
    original: "./images/slidesabadosolidario2.jpg",
    thumbnail: "./images/slidesabadosolidario2.jpg",
  },
  {
    original: "./images/slidesabadosolidario3.jpg",
    thumbnail: "./images/slidesabadosolidario3.jpg",
  },
  {
    original: "./images/slidesabadosolidario4.jpg",
    thumbnail: "./images/slidesabadosolidario4.jpg",
  },
  {
    original: "./images/slidesabadosolidario5.jpg",
    thumbnail: "./images/slidesabadosolidario5.jpg",
  },
  {
    original: "./images/slidesabadosolidario6.jpg",
    thumbnail: "./images/slidesabadosolidario6.jpg",
  },
  {
    original: "./images/slidesabadosolidario7.jpg",
    thumbnail: "./images/slidesabadosolidario7.jpg",
  },
  {
    original: "./images/slidesabadosolidario8.jpg",
    thumbnail: "./images/slidesabadosolidario8.jpg",
  },
  {
    original: "./images/slidesabadosolidario9.jpg",
    thumbnail: "./images/slidesabadosolidario9.jpg",
  },
  {
    original: "./images/slidesabadosolidario10.jpg",
    thumbnail: "./images/slidesabadosolidario10.jpg",
  },
  {
    original: "./images/slidesabadosolidario11.jpg",
    thumbnail: "./images/slidesabadosolidario11.jpg",
  },
  {
    original: "./images/slidesabadosolidario12.jpg",
    thumbnail: "./images/slidesabadosolidario12.jpg",
  },
  {
    original: "./images/slidesabadosolidario13.jpg",
    thumbnail: "./images/slidesabadosolidario13.jpg",
  },
  {
    original: "./images/slidesabadosolidario14.jpg",
    thumbnail: "./images/slidesabadosolidario14.jpg",
  },
  {
    original: "./images/slidesabadosolidario15.jpg",
    thumbnail: "./images/slidesabadosolidario15.jpg",
  },
  {
    original: "./images/slidesabadosolidario16.jpg",
    thumbnail: "./images/slidesabadosolidario16.jpg",
  },
  {
    original: "./images/slidesabadosolidario17.jpg",
    thumbnail: "./images/slidesabadosolidario17.jpg",
  },
  {
    original: "./images/slidesabadosolidario18.jpg",
    thumbnail: "./images/slidesabadosolidario18.jpg",
  },
  {
    original: "./images/slidesabadosolidario19.jpg",
    thumbnail: "./images/slidesabadosolidario19.jpg",
  },
  {
    original: "./images/slidesabadosolidario20.jpg",
    thumbnail: "./images/slidesabadosolidario20.jpg",
  },
];

const images2 = [
  {
    original: "./images/slideyara1.jpg",
    thumbnail: "./images/slideyara1.jpg",
  },
  {
    original: "./images/slideyara2.jpg",
    thumbnail: "./images/slideyara2.jpg",
  },
  {
    original: "./images/slideyara3.jpg",
    thumbnail: "./images/slideyara3.jpg",
  },
  {
    original: "./images/slideyara4.jpg",
    thumbnail: "./images/slideyara4.jpg",
  },
];

const images3 = [
  {
    original: "./images/slidemarista1.jpg",
    thumbnail: "./images/slidemarista1.jpg",
  },
  {
    original: "./images/slidemarista2.jpg",
    thumbnail: "./images/slidemarista2.jpg",
  },
];

const images1 = [
  {
    original: "./images/slidesicredi1.jpg",
    thumbnail: "./images/slidesicredi1.jpg",
  },
  {
    original: "./images/slidesicredi2.jpg",
    thumbnail: "./images/slidesicredi2.jpg",
  },
  {
    original: "./images/slidesicredi3.jpg",
    thumbnail: "./images/slidesicredi3.jpg",
  },
];

const title1 =
  "Projeto para reorganização logística do estoque do banco é contemplado pelo fundo social do SICREDI";
const title2 = "Yara em ação!";
const title3 =
  "Recital Poético Musical, realizado dia 02/10/2019 no Teatro Municipal - >A força voluntária do Colégio Marista";
const title4 =
  " Sábado Solidário 09/11/2019 -   Agradecimento especial ao Supermercados Guanabara e BIG. Nossa gratidão ao 6° GAC e a Marinha do Brasil pelo incansável apoio logístico.";


function Galeria() {
  const [slide, setSlide] = useState(images1);
  const [title, setTitle] = useState(title1);
  return (
    <div className="pag">
      <br />

      <div className="button-container">
        <button
          onClick={() => {
            setSlide(images1);
            setTitle(title1);
          }}
        >
          <p>Projeto do banco é contemplado pelo fundo social do SICREDI</p>
        </button>

        <button
          onClick={() => {
            setSlide(images2);
            setTitle(title2);
          }}
        >
          <p>Yara em ação!</p>
        </button>

        <button
          onClick={() => {
            setSlide(images3);
            setTitle(title3);
          }}
        >
          <p>
            Recital Poético Musical, realizado dia 02/10/2019 no Teatro
            Municipal{" "}
          </p>
        </button>

        <button
          onClick={() => {
            setSlide(images4);
            setTitle(title4);
          }}
        >
          <p>Sábado Solidário 09/11/2019</p>
        </button>
      </div>

      <h1 className="h1-caurosel"> {title}</h1>
      <div className="caurosel">
        <ImageGallery items={slide} />
      </div>
    </div>
  );
}

export default Galeria;
