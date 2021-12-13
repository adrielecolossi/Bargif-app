import React, { useState } from "react";
import "./perguntas.css";
import { Link } from "react-router-dom";
import HeaderOne from "../header/header.js";

function Perguntas() {
  
  const faq = [
    {
      title: "O banco distribui refeições para quem?",
      resposta:
        "O Banco não distribui alimentos diretamente às pessoas, mas sim à instituições oficialmente reconhecidas que promovem a transformação do alimento em refeições para os cidadãos necessitados.",
      link: "./pontos",
      info: "Clique para mais informações!",
    },
    {
      title: "O que é o Banco de Alimentos e o que fazem?",
      resposta:
        "O Banco de Alimentos se caracteriza por ser uma organização sem fins lucrativos constituída por voluntários e que têm como objetivo arrecadar alimentos e recuperar excessos alimentares da sociedade redistribuindo os mesmos de forma organizada aos mais necessitados, combatendo assim a fome e o desperdício de insumos.",
      link: "./perguntas",
      info: "",
    },
    {
      title: "Como doar?",
      resposta:
        "Você pode fazer uma transferência para: Banco de Alimentos de Rio Grande (CNPJ: 10.932.667/0001-86) Agência 26948 / Conta 1154133",
      link: "./doar",
      info: "Clique para mais informações!",
    },
    {
      title: "Qual valor para doação?",
      resposta:
        "O que você conseguir doar! O Banco de Alimentos foi criado para ajudar a população e qualquer ajuda é bem-vinda!",
      link: "./doar",
      info: "Clique para mais informações!",
    },
    {
      title: "Qual endereço para entrega?",
      resposta: "Avenida Pelotas, 147, esquina com a Caramuru.",
      link: "./",
      info: "Clique para mais informações!",
    },
    {
      title: "O Barg doa alimentos para confecção de cestas básicas?",
      resposta: "Não, o banco distribui alimento somente para as instituições que efetuam a manipulação direta dos mesmos, transformando-os em refeições.",
      link: "./perguntas",
      info: "",
    }
  ];

  const [perguntas, setPerguntas] = useState([false, false, false]);

  const showRespostas = (estado) => {
    const estadoAtual = [...perguntas];
    estadoAtual[estado] = !estadoAtual[estado];
    setPerguntas(estadoAtual);
  };

  return (
    <div>
     <HeaderOne></HeaderOne>
      <p className="meet"> FAQ - Perguntas e Respostas </p>
      <div className="FAQ">
        {faq.map((faq, estado) => {
          return (
            <div className="box">
              <ul className="pergunta" onClick={() => showRespostas(estado)}>
                {faq.title} &nbsp;&nbsp;
              </ul>
              {perguntas[estado] && (
                <li className="resposta">
                  <Link
                    to={faq.link}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {faq.resposta}
                    <p style={{ fontWeight: "bold" }}>{faq.info}</p>
                  </Link>
                </li>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Perguntas;
