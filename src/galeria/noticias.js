import React from "react";
import { useState } from "react";
import "./noticias.css";
import OnlyNoticia from "./onlynoticia.js";
import { Link } from "react-router-dom";
import HeaderOne from "../header/header.js";

const noticias = [
  {
    title: "Uma maré cheia de solidariedade ",
    body: "O Rio Grande Yacht Clube promoveu um Velejaço e RAID Solidário reunindo navegadores em prol da solidariedade. O objetivo foi angariar alimentos em prol do Banco de Alimentos do Rio Grande e reuniu, no sábado de 11 de setembro, mais de 70 participantes que realizaram um lindo espetáculo na Lagoa dos Patos com seus veleiros, lanchas e motos aquáticas .  Os navegadores e velejadores saíram juntos do Rio Grande Yacht Club (RGYC) em direção ao canal do Porto Velho, passando pelo Porto Novo, até a boia 17 retornando ao RGYC aonde foi servido a bordo de cada embarcação um delicioso Chouripão. Foram arrecadados 1.150 quilos de alimentos não perecíveis. Nós do BARG agradecemos muito a esta grande iniciativa!",
    img: "https://drive.google.com/uc?id=1CS4BmyGjcvHEJSMhrSKOPf4JW1zsPlT8",
    data: "11/09/2021",
    class: "first",
    width: "400vw",
  },
  {
    title: "Sábado Solidário",
    body: "Sábado Solidário - Agradecimento especial ao Supermercados Guanabara e BIG. Nossa gratidão ao 6° GAC e a Marinha do Brasil pelo incansável apoio logístico.",
    img: "https://drive.google.com/uc?id=1PHxRbIyYOAymv611rXH6qc4qbmK4r33u",
    data: "09/11/2019",
    class: "outro",
    width: "240vw",
  },
  {
    title:
      "Recital Poético Musical, realizado no Teatro Municipal -> A força voluntária do Colégio Marista",
    body: "O Colégio Marista é show de solidariedade. O Recital Poético Musical, realizado no último dia 02/10 no Teatro Municipal, arrecadou 302 litros de leite que foram doados ao Banco de Alimentos. A força voluntária do Colégio Marista através de seus alunos e familiares, ajudou a colocar leite na mesa de idosos, adultos e principalmente crianças de nosso município. A diretoria voluntária do Banco de Alimentos e as entidades assistidas, agradecem a doação.",
    img: "https://drive.google.com/uc?id=1XftfERNbWlhGnUbtFYU1Ea6KzC9IVe7i",
    data: "02/10/2019",
    class: "outro",
    width: "200vw",
  },
  {
    title:
      "Projeto para reorganização logística do estoque do banco é contemplado pelo fundo social do SICREDI",
    body: "Idealizado pelo presidente do BARG, Sergio Paixão Cortez, o projeto para reorganização logística do estoque do banco foi contemplado pelo fundo social do SICREDI. Na foto, nosso vice presidente Luis Eduardo Gazzola e o diretor financeiro Luiz Augusto Pinto de Lemos, durante a assembleia do banco do SICREDI que contemplou os projetos sociais escolhidos. A direção do Banco de Alimentos realizou a compra dos palhetes com parte dos recursos.",
    img: "https://drive.google.com/uc?id=1GCMWv7fuPF2RqkOSr-YKCOWAkL4EyKxA",
    data: "",
    class: "outro",
    width: "170vw",
  },
];

function Noticias() {
  window.scrollTo(0, 0);

  return (
    <div>
      <HeaderOne></HeaderOne>
      <p className="meet"> Conheça mais sobre as ações do BARG!</p>

      <div className="pag">
        {noticias.map((noticia) => {
          return (
            <div className={noticia.class}>
              <img
                alt={noticia.title}
                src={noticia.img}
                width={noticia.width}
              />

              <Link
                to={{
                  pathname: "/onlynoticia/" + noticia.title,
                  state: {
                    noticia,
                  },
                }}
                style={{ textDecoration: "none" }}
              >
                <p className="title-noticias">{noticia.title}</p>
                <p className="noticia-body">{noticia.body}</p>
                <p className="subtitle" style={{ textDecoration: "none" }}>
                  Clique para mais informações! {noticia.data}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Noticias;
