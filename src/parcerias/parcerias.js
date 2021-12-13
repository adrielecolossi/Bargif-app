import React from "react";
import "./parcerias.css";
import HeaderOne from "../header/header.js";

function Parcerias() {
  window.scrollTo(0, 0);

  const parceiros = [
    {
      title: "Big",
      img: "https://folhetosbig.com.br/media/gvkptojc/logo-big.svg",
      link: "https://www.big.com.br",
    },
    {
      title: "Maxxi",
      img: "https://folhetosmaxxi.com.br/media/iz1dd532/logo-maxxi.svg",
      link: "https://folhetosmaxxi.com.br/lojas/maxxi-atacado-rio-grande-rio-grande-rs/",
    },
    {
      title: "Guanabara",
      img: "https://www.smguanabara.com.br/application/resources/img/logo-home-guanabara.png",
      link: "https://www.smguanabara.com.br",
    },
    {
      title: " Vetorial",
      img: "https://vetorial.net/wp-content/uploads/2020/08/logo-vetorial-perto-de-verdade.png",
      link: "https://vetorial.net",
    },
    {
      title: " Miki & Mackmillan Associados",
      img: "https://drive.google.com/uc?id=1F8_J8FA21DnySM9vGP449oV-CZIVnAHt",
      link: "",
    },
  ];
  const mantenedores = [
    {
      title: "Yara Brasil",
      img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGLamHYcF36Pw/company-logo_200_200/0/1625145867918?e=2159024400&v=beta&t=U-j8ARQtG0p_hlLJYGuwHOS28vNa2XW8QEGOw_J2-nw",
      link: "https://www.yarabrasil.com.br",
    },
    {
      title: "Tecon Rio Grande",
      img: "https://ncdn0.infojobs.com.br/logos/Company_Evaluation/143533.jpg",
      link: "https://www.wilsonsons.com.br/pt-br/teconriogrande/",
    },
    {
      title: " Refinaria de Petróleo Riograndense",
      img: "http://www.refinariariograndense.com.br/site/img/refinaria_de_petroleo_riograndense.jpg",
      link: "http://www.refinariariograndense.com.br/site/Pages/recursos-humanos/envie-seu-curriculo/envie-seu-curriculo.aspx",
    },
    {
      title: " Associação dos Proprietários de Imóveis de Rio Grande",
      img: "https://drive.google.com/uc?id=17ECk2eTv75quECJe0LEVAQv_GYsIjVxD",
      link: "https://www.descubraonline.com/guia/rs/rio-grande/associacao-dos-proprietarios-de-imoveis-de-rio-grande-89429419000177/",
    },
  ];
  return (
    <>
    <HeaderOne></HeaderOne>
    <div className="pag1">
      <p className="meet"> Conheça nossos parceiros </p>
      <p className="description">
        {" "}
        Parceiros ou apoiadores: são pessoas físicas que efetuam alguma doação
        pontual (de produtos ou serviços), contribuindo para o funcionamento do
        BARG bem como para realização de ações.
      </p>
      <div className="img-parcerias">
        {parceiros.map((parceiros) => {
          return (
            <a href={parceiros.link} target="_blank">
              {" "}
              <img
                alt={parceiros.title}
                src={parceiros.img}
                width="130px"
              />{" "}
            </a>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <p className="meet"> Conheça nossos mantenedores </p>
      <p className="description">
        {" "}
        Mantenedores são pessoas físicas/jurídicas que mensalmente efetuam a
        doação de valores que posteriormente são utilizados pelo BARG para os
        gastos com operação e aquisição de alimentos/produtos. 
      </p>
      <div className="img-parcerias">
        {mantenedores.map((mantenedores) => {
          return (
            <a href={mantenedores.link} target="_blank">
              <img
                alt={mantenedores.title}
                src={mantenedores.img}
                width="130px"
              />
            </a>
          );
        })}
      </div>
      <br />
    </div>
    </>
  );
}
export default Parcerias;
